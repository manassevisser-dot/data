// src/app/orchestrators/MasterOrchestrator.ts
// UPDATED: getPageViewModels gebruikt nu buildGroupedViewModels

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { ResearchOrchestrator } from './ResearchOrchestrator.WIP';
import { FinancialOrchestrator } from './FinancialOrchestrator';
import { ImportOrchestrator } from './ImportOrchestrator';
import { VisibilityOrchestrator } from './VisibilityOrchestrator';
import { RenderOrchestrator } from './RenderOrchestrator';
import { validateAtBoundary } from '@adapters/validation/validateAtBoundary';
import { logger } from '@adapters/audit/AuditLoggerAdapter';
import { formatToDisplay } from '@domain/helpers/DateHydrator';
import { getFieldDefinition } from '../../domain/registry/FieldRegistry';

/**
 * PHOENIX MASTER ORCHESTRATOR
 * Voert de regie over alle orchestrators.
 */
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }

  /**
   * De UI (fieldRenderer) gebruikt deze methode om te bepalen
   * of een veld of sectie getoond moet worden.
   */
  public isVisible(ruleName: string, memberId?: string): boolean {
    return this.visibility.evaluate(ruleName, memberId);
  }

  /**
   * De UI (het scherm) roept deze aan als je iets invult.
   */
  public updateField(fieldId: string, value: unknown): void {
    const result = validateAtBoundary(fieldId, value);

    if (!result.success) {
      logger.warn(result.error, { fieldId, value });
      return;
    }

    this.fso.updateField(fieldId, result.data);

    const newSummary = FinancialOrchestrator.prepareViewModel(
      this.fso.getState(),
    );

    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
  }

  /**
   * Wordt aangeroepen bij CSV-import (bijv. banktransacties)
   */
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();

    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });

    this.fso.updateField('transactions', result.transactions);

    const newSummary = FinancialOrchestrator.prepareViewModel(
      this.fso.getState(),
    );

    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });

    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }

  public getValue(fieldId: string): unknown {
    return this.fso.getValue(fieldId);
  }

  public getFormattedDate(
    fieldId: string,
    format?: 'dd-mm-yyyy' | 'weekday' | 'short' | 'full',
  ): string {
    const value = this.fso.getValue(fieldId);

    if (value instanceof Date) {
      return formatToDisplay(value, format);
    }

    if (typeof value === 'string' && value !== '') {
      const d = new Date(value);
      return isNaN(d.getTime()) ? value : formatToDisplay(d, format);
    }

    return '';
  }

  public validate(fieldId: string, value: unknown): string | null {
    const r = validateAtBoundary(fieldId, value);

    if (!r.success) {
      logger.warn(r.error, { fieldId });
      return r.error;
    }

    return null;
  }
  
  /** Bouw ViewModel voor één field (zonder zichtbaarheid) */
  public getFieldViewModel(fieldId: string) {
    return this.render.buildFieldViewModel(fieldId);
  }

  /**
   * 🆕 UPDATED: Bouw ViewModels voor een hele pagina:
   * 1) filter via Registry → VO
   * 2) per zichtbaar veld: RO.buildGroupedViewModels(ids)
   * 
   * Deze method detecteert nu automatisch groepen!
   */
  public getPageViewModels(fieldIds: string[], context?: { memberId?: string }): Record<string, unknown>[] {
    const memberId = context?.memberId;

    // 1) Zichtbaarheid bepalen aan de hand van Registry + VO
    const visibleIds = fieldIds.filter((id) => {
      const def = getFieldDefinition(id);
      if (def === null) return false;
      const rule = def.visibilityRuleName ?? '';
      return rule === '' ? true : this.visibility.evaluate(rule, memberId);
    });

    // 🆕 2) VM bouwen via RO.buildGroupedViewModels (detecteert groepen!)
    const models = this.render.buildGroupedViewModels(visibleIds);
    
    // Voeg isVisible: true toe voor backward compatibility
    return models.map(vm => ({ ...vm, isVisible: true }));
  }
}