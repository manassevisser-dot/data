// src/app/orchestrators/RenderOrchestrator.ts
// Verzamelaar voor ViewModels - met Field Grouping support

import { VisibilityOrchestrator, VisibilityContext } from './VisibilityOrchestrator';
import { FormStateOrchestrator } from './FormStateOrchestrator';
import { FieldViewModel, PageViewModel } from '@domain/viewmodel/FieldViewModel';
import { 
  getFieldDefinition, 
  getGroupMetadata,
  isKnownField 
} from '@domain/registry/FieldRegistry';
import { logger } from '@adapters/audit/AuditLoggerAdapter';

/**
 * RenderOrchestrator
 * 
 * Verantwoordelijkheden:
 * - Bouwt ViewModels uit field configs + state
 * - Detecteert field groups en maakt container ViewModels
 * - Evalueert visibility rules
 * - Leest options uit registry
 * - Leest current values uit state
 */
export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator,
    private readonly visibility: VisibilityOrchestrator,
  ) {}

  /**
   * Bouwt een ViewModel voor een enkel veld
   * 
   * @param fieldId - Field identifier
   * @param context - Context voor visibility (bijv. memberId)
   * @returns ViewModel of null als field niet visible is
   */
  public buildFieldViewModel(
    fieldId: string,
    context?: VisibilityContext
  ): FieldViewModel | null {
    // Validate field exists
    if (!isKnownField(fieldId)) {
      logger.warn('RENDER_UNKNOWN_FIELD', { fieldId });
      return null;
    }

    const definition = getFieldDefinition(fieldId)!;
    
    // Check visibility
    if (definition.visibilityRuleName) {
      const isVisible = this.visibility.evaluate(
        definition.visibilityRuleName,
        context
      );
      
      if (!isVisible) {
        return null; // Field niet tonen
      }
    }
    
    // Get current value from state
    const value = this.fso.getValue(fieldId);
    
    // Get options if needed
    let options: readonly string[] | undefined;
    if (definition.optionsKey) {
      options = this.getOptions(definition.optionsKey);
    }
    
    // Build ViewModel
    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      placeholderToken: definition.placeholderToken,
      value,
      isVisible: true,
      options,
      constraintsKey: definition.constraintsKey,
      isDerived: definition.isDerived,
    };
  }

  /**
   * 🆕 Bouwt ViewModels voor een lijst van fieldIds
   * Detecteert groepen en maakt container ViewModels
   * 
   * @param fieldIds - Lijst van field identifiers
   * @param context - Context voor visibility
   * @returns Array van ViewModels (inclusief containers voor gegroepeerde velden)
   */
  public buildPageViewModels(
    fieldIds: string[],
    context?: VisibilityContext
  ): FieldViewModel[] {
    const result: FieldViewModel[] = [];
    const groupedFields = new Map<string, FieldViewModel[]>();
    const processedGroups = new Set<string>();
    
    // Stap 1: Build individual ViewModels en groepeer ze
    for (const fieldId of fieldIds) {
      const vm = this.buildFieldViewModel(fieldId, context);
      if (!vm) continue; // Skip niet-visible fields
      
      const definition = getFieldDefinition(fieldId);
      const groupId = definition?.groupId;
      
      if (groupId) {
        // Voeg toe aan groep
        if (!groupedFields.has(groupId)) {
          groupedFields.set(groupId, []);
        }
        groupedFields.get(groupId)!.push(vm);
      } else {
        // Standalone field
        result.push(vm);
      }
    }
    
    // Stap 2: Converteer groepen naar container ViewModels
    for (const [groupId, fields] of groupedFields) {
      if (fields.length === 0) continue;
      
      const metadata = getGroupMetadata(groupId);
      if (!metadata) {
        // Groep heeft geen metadata -> render fields individueel
        logger.warn('RENDER_GROUP_NO_METADATA', { groupId });
        result.push(...fields);
        continue;
      }
      
      // Maak container ViewModel
      const containerVM: FieldViewModel = {
        fieldId: `__group_${groupId}`,
        componentType: 'container',
        labelToken: metadata.labelToken,
        value: undefined,
        isVisible: true,
        
        // Container-specific
        containerBehavior: metadata.behavior,
        childFields: fields,
      };
      
      result.push(containerVM);
    }
    
    return result;
  }

  /**
   * 🆕 Bouwt een complete PageViewModel
   * 
   * @param pageConfig - Config van de page
   * @param context - Context voor visibility
   * @returns Complete PageViewModel
   */
  public buildPageViewModel(
    pageConfig: {
      pageId: string;
      titleToken: string;
      fields: Array<{ fieldId: string }>;
    },
    context?: VisibilityContext
  ): PageViewModel {
    const fieldIds = pageConfig.fields.map(f => f.fieldId);
    const fieldViewModels = this.buildPageViewModels(fieldIds, context);
    
    return {
      pageId: pageConfig.pageId,
      titleToken: pageConfig.titleToken,
      fields: fieldViewModels,
    };
  }

  /**
   * Helper: Get options from registry
   */
  private getOptions(optionsKey: string): readonly string[] {
    // TODO: Import from @domain/constants/options.ts
    const optionsMap: Record<string, readonly string[]> = {
      autoCount: ['Geen', 'Een', 'Twee'],
      woningType: ['Huur', 'Koop', 'Anders'],
      isBoolean: ['Ja', 'Nee'],
      gender: ['man', 'vrouw', 'anders', 'n.v.t.'],
      incomeCategory: ['geen', 'werk', 'uitkering', 'anders'],
      incomeFrequency: ['week', '4wk', 'month', 'quarter', 'year'],
      uitkeringType: [
        'DUO', 'Bijstand', 'WW', 'ZW', 'WAO', 
        'WGA', 'WIA', 'IVA', 'WAJONG', 'IOW', 
        'Pensioen', 'AOW', 'anders'
      ],
      burgerlijkeStaat: [
        'Alleenstaand', 'Gehuwd', 'Fiscaal Partners',
        'Samenwonend', 'Bevriend', 'Anders'
      ],
    };
    
    return optionsMap[optionsKey] ?? [];
  }
}





