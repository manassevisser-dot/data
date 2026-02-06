

// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2407
// Timestamp:     2026-02-06T08:17:36.743Z
// ==========================================================
<TouchableOpacity>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2408
// Timestamp:     2026-02-06T08:17:36.744Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2409
// Timestamp:     2026-02-06T08:17:36.745Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2410
// Timestamp:     2026-02-06T08:17:36.745Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2411
// Timestamp:     2026-02-06T08:17:36.745Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2412
// Timestamp:     2026-02-06T08:17:36.746Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2413
// Timestamp:     2026-02-06T08:17:36.746Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2414
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2415
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2416
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2417
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2418
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2419
// Timestamp:     2026-02-06T08:17:36.747Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2420
// Timestamp:     2026-02-06T08:17:36.748Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2421
// Timestamp:     2026-02-06T08:17:36.748Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2422
// Timestamp:     2026-02-06T08:17:36.749Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2423
// Timestamp:     2026-02-06T08:17:36.749Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2424
// Timestamp:     2026-02-06T08:17:36.749Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2425
// Timestamp:     2026-02-06T08:17:36.750Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2426
// Timestamp:     2026-02-06T08:17:36.750Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2427
// Timestamp:     2026-02-06T08:17:36.750Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2428
// Timestamp:     2026-02-06T08:17:36.750Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2429
// Timestamp:     2026-02-06T08:17:36.751Z
// ==========================================================
fieldVisibility.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2430
// Timestamp:     2026-02-06T08:17:36.751Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2431
// Timestamp:     2026-02-06T08:17:36.751Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2432
// Timestamp:     2026-02-06T08:17:36.751Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2433
// Timestamp:     2026-02-06T08:17:36.752Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2434
// Timestamp:     2026-02-06T08:17:36.753Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2435
// Timestamp:     2026-02-06T08:17:36.753Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2436
// Timestamp:     2026-02-06T08:17:36.755Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2437
// Timestamp:     2026-02-06T08:17:36.755Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2438
// Timestamp:     2026-02-06T08:17:36.755Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2439
// Timestamp:     2026-02-06T08:17:36.756Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2440
// Timestamp:     2026-02-06T08:17:36.756Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2441
// Timestamp:     2026-02-06T08:17:36.756Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2442
// Timestamp:     2026-02-06T08:17:36.756Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2443
// Timestamp:     2026-02-06T08:17:36.757Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2444
// Timestamp:     2026-02-06T08:17:36.757Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2445
// Timestamp:     2026-02-06T08:17:36.757Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2446
// Timestamp:     2026-02-06T08:17:36.758Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2447
// Timestamp:     2026-02-06T08:17:36.758Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2448
// Timestamp:     2026-02-06T08:17:36.758Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2449
// Timestamp:     2026-02-06T08:17:36.758Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2450
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2451
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2452
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2453
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2454
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2455
// Timestamp:     2026-02-06T08:17:36.759Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2456
// Timestamp:     2026-02-06T08:17:36.760Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2457
// Timestamp:     2026-02-06T08:17:36.760Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2458
// Timestamp:     2026-02-06T08:17:36.760Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2459
// Timestamp:     2026-02-06T08:17:36.763Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2460
// Timestamp:     2026-02-06T08:17:36.764Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2461
// Timestamp:     2026-02-06T08:17:36.764Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2462
// Timestamp:     2026-02-06T08:17:36.764Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2463
// Timestamp:     2026-02-06T08:17:36.765Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2464
// Timestamp:     2026-02-06T08:17:36.766Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2465
// Timestamp:     2026-02-06T08:17:36.766Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2466
// Timestamp:     2026-02-06T08:17:36.766Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2467
// Timestamp:     2026-02-06T08:17:36.767Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2468
// Timestamp:     2026-02-06T08:17:36.767Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2469
// Timestamp:     2026-02-06T08:17:36.767Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2470
// Timestamp:     2026-02-06T08:17:36.767Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2471
// Timestamp:     2026-02-06T08:17:36.767Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2472
// Timestamp:     2026-02-06T08:17:36.768Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2473
// Timestamp:     2026-02-06T08:17:36.768Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2474
// Timestamp:     2026-02-06T08:17:36.768Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2475
// Timestamp:     2026-02-06T08:17:36.768Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2476
// Timestamp:     2026-02-06T08:17:36.769Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2477
// Timestamp:     2026-02-06T08:17:36.769Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2478
// Timestamp:     2026-02-06T08:17:36.770Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2479
// Timestamp:     2026-02-06T08:17:36.771Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2480
// Timestamp:     2026-02-06T08:17:36.772Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2481
// Timestamp:     2026-02-06T08:17:36.772Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2482
// Timestamp:     2026-02-06T08:17:36.773Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2483
// Timestamp:     2026-02-06T08:17:36.774Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2484
// Timestamp:     2026-02-06T08:17:36.774Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2485
// Timestamp:     2026-02-06T08:17:36.775Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2486
// Timestamp:     2026-02-06T08:17:36.775Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2487
// Timestamp:     2026-02-06T08:17:36.776Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2488
// Timestamp:     2026-02-06T08:17:36.778Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2489
// Timestamp:     2026-02-06T08:17:36.779Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2490
// Timestamp:     2026-02-06T08:17:36.779Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2491
// Timestamp:     2026-02-06T08:17:36.779Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2492
// Timestamp:     2026-02-06T08:17:36.780Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2493
// Timestamp:     2026-02-06T08:17:36.781Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2494
// Timestamp:     2026-02-06T08:17:36.782Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2495
// Timestamp:     2026-02-06T08:17:36.782Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2496
// Timestamp:     2026-02-06T08:17:36.783Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2497
// Timestamp:     2026-02-06T08:17:36.783Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2498
// Timestamp:     2026-02-06T08:17:36.784Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2499
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2500
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2501
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2502
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2503
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2504
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2505
// Timestamp:     2026-02-06T08:17:36.785Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2506
// Timestamp:     2026-02-06T08:17:36.786Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2507
// Timestamp:     2026-02-06T08:17:36.786Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2508
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2509
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2510
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2511
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2512
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2513
// Timestamp:     2026-02-06T08:17:36.787Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2514
// Timestamp:     2026-02-06T08:17:36.788Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2515
// Timestamp:     2026-02-06T08:17:36.788Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2516
// Timestamp:     2026-02-06T08:17:36.788Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2517
// Timestamp:     2026-02-06T08:17:36.788Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2518
// Timestamp:     2026-02-06T08:17:36.789Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2519
// Timestamp:     2026-02-06T08:17:36.789Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2520
// Timestamp:     2026-02-06T08:17:36.789Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2521
// Timestamp:     2026-02-06T08:17:36.790Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2522
// Timestamp:     2026-02-06T08:17:36.791Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2523
// Timestamp:     2026-02-06T08:17:36.791Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2524
// Timestamp:     2026-02-06T08:17:36.791Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2525
// Timestamp:     2026-02-06T08:17:36.791Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2526
// Timestamp:     2026-02-06T08:17:36.791Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2527
// Timestamp:     2026-02-06T08:17:36.792Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2528
// Timestamp:     2026-02-06T08:17:36.792Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2529
// Timestamp:     2026-02-06T08:17:36.793Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2530
// Timestamp:     2026-02-06T08:17:36.793Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2531
// Timestamp:     2026-02-06T08:17:36.794Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2532
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2533
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2534
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2535
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2536
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2537
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2538
// Timestamp:     2026-02-06T08:17:36.795Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2539
// Timestamp:     2026-02-06T08:17:36.796Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2540
// Timestamp:     2026-02-06T08:17:36.796Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2541
// Timestamp:     2026-02-06T08:17:36.797Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2542
// Timestamp:     2026-02-06T08:17:36.797Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2543
// Timestamp:     2026-02-06T08:17:36.798Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2544
// Timestamp:     2026-02-06T08:17:36.798Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2545
// Timestamp:     2026-02-06T08:17:36.799Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2546
// Timestamp:     2026-02-06T08:17:36.799Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2547
// Timestamp:     2026-02-06T08:17:36.799Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2548
// Timestamp:     2026-02-06T08:17:36.800Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2549
// Timestamp:     2026-02-06T08:17:36.800Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2550
// Timestamp:     2026-02-06T08:17:36.800Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2551
// Timestamp:     2026-02-06T08:17:36.813Z
// ==========================================================
<View style={styles.pageContainer}>
  <Text style={styles.pageTitle}>{config.titleToken}</Text>      <ScrollView>
    {viewModels.map((vm: FieldViewModel) => {
      // 🆕 STRUCTURELE BESLISSING: Container vs Field
      // WizardPage beslist welk component type, gebaseerd op wat Orchestrator geeft          if (vm.componentType === 'container') {
        // Container ViewModel → Render als CollapsibleSection
        return (
          <CollapsibleSection
            key={vm.fieldId}
            labelToken={vm.labelToken}
            defaultExpanded={false}
          >
            {/* Recursief: render child fields */}
            {(vm.childFields ?? []).map((child) => (
              <FieldRenderer
                key={child.fieldId}
                viewModel={child}
                onUpdate={(value) => orchestrator.updateField(child.fieldId, value)}
              />
            ))}
          </CollapsibleSection>
        );
      }
      // Regular field ViewModel → Render via FieldRenderer
      return (
        <FieldRenderer
          key={vm.fieldId}
          viewModel={vm}
          onUpdate={(value) => orchestrator.updateField(vm.fieldId, value)}
        />
      );
    })}
  </ScrollView>
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2552
// Timestamp:     2026-02-06T08:17:36.813Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "typescript",
"code": "2322",
"severity": 8,
"message": "Type '{ label: string; value: number; onChange: (value: unknown) => void; error: string | null | undefined; }' is not assignable to type 'IntrinsicAttributes & InputCounterProps'.\n  Property 'label' does not exist on type 'IntrinsicAttributes & InputCounterProps'.",
"source": "ts",
"startLineNumber": 40,
"startColumn": 11,
"endLineNumber": 40,
"endColumn": 16


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2553
// Timestamp:     2026-02-06T08:17:36.814Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "max-lines-per-function",
    "target": {
        "$mid": 1,
        "path": "/docs/latest/rules/max-lines-per-function",
        "scheme": "https",
        "authority": "eslint.org"
    }
},
"severity": 4,
"message": "Arrow function has too many lines (39). Maximum allowed is 30.",
"source": "eslint",
"startLineNumber": 22,
"startColumn": 60,
"endLineNumber": 70,
"endColumn": 2


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2554
// Timestamp:     2026-02-06T08:17:36.814Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "@typescript-eslint/strict-boolean-expressions",
    "target": {
        "$mid": 1,
        "path": "/rules/strict-boolean-expressions",
        "scheme": "https",
        "authority": "typescript-eslint.io"
    }
},
"severity": 4,
"message": "Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.",
"source": "eslint",
"startLineNumber": 64,
"startColumn": 12,
"endLineNumber": 64,
"endColumn": 27


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2555
// Timestamp:     2026-02-06T08:17:36.820Z
// ==========================================================
<TouchableOpacity>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2556
// Timestamp:     2026-02-06T08:17:36.822Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2557
// Timestamp:     2026-02-06T08:17:36.822Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2558
// Timestamp:     2026-02-06T08:17:36.822Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2559
// Timestamp:     2026-02-06T08:17:36.822Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2560
// Timestamp:     2026-02-06T08:17:36.828Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2561
// Timestamp:     2026-02-06T08:17:36.830Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2562
// Timestamp:     2026-02-06T08:17:36.830Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2563
// Timestamp:     2026-02-06T08:17:36.831Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2564
// Timestamp:     2026-02-06T08:17:36.832Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2565
// Timestamp:     2026-02-06T08:17:36.834Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2566
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2567
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2568
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2569
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2570
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2571
// Timestamp:     2026-02-06T08:17:36.836Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2572
// Timestamp:     2026-02-06T08:17:36.841Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2573
// Timestamp:     2026-02-06T08:17:36.842Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2574
// Timestamp:     2026-02-06T08:17:36.844Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2575
// Timestamp:     2026-02-06T08:17:36.844Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2576
// Timestamp:     2026-02-06T08:17:36.844Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2577
// Timestamp:     2026-02-06T08:17:36.846Z
// ==========================================================
fieldVisibility.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2578
// Timestamp:     2026-02-06T08:17:36.846Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2579
// Timestamp:     2026-02-06T08:17:36.847Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2580
// Timestamp:     2026-02-06T08:17:36.850Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2581
// Timestamp:     2026-02-06T08:17:36.850Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2582
// Timestamp:     2026-02-06T08:17:36.850Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2583
// Timestamp:     2026-02-06T08:17:36.850Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2584
// Timestamp:     2026-02-06T08:17:36.851Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2585
// Timestamp:     2026-02-06T08:17:36.852Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2586
// Timestamp:     2026-02-06T08:17:36.852Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2587
// Timestamp:     2026-02-06T08:17:36.853Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2588
// Timestamp:     2026-02-06T08:17:36.854Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2589
// Timestamp:     2026-02-06T08:17:36.854Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2590
// Timestamp:     2026-02-06T08:17:36.854Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2591
// Timestamp:     2026-02-06T08:17:36.854Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2592
// Timestamp:     2026-02-06T08:17:36.855Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2593
// Timestamp:     2026-02-06T08:17:36.855Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2594
// Timestamp:     2026-02-06T08:17:36.855Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2595
// Timestamp:     2026-02-06T08:17:36.860Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2596
// Timestamp:     2026-02-06T08:17:36.861Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2597
// Timestamp:     2026-02-06T08:17:36.861Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2598
// Timestamp:     2026-02-06T08:17:36.861Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2599
// Timestamp:     2026-02-06T08:17:36.861Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2600
// Timestamp:     2026-02-06T08:17:36.862Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2601
// Timestamp:     2026-02-06T08:17:36.863Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2602
// Timestamp:     2026-02-06T08:17:36.864Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2603
// Timestamp:     2026-02-06T08:17:36.866Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2604
// Timestamp:     2026-02-06T08:17:36.871Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2605
// Timestamp:     2026-02-06T08:17:36.871Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2606
// Timestamp:     2026-02-06T08:17:36.872Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2607
// Timestamp:     2026-02-06T08:17:36.872Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2608
// Timestamp:     2026-02-06T08:17:36.872Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2609
// Timestamp:     2026-02-06T08:17:36.872Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2610
// Timestamp:     2026-02-06T08:17:36.875Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2611
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2612
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2613
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2614
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2615
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2616
// Timestamp:     2026-02-06T08:17:36.876Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2617
// Timestamp:     2026-02-06T08:17:36.880Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2618
// Timestamp:     2026-02-06T08:17:36.880Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2619
// Timestamp:     2026-02-06T08:17:36.880Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2620
// Timestamp:     2026-02-06T08:17:36.882Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2621
// Timestamp:     2026-02-06T08:17:36.882Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2622
// Timestamp:     2026-02-06T08:17:36.882Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2623
// Timestamp:     2026-02-06T08:17:36.882Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2624
// Timestamp:     2026-02-06T08:17:36.884Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2625
// Timestamp:     2026-02-06T08:17:36.885Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2626
// Timestamp:     2026-02-06T08:17:36.885Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2627
// Timestamp:     2026-02-06T08:17:36.887Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2628
// Timestamp:     2026-02-06T08:17:36.888Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2629
// Timestamp:     2026-02-06T08:17:36.888Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2630
// Timestamp:     2026-02-06T08:17:36.889Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2631
// Timestamp:     2026-02-06T08:17:36.889Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2632
// Timestamp:     2026-02-06T08:17:36.889Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2633
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2634
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2635
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2636
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2637
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2638
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2639
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2640
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2641
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2642
// Timestamp:     2026-02-06T08:17:36.890Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2643
// Timestamp:     2026-02-06T08:17:36.892Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2644
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2645
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2646
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2647
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2648
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2649
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2650
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2651
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2652
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2653
// Timestamp:     2026-02-06T08:17:36.893Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2654
// Timestamp:     2026-02-06T08:17:36.894Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2655
// Timestamp:     2026-02-06T08:17:36.894Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2656
// Timestamp:     2026-02-06T08:17:36.894Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2657
// Timestamp:     2026-02-06T08:17:36.894Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2658
// Timestamp:     2026-02-06T08:17:36.897Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2659
// Timestamp:     2026-02-06T08:17:36.897Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2660
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2661
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2662
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2663
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2664
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2665
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2666
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2667
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2668
// Timestamp:     2026-02-06T08:17:36.898Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2669
// Timestamp:     2026-02-06T08:17:36.900Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2670
// Timestamp:     2026-02-06T08:17:36.900Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2671
// Timestamp:     2026-02-06T08:17:36.900Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2672
// Timestamp:     2026-02-06T08:17:36.900Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2673
// Timestamp:     2026-02-06T08:17:36.901Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2674
// Timestamp:     2026-02-06T08:17:36.901Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2675
// Timestamp:     2026-02-06T08:17:36.903Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2676
// Timestamp:     2026-02-06T08:17:36.903Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2677
// Timestamp:     2026-02-06T08:17:36.903Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2678
// Timestamp:     2026-02-06T08:17:36.903Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2679
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2680
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2681
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2682
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2683
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2684
// Timestamp:     2026-02-06T08:17:36.905Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2685
// Timestamp:     2026-02-06T08:17:36.906Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2686
// Timestamp:     2026-02-06T08:17:36.906Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2687
// Timestamp:     2026-02-06T08:17:36.907Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2688
// Timestamp:     2026-02-06T08:17:36.907Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2689
// Timestamp:     2026-02-06T08:17:36.908Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2690
// Timestamp:     2026-02-06T08:17:36.909Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2691
// Timestamp:     2026-02-06T08:17:36.909Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2692
// Timestamp:     2026-02-06T08:17:36.909Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2693
// Timestamp:     2026-02-06T08:17:36.909Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2694
// Timestamp:     2026-02-06T08:17:36.910Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2695
// Timestamp:     2026-02-06T08:17:36.910Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2696
// Timestamp:     2026-02-06T08:17:36.911Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2697
// Timestamp:     2026-02-06T08:17:36.912Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2698
// Timestamp:     2026-02-06T08:17:36.913Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2699
// Timestamp:     2026-02-06T08:17:36.913Z
// ==========================================================
<View style={styles.pageContainer}>
  <Text style={styles.pageTitle}>{config.titleToken}</Text>      <ScrollView>
    {viewModels.map((vm: FieldViewModel) => {
      // 🆕 STRUCTURELE BESLISSING: Container vs Field
      // WizardPage beslist welk component type, gebaseerd op wat Orchestrator geeft          if (vm.componentType === 'container') {
        // Container ViewModel → Render als CollapsibleSection
        return (
          <CollapsibleSection
            key={vm.fieldId}
            labelToken={vm.labelToken}
            defaultExpanded={false}
          >
            {/* Recursief: render child fields */}
            {(vm.childFields ?? []).map((child) => (
              <FieldRenderer
                key={child.fieldId}
                viewModel={child}
                onUpdate={(value) => orchestrator.updateField(child.fieldId, value)}
              />
            ))}
          </CollapsibleSection>
        );
      }
      // Regular field ViewModel → Render via FieldRenderer
      return (
        <FieldRenderer
          key={vm.fieldId}
          viewModel={vm}
          onUpdate={(value) => orchestrator.updateField(vm.fieldId, value)}
        />
      );
    })}
  </ScrollView>
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2700
// Timestamp:     2026-02-06T08:17:36.914Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "typescript",
"code": "2322",
"severity": 8,
"message": "Type '{ label: string; value: number; onChange: (value: unknown) => void; error: string | null | undefined; }' is not assignable to type 'IntrinsicAttributes & InputCounterProps'.\n  Property 'label' does not exist on type 'IntrinsicAttributes & InputCounterProps'.",
"source": "ts",
"startLineNumber": 40,
"startColumn": 11,
"endLineNumber": 40,
"endColumn": 16


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2701
// Timestamp:     2026-02-06T08:17:36.915Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "max-lines-per-function",
    "target": {
        "$mid": 1,
        "path": "/docs/latest/rules/max-lines-per-function",
        "scheme": "https",
        "authority": "eslint.org"
    }
},
"severity": 4,
"message": "Arrow function has too many lines (39). Maximum allowed is 30.",
"source": "eslint",
"startLineNumber": 22,
"startColumn": 60,
"endLineNumber": 70,
"endColumn": 2


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2702
// Timestamp:     2026-02-06T08:17:36.916Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "@typescript-eslint/strict-boolean-expressions",
    "target": {
        "$mid": 1,
        "path": "/rules/strict-boolean-expressions",
        "scheme": "https",
        "authority": "typescript-eslint.io"
    }
},
"severity": 4,
"message": "Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.",
"source": "eslint",
"startLineNumber": 64,
"startColumn": 12,
"endLineNumber": 64,
"endColumn": 27


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2703
// Timestamp:     2026-02-06T08:17:36.918Z
// ==========================================================
<TouchableOpacity>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2704
// Timestamp:     2026-02-06T08:17:36.924Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2705
// Timestamp:     2026-02-06T08:17:36.925Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2706
// Timestamp:     2026-02-06T08:17:36.925Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2707
// Timestamp:     2026-02-06T08:17:36.925Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2708
// Timestamp:     2026-02-06T08:17:36.926Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2709
// Timestamp:     2026-02-06T08:17:36.926Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2710
// Timestamp:     2026-02-06T08:17:36.927Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2711
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2712
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2713
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2714
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2715
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2716
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2717
// Timestamp:     2026-02-06T08:17:36.930Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2718
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2719
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2720
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2721
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2722
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2723
// Timestamp:     2026-02-06T08:17:36.931Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2724
// Timestamp:     2026-02-06T08:17:36.932Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2725
// Timestamp:     2026-02-06T08:17:36.932Z
// ==========================================================
fieldVisibility.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2726
// Timestamp:     2026-02-06T08:17:36.932Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2727
// Timestamp:     2026-02-06T08:17:36.933Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2728
// Timestamp:     2026-02-06T08:17:36.934Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2729
// Timestamp:     2026-02-06T08:17:36.934Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2730
// Timestamp:     2026-02-06T08:17:36.934Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2731
// Timestamp:     2026-02-06T08:17:36.935Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2732
// Timestamp:     2026-02-06T08:17:36.936Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2733
// Timestamp:     2026-02-06T08:17:36.936Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2734
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2735
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2736
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2737
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2738
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2739
// Timestamp:     2026-02-06T08:17:36.937Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2740
// Timestamp:     2026-02-06T08:17:36.938Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2741
// Timestamp:     2026-02-06T08:17:36.938Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2742
// Timestamp:     2026-02-06T08:17:36.939Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2743
// Timestamp:     2026-02-06T08:17:36.940Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2744
// Timestamp:     2026-02-06T08:17:36.940Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2745
// Timestamp:     2026-02-06T08:17:36.941Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2746
// Timestamp:     2026-02-06T08:17:36.941Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2747
// Timestamp:     2026-02-06T08:17:36.941Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2748
// Timestamp:     2026-02-06T08:17:36.942Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2749
// Timestamp:     2026-02-06T08:17:36.942Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2750
// Timestamp:     2026-02-06T08:17:36.942Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2751
// Timestamp:     2026-02-06T08:17:36.942Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2752
// Timestamp:     2026-02-06T08:17:36.943Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2753
// Timestamp:     2026-02-06T08:17:36.943Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2754
// Timestamp:     2026-02-06T08:17:36.943Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2755
// Timestamp:     2026-02-06T08:17:36.943Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2756
// Timestamp:     2026-02-06T08:17:36.943Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2757
// Timestamp:     2026-02-06T08:17:36.944Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2758
// Timestamp:     2026-02-06T08:17:36.944Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2759
// Timestamp:     2026-02-06T08:17:36.945Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2760
// Timestamp:     2026-02-06T08:17:36.945Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2761
// Timestamp:     2026-02-06T08:17:36.945Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2762
// Timestamp:     2026-02-06T08:17:36.945Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2763
// Timestamp:     2026-02-06T08:17:36.946Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2764
// Timestamp:     2026-02-06T08:17:36.946Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2765
// Timestamp:     2026-02-06T08:17:36.946Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2766
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2767
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2768
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2769
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2770
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2771
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2772
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2773
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2774
// Timestamp:     2026-02-06T08:17:36.947Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2775
// Timestamp:     2026-02-06T08:17:36.948Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2776
// Timestamp:     2026-02-06T08:17:36.949Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2777
// Timestamp:     2026-02-06T08:17:36.949Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2778
// Timestamp:     2026-02-06T08:17:36.949Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2779
// Timestamp:     2026-02-06T08:17:36.949Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2780
// Timestamp:     2026-02-06T08:17:36.950Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2781
// Timestamp:     2026-02-06T08:17:36.950Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2782
// Timestamp:     2026-02-06T08:17:36.950Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2783
// Timestamp:     2026-02-06T08:17:36.950Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2784
// Timestamp:     2026-02-06T08:17:36.952Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2785
// Timestamp:     2026-02-06T08:17:36.952Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2786
// Timestamp:     2026-02-06T08:17:36.953Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2787
// Timestamp:     2026-02-06T08:17:36.954Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2788
// Timestamp:     2026-02-06T08:17:36.954Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2789
// Timestamp:     2026-02-06T08:17:36.955Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2790
// Timestamp:     2026-02-06T08:17:36.956Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2791
// Timestamp:     2026-02-06T08:17:36.957Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2792
// Timestamp:     2026-02-06T08:17:36.958Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2793
// Timestamp:     2026-02-06T08:17:36.958Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2794
// Timestamp:     2026-02-06T08:17:36.958Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2795
// Timestamp:     2026-02-06T08:17:36.959Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2796
// Timestamp:     2026-02-06T08:17:36.960Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2797
// Timestamp:     2026-02-06T08:17:36.961Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2798
// Timestamp:     2026-02-06T08:17:36.962Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2799
// Timestamp:     2026-02-06T08:17:36.962Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2800
// Timestamp:     2026-02-06T08:17:36.962Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2801
// Timestamp:     2026-02-06T08:17:36.962Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2802
// Timestamp:     2026-02-06T08:17:36.964Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2803
// Timestamp:     2026-02-06T08:17:36.964Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2804
// Timestamp:     2026-02-06T08:17:36.964Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2805
// Timestamp:     2026-02-06T08:17:36.964Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2806
// Timestamp:     2026-02-06T08:17:36.965Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2807
// Timestamp:     2026-02-06T08:17:36.965Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2808
// Timestamp:     2026-02-06T08:17:36.966Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2809
// Timestamp:     2026-02-06T08:17:36.967Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2810
// Timestamp:     2026-02-06T08:17:36.967Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2811
// Timestamp:     2026-02-06T08:17:36.967Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2812
// Timestamp:     2026-02-06T08:17:36.969Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2813
// Timestamp:     2026-02-06T08:17:36.969Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2814
// Timestamp:     2026-02-06T08:17:36.970Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2815
// Timestamp:     2026-02-06T08:17:36.970Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2816
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2817
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2818
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2819
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2820
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2821
// Timestamp:     2026-02-06T08:17:36.971Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2822
// Timestamp:     2026-02-06T08:17:36.973Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2823
// Timestamp:     2026-02-06T08:17:36.974Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2824
// Timestamp:     2026-02-06T08:17:36.974Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2825
// Timestamp:     2026-02-06T08:17:36.974Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2826
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2827
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2828
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2829
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2830
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2831
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2832
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2833
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2834
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2835
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2836
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2837
// Timestamp:     2026-02-06T08:17:36.975Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2838
// Timestamp:     2026-02-06T08:17:36.976Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2839
// Timestamp:     2026-02-06T08:17:36.976Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2840
// Timestamp:     2026-02-06T08:17:36.976Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2841
// Timestamp:     2026-02-06T08:17:36.976Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2842
// Timestamp:     2026-02-06T08:17:36.977Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2843
// Timestamp:     2026-02-06T08:17:36.980Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2844
// Timestamp:     2026-02-06T08:17:36.980Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2845
// Timestamp:     2026-02-06T08:17:36.981Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2846
// Timestamp:     2026-02-06T08:17:36.981Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2847
// Timestamp:     2026-02-06T08:17:36.981Z
// ==========================================================
<View style={styles.pageContainer}>
  <Text style={styles.pageTitle}>{config.titleToken}</Text>      <ScrollView>
    {viewModels.map((vm: FieldViewModel) => {
      // 🆕 STRUCTURELE BESLISSING: Container vs Field
      // WizardPage beslist welk component type, gebaseerd op wat Orchestrator geeft          if (vm.componentType === 'container') {
        // Container ViewModel → Render als CollapsibleSection
        return (
          <CollapsibleSection
            key={vm.fieldId}
            labelToken={vm.labelToken}
            defaultExpanded={false}
          >
            {/* Recursief: render child fields */}
            {(vm.childFields ?? []).map((child) => (
              <FieldRenderer
                key={child.fieldId}
                viewModel={child}
                onUpdate={(value) => orchestrator.updateField(child.fieldId, value)}
              />
            ))}
          </CollapsibleSection>
        );
      }
      // Regular field ViewModel → Render via FieldRenderer
      return (
        <FieldRenderer
          key={vm.fieldId}
          viewModel={vm}
          onUpdate={(value) => orchestrator.updateField(vm.fieldId, value)}
        />
      );
    })}
  </ScrollView>
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2848
// Timestamp:     2026-02-06T08:17:36.982Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "typescript",
"code": "2322",
"severity": 8,
"message": "Type '{ label: string; value: number; onChange: (value: unknown) => void; error: string | null | undefined; }' is not assignable to type 'IntrinsicAttributes & InputCounterProps'.\n  Property 'label' does not exist on type 'IntrinsicAttributes & InputCounterProps'.",
"source": "ts",
"startLineNumber": 40,
"startColumn": 11,
"endLineNumber": 40,
"endColumn": 16


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2849
// Timestamp:     2026-02-06T08:17:36.983Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "max-lines-per-function",
    "target": {
        "$mid": 1,
        "path": "/docs/latest/rules/max-lines-per-function",
        "scheme": "https",
        "authority": "eslint.org"
    }
},
"severity": 4,
"message": "Arrow function has too many lines (39). Maximum allowed is 30.",
"source": "eslint",
"startLineNumber": 22,
"startColumn": 60,
"endLineNumber": 70,
"endColumn": 2


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2850
// Timestamp:     2026-02-06T08:17:36.984Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "@typescript-eslint/strict-boolean-expressions",
    "target": {
        "$mid": 1,
        "path": "/rules/strict-boolean-expressions",
        "scheme": "https",
        "authority": "typescript-eslint.io"
    }
},
"severity": 4,
"message": "Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.",
"source": "eslint",
"startLineNumber": 64,
"startColumn": 12,
"endLineNumber": 64,
"endColumn": 27


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2851
// Timestamp:     2026-02-06T08:17:36.984Z
// ==========================================================
<TouchableOpacity>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2852
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2853
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2854
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2855
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2856
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2857
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2858
// Timestamp:     2026-02-06T08:17:36.988Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2859
// Timestamp:     2026-02-06T08:17:36.989Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2860
// Timestamp:     2026-02-06T08:17:36.990Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2861
// Timestamp:     2026-02-06T08:17:36.990Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2862
// Timestamp:     2026-02-06T08:17:36.993Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2863
// Timestamp:     2026-02-06T08:17:36.993Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2864
// Timestamp:     2026-02-06T08:17:36.993Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2865
// Timestamp:     2026-02-06T08:17:36.993Z
// ==========================================================
<TouchableOpacity>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2866
// Timestamp:     2026-02-06T08:17:36.993Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2867
// Timestamp:     2026-02-06T08:17:36.994Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2868
// Timestamp:     2026-02-06T08:17:36.994Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2869
// Timestamp:     2026-02-06T08:17:36.994Z
// ==========================================================
fields: [
  { fieldId: 'burgerlijkeStaat' },
  { fieldId: 'woningType' },
  { fieldId: 'postcode' },
  {
    fieldId: 'members',
    type: 'repeater',
    itemFields: [
      { fieldId: 'naam' },
      { fieldId: 'leeftijd' },
      { fieldId: 'gender' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2870
// Timestamp:     2026-02-06T08:17:36.994Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2871
// Timestamp:     2026-02-06T08:17:36.995Z
// ==========================================================
{
  fieldId: 'adultIncome',
  type: 'repeater',
  itemFields: [
    {
      fieldId: 'incomeCategory',
      type: 'chip-group-multiple',
      labelToken: 'LABEL_INCOME_CATS'
    },
    {
      fieldId: 'nettoSalaris',
      type: 'currency',
      requiresVisibilityCheck: true,
      visibilityRule: 'hasWorkSelected'
    },
    {
      fieldId: 'uitkeringType',
      type: 'chip-group'


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2872
// Timestamp:     2026-02-06T08:17:36.996Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2873
// Timestamp:     2026-02-06T08:17:36.997Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2874
// Timestamp:     2026-02-06T08:17:36.998Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2875
// Timestamp:     2026-02-06T08:17:36.998Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2876
// Timestamp:     2026-02-06T08:17:36.998Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2877
// Timestamp:     2026-02-06T08:17:36.998Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2878
// Timestamp:     2026-02-06T08:17:36.998Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2879
// Timestamp:     2026-02-06T08:17:36.999Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2880
// Timestamp:     2026-02-06T08:17:36.999Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2881
// Timestamp:     2026-02-06T08:17:37.000Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2882
// Timestamp:     2026-02-06T08:17:37.000Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2883
// Timestamp:     2026-02-06T08:17:37.000Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2884
// Timestamp:     2026-02-06T08:17:37.001Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2885
// Timestamp:     2026-02-06T08:17:37.003Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2886
// Timestamp:     2026-02-06T08:17:37.003Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2887
// Timestamp:     2026-02-06T08:17:37.004Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2888
// Timestamp:     2026-02-06T08:17:37.004Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2889
// Timestamp:     2026-02-06T08:17:37.005Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2890
// Timestamp:     2026-02-06T08:17:37.006Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2891
// Timestamp:     2026-02-06T08:17:37.006Z
// ==========================================================
export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  visibilityRuleName?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  isDerived?: boolean;
  defaultValue?: unknown;
  
  // 🆕 NIEUW: Voor groepering van fields
  groupId?: string;        // Bijv. 'toeslagen', 'verzekeringen'
  groupBehavior?: 'collapsible' | 'swipeable' | 'tabs';  // Hoe wordt de groep getoond
  groupLabelToken?: string; // Label voor de groep header
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2892
// Timestamp:     2026-02-06T08:17:37.007Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2893
// Timestamp:     2026-02-06T08:17:37.007Z
// ==========================================================
// In FIELD_REGISTRY

// Individuele fields krijgen een groupId
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  placeholderToken: 'LABEL_ZORGTOESLAG_PM',
  constraintsKey: 'zorgtoeslag',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
},

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'reiskosten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
  // groupBehavior en groupLabelToken hoeven niet herhaald (eerste field wint)
},

overigeInkomsten: {
  componentType: 'currency',
  labelToken: 'LABEL_OVERIGE_INKOMSTEN',
  placeholderToken: '0.00',
  constraintsKey: 'overigeInkomsten',
  
  // 🆕 Zelfde groep
  groupId: 'werktoeslagen',
},

// Velden ZONDER groupId blijven gewoon los
nettoSalaris: {
  componentType: 'currency',
  labelToken: 'LABEL_NETTO_SALARIS',
  // Geen groupId = niet gegroepeerd
},


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2894
// Timestamp:     2026-02-06T08:17:37.008Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2895
// Timestamp:     2026-02-06T08:17:37.009Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2896
// Timestamp:     2026-02-06T08:17:37.010Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2897
// Timestamp:     2026-02-06T08:17:37.010Z
// ==========================================================
// 3incomeDetails.config.ts
export const incomeDetailsConfig = {
  pageId: UI_SECTIONS.INCOME_DETAILS,
  titleToken: UX_TOKENS.PAGES.INCOME_DETAILS,
  fields: [
    { fieldId: 'huurtoeslag' },
    { fieldId: 'kindgebondenBudget' },
    {
      fieldId: 'adultIncome',
      type: 'repeater',
      itemFields: [
        { fieldId: 'incomeCategory' },
        { fieldId: 'nettoSalaris' },
        { fieldId: 'frequentie' },
        { fieldId: 'vakantiegeldPerJaar' },
        
        // Deze 3 worden automatisch gegroepeerd
        { fieldId: 'zorgtoeslag' },
        { fieldId: 'reiskosten' },
        { fieldId: 'overigeInkomsten' },
        
        { fieldId: 'uitkeringType' },
      ]
    }
  ]
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2898
// Timestamp:     2026-02-06T08:17:37.012Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2899
// Timestamp:     2026-02-06T08:17:37.013Z
// ==========================================================
// In RenderOrchestrator.buildPageViewModels()

public buildPageViewModels(fieldIds: string[], context?: VisibilityContext) {
  const viewModels: FieldViewModel[] = [];
  const groupedFields = new Map<string, FieldViewModel[]>();
  
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId, context);
    if (!vm || !vm.isVisible) continue;
    
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
      viewModels.push(vm);
    }
  }
  
  // Converteer groepen naar container ViewModels
  for (const [groupId, fields] of groupedFields) {
    const firstField = fields[0];
    const definition = getFieldDefinition(firstField.fieldId);
    
    viewModels.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      isVisible: true,
      containerBehavior: definition?.groupBehavior ?? 'collapsible',
      labelToken: definition?.groupLabelToken ?? '',
      childFields: fields,
    });
  }
  
  return viewModels;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2900
// Timestamp:     2026-02-06T08:17:37.013Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2901
// Timestamp:     2026-02-06T08:17:37.015Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2902
// Timestamp:     2026-02-06T08:17:37.017Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2903
// Timestamp:     2026-02-06T08:17:37.017Z
// ==========================================================
// In FieldRenderer.tsx

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleContainer
      labelToken={viewModel.labelToken}
      behavior={viewModel.containerBehavior}
      defaultExpanded={false}
    >
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleContainer>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2904
// Timestamp:     2026-02-06T08:17:37.018Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2905
// Timestamp:     2026-02-06T08:17:37.019Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2906
// Timestamp:     2026-02-06T08:17:37.021Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2907
// Timestamp:     2026-02-06T08:17:37.022Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2908
// Timestamp:     2026-02-06T08:17:37.023Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2909
// Timestamp:     2026-02-06T08:17:37.023Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2910
// Timestamp:     2026-02-06T08:17:37.023Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2911
// Timestamp:     2026-02-06T08:17:37.024Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2912
// Timestamp:     2026-02-06T08:17:37.024Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2913
// Timestamp:     2026-02-06T08:17:37.026Z
// ==========================================================
// 1️⃣ REGISTRY: Definieer de groep
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  
  // 🆕 Groep metadata
  groupId: 'werktoeslagen',
  groupBehavior: 'collapsible',
  groupLabelToken: 'LABEL_TOESLAGEN',
}

reiskosten: {
  componentType: 'currency',
  labelToken: 'LABEL_REISKOSTEN',
  groupId: 'werktoeslagen',  // ← Zelfde groep!
}

// 2️⃣ CONFIG: Blijft schoon!
itemFields: [
  { fieldId: 'nettoSalaris' },
  { fieldId: 'zorgtoeslag' },     // ← Deze worden
  { fieldId: 'reiskosten' },       //   automatisch
  { fieldId: 'overigeInkomsten' }, //   gegroepeerd!
]

// 3️⃣ RENDER: Automatische detectie
const viewModels = orchestrator.render.buildPageViewModels([...]);
// Result:
[
  { fieldId: 'nettoSalaris', componentType: 'currency' },
  { 
    fieldId: '__group_werktoeslagen',
    componentType: 'container',
    containerBehavior: 'collapsible',
    childFields: [zorgtoeslag, reiskosten, overige]
  }
]

// 4️⃣ UI: CollapsibleContainer rendert het
<CollapsibleContainer labelToken="Toeslagen">
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
  <CurrencyInput fieldId="overigeInkomsten" />
</CollapsibleContainer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2914
// Timestamp:     2026-02-06T08:17:37.026Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2915
// Timestamp:     2026-02-06T08:17:37.026Z
// ==========================================================
// 1. Update een field in Registry
zorgtoeslag: {
  componentType: 'currency',
  labelToken: 'LABEL_ZORGTOESLAG',
  groupId: 'werktoeslagen',        // ← Add this
  groupBehavior: 'collapsible',    // ← And this (only first field)
  groupLabelToken: 'LABEL_TOESLAGEN',
}

// 2. Config blijft zoals het is!
{ fieldId: 'zorgtoeslag' }

// 3. Done! Automatisch collapsible 🎉


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2916
// Timestamp:     2026-02-06T08:17:37.027Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2917
// Timestamp:     2026-02-06T08:17:37.028Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2918
// Timestamp:     2026-02-06T08:17:37.028Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2919
// Timestamp:     2026-02-06T08:17:37.029Z
// ==========================================================
// src/app/orchestrators/RenderOrchestrator.ts

import { FormStateOrchestrator } from './FormStateOrchestrator';
import { getFieldDefinition, type FieldDefinition } from '../../domain/registry/FieldRegistry';
import { GENERAL_OPTIONS, HOUSEHOLD_OPTIONS, FINANCE_OPTIONS } from '../../domain/registry/options';

export class RenderOrchestrator {
  constructor(
    private readonly fso: FormStateOrchestrator
  ) {}

  /**
   * Bouwt een ViewModel op basis van Registry + State + Options.
   * Geen zichtbaarheid- of validatielogica in de RO.
   */
  public buildFieldViewModel(fieldId: string) {
    const definition = getFieldDefinition(fieldId);
    
    if (definition === null) {
      return null;
    }

    return {
      fieldId,
      componentType: definition.componentType,
      labelToken: definition.labelToken,
      value: this.fso.getValue(fieldId),
      options: this.getOptions(definition),
      uiModel: definition.uiModel,
    };
  }

  private getOptions(definition: FieldDefinition): readonly unknown[] | undefined {
    const key = definition.optionsKey;
    
    if (key === null || key === undefined || key === '') {
      return undefined;
    }

    const source = { 
      ...GENERAL_OPTIONS, 
      ...HOUSEHOLD_OPTIONS, 
      ...FINANCE_OPTIONS 
    } as Record<string, readonly unknown[]>;
    
    return source[key];
  }
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2920
// Timestamp:     2026-02-06T08:17:37.029Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2921
// Timestamp:     2026-02-06T08:17:37.030Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2922
// Timestamp:     2026-02-06T08:17:37.030Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2923
// Timestamp:     2026-02-06T08:17:37.030Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2924
// Timestamp:     2026-02-06T08:17:37.030Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2925
// Timestamp:     2026-02-06T08:17:37.031Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2926
// Timestamp:     2026-02-06T08:17:37.032Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2927
// Timestamp:     2026-02-06T08:17:37.033Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2928
// Timestamp:     2026-02-06T08:17:37.033Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2929
// Timestamp:     2026-02-06T08:17:37.033Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2930
// Timestamp:     2026-02-06T08:17:37.033Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2931
// Timestamp:     2026-02-06T08:17:37.034Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2932
// Timestamp:     2026-02-06T08:17:37.035Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2933
// Timestamp:     2026-02-06T08:17:37.035Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2934
// Timestamp:     2026-02-06T08:17:37.035Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2935
// Timestamp:     2026-02-06T08:17:37.036Z
// ==========================================================
// domain/registry/FieldRegistry.ts (alleen interface wijzigen)

export interface FieldDefinition {
  componentType: ComponentType;
  labelToken: string;
  placeholderToken?: string;
  optionsKey?: string;
  constraintsKey?: string;
  uiModel?: 'numericWrapper' | 'collapsible' | 'swipeable' | 'readonly';
  
  // 🆕 NIEUW: Voor grouping
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2936
// Timestamp:     2026-02-06T08:17:37.037Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2937
// Timestamp:     2026-02-06T08:17:37.037Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2938
// Timestamp:     2026-02-06T08:17:37.038Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2939
// Timestamp:     2026-02-06T08:17:37.038Z
// ==========================================================
// RenderOrchestrator.ts (nieuwe method toevoegen)

public buildPageViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  // Build ViewModels & detect groups
  for (const fieldId of fieldIds) {
    const vm = this.buildFieldViewModel(fieldId);
    if (!vm) continue;
    
    const def = getFieldDefinition(fieldId);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2940
// Timestamp:     2026-02-06T08:17:37.038Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2941
// Timestamp:     2026-02-06T08:17:37.038Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2942
// Timestamp:     2026-02-06T08:17:37.038Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2943
// Timestamp:     2026-02-06T08:17:37.039Z
// ==========================================================
// ui/components/FieldRenderer.tsx (extend switch)

if (viewModel.componentType === 'container') {
  return (
    <CollapsibleSection labelToken={viewModel.labelToken}>
      {viewModel.childFields.map(child => (
        <FieldRenderer key={child.fieldId} viewModel={child} />
      ))}
    </CollapsibleSection>
  );
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2944
// Timestamp:     2026-02-06T08:17:37.039Z
// ==========================================================
fieldVisibility.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2945
// Timestamp:     2026-02-06T08:17:37.041Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2946
// Timestamp:     2026-02-06T08:17:37.041Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2947
// Timestamp:     2026-02-06T08:17:37.041Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2948
// Timestamp:     2026-02-06T08:17:37.041Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2949
// Timestamp:     2026-02-06T08:17:37.041Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2950
// Timestamp:     2026-02-06T08:17:37.042Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2951
// Timestamp:     2026-02-06T08:17:37.042Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2952
// Timestamp:     2026-02-06T08:17:37.042Z
// ==========================================================
fieldVisibility.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2953
// Timestamp:     2026-02-06T08:17:37.043Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2954
// Timestamp:     2026-02-06T08:17:37.043Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2955
// Timestamp:     2026-02-06T08:17:37.043Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2956
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2957
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2958
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2959
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen'
  groupLabel?: string; // Alleen op eerste field van groep
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2960
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2961
// Timestamp:     2026-02-06T08:17:37.044Z
// ==========================================================
public buildPageViewModels(fieldIds: string[]) {
  const standalone = [];
  const groups = new Map();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) groups.set(def.groupId, []);
      groups.get(def.groupId).push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to containers
  for (const [groupId, fields] of groups) {
    standalone.push({
      componentType: 'container',
      groupId,
      children: fields
    });
  }
  
  return standalone;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2962
// Timestamp:     2026-02-06T08:17:37.045Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2963
// Timestamp:     2026-02-06T08:17:37.046Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2964
// Timestamp:     2026-02-06T08:17:37.047Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2965
// Timestamp:     2026-02-06T08:17:37.047Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2966
// Timestamp:     2026-02-06T08:17:37.048Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2967
// Timestamp:     2026-02-06T08:17:37.051Z
// ==========================================================
// MasterOrchestrator.getPageViewModels()
1. Filter fieldIds op visibility (via VisibilityOrchestrator)
2. Build ViewModel per visible field (via RenderOrchestrator)
3. Return array van ViewModels

// WizardPage
Loop over ViewModels → render via FieldRenderer


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2968
// Timestamp:     2026-02-06T08:17:37.052Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2969
// Timestamp:     2026-02-06T08:17:37.052Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2970
// Timestamp:     2026-02-06T08:17:37.053Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2971
// Timestamp:     2026-02-06T08:17:37.054Z
// ==========================================================
// 1. Extend FieldDefinition (1 property!)
export interface FieldDefinition {
  // ... bestaande properties
  groupId?: string;  // 'werktoeslagen', 'verzekeringen', etc.
}

// 2. Add method in RenderOrchestrator
public buildGroupedViewModels(fieldIds: string[]) {
  const standalone: ViewModel[] = [];
  const groups = new Map<string, ViewModel[]>();
  
  for (const id of fieldIds) {
    const vm = this.buildFieldViewModel(id);
    if (!vm) continue;
    
    const def = getFieldDefinition(id);
    if (def?.groupId) {
      if (!groups.has(def.groupId)) {
        groups.set(def.groupId, []);
      }
      groups.get(def.groupId)!.push(vm);
    } else {
      standalone.push(vm);
    }
  }
  
  // Convert groups to container ViewModels
  for (const [groupId, fields] of groups) {
    standalone.push({
      fieldId: `__group_${groupId}`,
      componentType: 'container',
      labelToken: `LABEL_${groupId.toUpperCase()}`,
      childFields: fields,
      value: undefined,
      isVisible: true,
    });
  }
  
  return standalone;
}

// 3. Update MasterOrchestrator.getPageViewModels
// Huidige code:
const models = visibleIds.map(id => this.render.buildFieldViewModel(id));

// Nieuwe code (1 regel change!):
const models = this.render.buildGroupedViewModels(visibleIds);


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2972
// Timestamp:     2026-02-06T08:17:37.056Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2973
// Timestamp:     2026-02-06T08:17:37.056Z
// ==========================================================
// Config blijft hetzelfde, maar voeg grouping toe:
itemFields: [
  { fieldId: 'nettoSalaris' },
  {
    type: 'group',
    groupId: 'werktoeslagen',
    labelToken: 'LABEL_TOESLAGEN',
    fields: [
      { fieldId: 'zorgtoeslag' },
      { fieldId: 'reiskosten' },
      { fieldId: 'overigeInkomsten' }
    ]
  }
]


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2974
// Timestamp:     2026-02-06T08:17:37.058Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2975
// Timestamp:     2026-02-06T08:17:37.058Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2976
// Timestamp:     2026-02-06T08:17:37.059Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2977
// Timestamp:     2026-02-06T08:17:37.060Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2978
// Timestamp:     2026-02-06T08:17:37.060Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2979
// Timestamp:     2026-02-06T08:17:37.061Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2980
// Timestamp:     2026-02-06T08:17:37.062Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2981
// Timestamp:     2026-02-06T08:17:37.063Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2982
// Timestamp:     2026-02-06T08:17:37.064Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2983
// Timestamp:     2026-02-06T08:17:37.065Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2984
// Timestamp:     2026-02-06T08:17:37.066Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2985
// Timestamp:     2026-02-06T08:17:37.067Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2986
// Timestamp:     2026-02-06T08:17:37.068Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2987
// Timestamp:     2026-02-06T08:17:37.068Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2988
// Timestamp:     2026-02-06T08:17:37.068Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2989
// Timestamp:     2026-02-06T08:17:37.068Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2990
// Timestamp:     2026-02-06T08:17:37.069Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2991
// Timestamp:     2026-02-06T08:17:37.069Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2992
// Timestamp:     2026-02-06T08:17:37.069Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2993
// Timestamp:     2026-02-06T08:17:37.069Z
// ==========================================================
// WizardPage.tsx
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection key={vm.fieldId} labelToken={vm.labelToken}>
        {vm.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={...} />
        ))}
      </CollapsibleSection>
    );
  }
  
  return <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />;
})}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2994
// Timestamp:     2026-02-06T08:17:37.069Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2995
// Timestamp:     2026-02-06T08:17:37.070Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2996
// Timestamp:     2026-02-06T08:17:37.071Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2997
// Timestamp:     2026-02-06T08:17:37.071Z
// ==========================================================
// Huidige situatie: dit staat IN IncomeRepeater.tsx (component-specifiek)
const [toelagenExpanded, setToelagenExpanded] = useState(false);

<TouchableOpacity onPress={() => setToelagenExpanded(!toelagenExpanded)}>
  <Text>Toeslagen</Text>
  <Text>{toelagenExpanded ? '▼' : '▶'}</Text>
</TouchableOpacity>

{toelagenExpanded && (
  <View>{/* velden */}</View>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2998
// Timestamp:     2026-02-06T08:17:37.071Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       2999
// Timestamp:     2026-02-06T08:17:37.072Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3000
// Timestamp:     2026-02-06T08:17:37.073Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3001
// Timestamp:     2026-02-06T08:17:37.073Z
// ==========================================================
// ui/components/CollapsibleSection.tsx
// DUMB component - alleen UI pattern, geen beslissingen

interface CollapsibleSectionProps {
  labelToken: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  labelToken,
  defaultExpanded = false,
  children,
}) => {
  const { styles } = useAppStyles();
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity 
        style={styles.collapsibleHeader}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.collapsibleLabel}>{labelToken}</Text>
        <Text style={styles.collapsibleIcon}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.collapsibleContent}>
          {children}
        </View>
      )}
    </View>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3002
// Timestamp:     2026-02-06T08:17:37.076Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3003
// Timestamp:     2026-02-06T08:17:37.078Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3004
// Timestamp:     2026-02-06T08:17:37.079Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3005
// Timestamp:     2026-02-06T08:17:37.079Z
// ==========================================================
// ui/styles/modules/Cards.ts (of nieuwe module: Containers.ts)

export const collapsibleStyles = (tokens: Tokens) => ({
  collapsibleContainer: {
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.borderRadius.md,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
  },
  collapsibleLabel: {
    fontSize: tokens.typography.sizes.md,
    fontWeight: tokens.typography.weights.bold,
  },
  collapsibleIcon: {
    fontSize: tokens.typography.sizes.lg,
    color: tokens.colors.textSecondary,
  },
  collapsibleContent: {
    padding: tokens.spacing.md,
    paddingTop: 0,
    gap: tokens.spacing.sm,
  },
});


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3006
// Timestamp:     2026-02-06T08:17:37.079Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3007
// Timestamp:     2026-02-06T08:17:37.082Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3008
// Timestamp:     2026-02-06T08:17:37.083Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3009
// Timestamp:     2026-02-06T08:17:37.083Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3010
// Timestamp:     2026-02-06T08:17:37.084Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3011
// Timestamp:     2026-02-06T08:17:37.086Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3012
// Timestamp:     2026-02-06T08:17:37.086Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3013
// Timestamp:     2026-02-06T08:17:37.089Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3014
// Timestamp:     2026-02-06T08:17:37.089Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3015
// Timestamp:     2026-02-06T08:17:37.090Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3016
// Timestamp:     2026-02-06T08:17:37.090Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3017
// Timestamp:     2026-02-06T08:17:37.091Z
// ==========================================================
// FOUT - Component beslist zelf wat erin hoort
<CollapsibleSection>
  {/* Hardcoded: component weet van velden */}
  <CurrencyInput fieldId="zorgtoeslag" />
  <CurrencyInput fieldId="reiskosten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3018
// Timestamp:     2026-02-06T08:17:37.092Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3019
// Timestamp:     2026-02-06T08:17:37.093Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3020
// Timestamp:     2026-02-06T08:17:37.094Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3021
// Timestamp:     2026-02-06T08:17:37.098Z
// ==========================================================
// Orchestrator bepaalt: "Deze velden horen bij elkaar"
const viewModels = orchestrator.render.buildGroupedViewModels([
  'nettoSalaris',
  'zorgtoeslag',      // ← Deze krijgen
  'reiskosten',       //   groupId: 'werktoeslagen'
  'overigeInkomsten'  // ←
]);

// WizardPage ontvangt structuur en rendert
{viewModels.map(vm => {
  if (vm.componentType === 'container') {
    return (
      <CollapsibleSection 
        labelToken={vm.labelToken}  // ← Van Orchestrator
        defaultExpanded={false}
      >
        {vm.childFields.map(child => (  // ← Van Orchestrator
          <FieldRenderer viewModel={child} />
        ))}
      </CollapsibleSection>
    );
  }
})}

// CollapsibleSection: Dumb, krijgt alles via props
const CollapsibleSection = ({ labelToken, children }) => {
  const [expanded, setExpanded] = useState(false);  // ← Lokale UI state
  
  return (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text>{labelToken}</Text>  {/* ← Van props */}
      </TouchableOpacity>
      {expanded && children}  {/* ← Van props */}
    </>
  );
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3022
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3023
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3024
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3025
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3026
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3027
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3028
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3029
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3030
// Timestamp:     2026-02-06T08:17:37.099Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3031
// Timestamp:     2026-02-06T08:17:37.100Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3032
// Timestamp:     2026-02-06T08:17:37.101Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3033
// Timestamp:     2026-02-06T08:17:37.102Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3034
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3035
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3036
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3037
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3038
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3039
// Timestamp:     2026-02-06T08:17:37.103Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3040
// Timestamp:     2026-02-06T08:17:37.104Z
// ==========================================================
FieldRegistry_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3041
// Timestamp:     2026-02-06T08:17:37.105Z
// ==========================================================
RenderOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3042
// Timestamp:     2026-02-06T08:17:37.105Z
// ==========================================================
MasterOrchestrator_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3043
// Timestamp:     2026-02-06T08:17:37.105Z
// ==========================================================
CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3044
// Timestamp:     2026-02-06T08:17:37.105Z
// ==========================================================
WizardPage_UPDATED.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3045
// Timestamp:     2026-02-06T08:17:37.106Z
// ==========================================================
Containers.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3046
// Timestamp:     2026-02-06T08:17:37.107Z
// ==========================================================
useAppStyles_UPDATED.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3047
// Timestamp:     2026-02-06T08:17:37.110Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3048
// Timestamp:     2026-02-06T08:17:37.111Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3049
// Timestamp:     2026-02-06T08:17:37.112Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3050
// Timestamp:     2026-02-06T08:17:37.113Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3051
// Timestamp:     2026-02-06T08:17:37.114Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3052
// Timestamp:     2026-02-06T08:17:37.115Z
// ==========================================================
// 1. Registry: Metadata
zorgtoeslag: { groupId: 'werktoeslagen' }
reiskosten: { groupId: 'werktoeslagen' }

// 2. Orchestrator: Detectie & ViewModel
orchestrator.render.buildGroupedViewModels(['zorgtoeslag', 'reiskosten'])
→ { componentType: 'container', childFields: [...] }

// 3. WizardPage: Structurele keuze
if (vm.componentType === 'container') {
  return <CollapsibleSection>{children}</CollapsibleSection>
}

// 4. CollapsibleSection: Dumb rendering
const [expanded, setExpanded] = useState(false);
// Weet NIETS over business logic!


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3053
// Timestamp:     2026-02-06T08:17:37.115Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3054
// Timestamp:     2026-02-06T08:17:37.115Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3055
// Timestamp:     2026-02-06T08:17:37.116Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3056
// Timestamp:     2026-02-06T08:17:37.117Z
// ==========================================================
// src/styles/useAppStyles.ts
import { StyleSheet } from 'react-native';
import { useTheme } from '@app/context/ThemeContext';
import { Colors, Theme } from '@styles/Colors';
import { Tokens } from '@styles/Tokens';
import {
  makeLayout,
  makeHeader,
  makeForms,
  makeButtons,
  makeCards,
  makeChips,
  makeDashboard,
  makeSummary,
  makeTypography,
  makeAlerts,
  makeToggles,
  makeCheckboxes,
  makeHelpers,
  
} from '@styles/modules';

// Cache voor de gegenereerde stijlen per thema
const styleCache: Partial<Record<Theme, ReturnType<typeof StyleSheet.create>>> = {};

export function getAppStyles(theme: Theme) {
  // FIX: Expliciete check op undefined voor de linter
  const cachedStyles = styleCache[theme];
  if (cachedStyles !== undefined) {
    return cachedStyles;
  }

  const c = Colors[theme];

  const assembled = {
    ...makeLayout(c),
    ...makeHeader(c),
    ...makeForms(c),
    ...makeButtons(c),
    ...makeCards(c),
    ...makeChips(c),
    ...makeDashboard(c),
    ...makeSummary(c),
    ...makeTypography(c),
    ...makeAlerts(c),
    ...makeToggles(c),
    ...makeCheckboxes(c),
    ...makeHelpers(c),
  };

  const styles = StyleSheet.create(assembled);
  styleCache[theme] = styles;
  return styles;
}

export type AppStyles = ReturnType<typeof getAppStyles>;

export function useAppStyles() {
  const { theme } = useTheme();
  const styles = getAppStyles(theme);
  const colors = Colors[theme];
  return { styles, colors, Tokens };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3057
// Timestamp:     2026-02-06T08:17:37.119Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3058
// Timestamp:     2026-02-06T08:17:37.120Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3059
// Timestamp:     2026-02-06T08:17:37.120Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3060
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3061
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3062
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3063
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3064
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3065
// Timestamp:     2026-02-06T08:17:37.121Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3066
// Timestamp:     2026-02-06T08:17:37.122Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3067
// Timestamp:     2026-02-06T08:17:37.123Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3068
// Timestamp:     2026-02-06T08:17:37.123Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3069
// Timestamp:     2026-02-06T08:17:37.124Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3070
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3071
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3072
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3073
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3074
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3075
// Timestamp:     2026-02-06T08:17:37.126Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3076
// Timestamp:     2026-02-06T08:17:37.127Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3077
// Timestamp:     2026-02-06T08:17:37.128Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3078
// Timestamp:     2026-02-06T08:17:37.128Z
// ==========================================================
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3079
// Timestamp:     2026-02-06T08:17:37.128Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3080
// Timestamp:     2026-02-06T08:17:37.129Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3081
// Timestamp:     2026-02-06T08:17:37.129Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3082
// Timestamp:     2026-02-06T08:17:37.130Z
// ==========================================================
export { makeContainers } from './Containers';  // 🆕


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3083
// Timestamp:     2026-02-06T08:17:37.130Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3084
// Timestamp:     2026-02-06T08:17:37.131Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3085
// Timestamp:     2026-02-06T08:17:37.132Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3086
// Timestamp:     2026-02-06T08:17:37.135Z
// ==========================================================
import { makeContainers } from '@styles/modules';

const assembled = {
  // ... bestaande
  ...makeContainers(c),  // 🆕
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3087
// Timestamp:     2026-02-06T08:17:37.136Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3088
// Timestamp:     2026-02-06T08:17:37.138Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3089
// Timestamp:     2026-02-06T08:17:37.139Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3090
// Timestamp:     2026-02-06T08:17:37.140Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3091
// Timestamp:     2026-02-06T08:17:37.140Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3092
// Timestamp:     2026-02-06T08:17:37.143Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3093
// Timestamp:     2026-02-06T08:17:37.143Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3094
// Timestamp:     2026-02-06T08:17:37.145Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3095
// Timestamp:     2026-02-06T08:17:37.147Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3096
// Timestamp:     2026-02-06T08:17:37.147Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3097
// Timestamp:     2026-02-06T08:17:37.147Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3098
// Timestamp:     2026-02-06T08:17:37.148Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3099
// Timestamp:     2026-02-06T08:17:37.149Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3100
// Timestamp:     2026-02-06T08:17:37.151Z
// ==========================================================
Voor CollapsibleSection:
✅ 1 nieuwe module toevoegen (makeContainers)
✅ 1 regel in useAppStyles
✅ 1 regel in modules/index.ts
✅ Klaar

Met die migratie:
❌ Alle 13+ modules aanpassen (Layout, Forms, Buttons, etc.)
❌ ColorScheme → TokenSet refactor
❌ Colors.ts volledig herstructureren
❌ Mogelijk breaking changes in bestaande UI
❌ Uitgebreide visuele regressie tests


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3101
// Timestamp:     2026-02-06T08:17:37.152Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3102
// Timestamp:     2026-02-06T08:17:37.152Z
// ==========================================================
// Jouw systeem:
const styleCache: Record<Theme, Styles> = {};
// → Cache blijft tussen component re-renders
// → Cache blijft tussen navigaties
// → Cache blijft tot hot reload

// Document voorstel:
useMemo(() => StyleSheet.create(...), [currentTokens])
// → Cache verdwijnt bij unmount
// → Nieuwe cache bij elke mount
// → Minder efficiënt


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3103
// Timestamp:     2026-02-06T08:17:37.154Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3104
// Timestamp:     2026-02-06T08:17:37.154Z
// ==========================================================
// Jouw systeem:
const { theme } = useTheme(); // 'light' | 'dark'
// ✅ Werkt
// ✅ Centraal gecontroleerd
// ✅ Kan uitgebreid worden (high-contrast, etc.)

// Document voorstel:
const colorScheme = useColorScheme(); // 'light' | 'dark' | null
// ✅ Werkt ook
// ⚠️ Moet null afhandelen
// ⚠️ Minder controle


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3105
// Timestamp:     2026-02-06T08:17:37.155Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3106
// Timestamp:     2026-02-06T08:17:37.155Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3107
// Timestamp:     2026-02-06T08:17:37.156Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3108
// Timestamp:     2026-02-06T08:17:37.158Z
// ==========================================================
// 1. NEW: src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: { ... },
    collapsibleHeader: { ... },
    // etc.
  };
}

// 2. UPDATE: src/ui/styles/modules/index.ts
export { makeContainers } from './Containers';  // ← 1 regel

// 3. UPDATE: src/ui/styles/useAppStyles.ts
const assembled = {
  // ... bestaande
  ...makeContainers(c),  // ← 1 regel
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3109
// Timestamp:     2026-02-06T08:17:37.160Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3110
// Timestamp:     2026-02-06T08:17:37.161Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3111
// Timestamp:     2026-02-06T08:17:37.161Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3112
// Timestamp:     2026-02-06T08:17:37.161Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3113
// Timestamp:     2026-02-06T08:17:37.162Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3114
// Timestamp:     2026-02-06T08:17:37.162Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3115
// Timestamp:     2026-02-06T08:17:37.164Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3116
// Timestamp:     2026-02-06T08:17:37.165Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3117
// Timestamp:     2026-02-06T08:17:37.166Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3118
// Timestamp:     2026-02-06T08:17:37.169Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3119
// Timestamp:     2026-02-06T08:17:37.170Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3120
// Timestamp:     2026-02-06T08:17:37.170Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3121
// Timestamp:     2026-02-06T08:17:37.170Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3122
// Timestamp:     2026-02-06T08:17:37.173Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3123
// Timestamp:     2026-02-06T08:17:37.173Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3124
// Timestamp:     2026-02-06T08:17:37.173Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3125
// Timestamp:     2026-02-06T08:17:37.173Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3126
// Timestamp:     2026-02-06T08:17:37.173Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3127
// Timestamp:     2026-02-06T08:17:37.177Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3128
// Timestamp:     2026-02-06T08:17:37.177Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3129
// Timestamp:     2026-02-06T08:17:37.178Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3130
// Timestamp:     2026-02-06T08:17:37.179Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3131
// Timestamp:     2026-02-06T08:17:37.179Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3132
// Timestamp:     2026-02-06T08:17:37.181Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3133
// Timestamp:     2026-02-06T08:17:37.181Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3134
// Timestamp:     2026-02-06T08:17:37.182Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3135
// Timestamp:     2026-02-06T08:17:37.182Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3136
// Timestamp:     2026-02-06T08:17:37.185Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3137
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3138
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// ❌ Niet ideaal - component weet over theme system
export const CollapsibleSection = ({ label, children }) => {
  const { styles, colors } = useAppStyles(); // ← knows about styling system
  const { theme } = useTheme(); // ← knows about theme system
  // ...
}

// ✅ Beter - pure props
export const CollapsibleSection = ({ label, children }) => {
  const { styles } = useAppStyles(); // ← only knows styles exist
  // Geen theme awareness!
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3139
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3140
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3141
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3142
// Timestamp:     2026-02-06T08:17:37.186Z
// ==========================================================
// Gebruik HUIDIGE systeem voor deze feature
// src/ui/styles/modules/Containers.ts
export function makeContainers(c: ColorScheme) {
  return { collapsibleContainer: { ... } };
}

// Reden: Ship feature snel, proof of concept


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3143
// Timestamp:     2026-02-06T08:17:37.187Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3144
// Timestamp:     2026-02-06T08:17:37.188Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3145
// Timestamp:     2026-02-06T08:17:37.188Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3146
// Timestamp:     2026-02-06T08:17:37.189Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3147
// Timestamp:     2026-02-06T08:17:37.190Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3148
// Timestamp:     2026-02-06T08:17:37.190Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3149
// Timestamp:     2026-02-06T08:17:37.190Z
// ==========================================================
// Introduceer tokens PARALLEL (beide systemen leven naast elkaar)

// 1. Create Tokens.ts (nieuw, co-exists)
export const tokens = {
  light: { spacing: { ... }, colors: { ... } },
  dark: { spacing: { ... }, colors: { ... } },
};

// 2. Update useAppStyles (support beide)
export function useAppStyles() {
  const { theme } = useTheme(); // keep existing
  const c = Colors[theme];
  const t = tokens[theme]; // nieuwe tokens
  
  // OLD modules (blijven werken)
  const oldStyles = {
    ...makeLayout(c),
    ...makeButtons(c),
    // etc.
  };
  
  // NEW modules (token-based)
  const newStyles = {
    ...containerStyles(t), // gebruik tokens
  };
  
  return StyleSheet.create({ ...oldStyles, ...newStyles });
}

// 3. Per component refactor: switch naar token-based module


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3150
// Timestamp:     2026-02-06T08:17:37.190Z
// ==========================================================
// Als alle components gemigreerd:
// - Verwijder makeX(c) modules
// - Verwijder Colors.ts
// - Verwijder ThemeContext (gebruik useColorScheme)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3151
// Timestamp:     2026-02-06T08:17:37.190Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3152
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
// ✅ Use makeContainers(c) - jouw huidige systeem
// ✅ Focus op feature, niet op refactor
// ✅ 3 files touched, klaar


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3153
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3154
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3155
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3156
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
// Voor elke component refactor:

// 1. Maak component dumb (verwijder logic)
interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onPress: () => void;
}

// 2. Als nieuwe styling module nodig: gebruik tokens
export const buttonStyles = (tokens: TokenSet) => ({ ... });

// 3. Old makeButtons(c) blijft bestaan tot vervangen


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3157
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3158
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3159
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3160
// Timestamp:     2026-02-06T08:17:37.191Z
// ==========================================================
# 1. Lees token document goed door
# 2. Setup Tokens.ts file
# 3. Update useAppStyles to support beide
# 4. Test dat oude system nog werkt
# 5. Create migration checklist


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3161
// Timestamp:     2026-02-06T08:17:37.196Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3162
// Timestamp:     2026-02-06T08:17:37.197Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3163
// Timestamp:     2026-02-06T08:17:37.198Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3164
// Timestamp:     2026-02-06T08:17:37.198Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3165
// Timestamp:     2026-02-06T08:17:37.198Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3166
// Timestamp:     2026-02-06T08:17:37.199Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3167
// Timestamp:     2026-02-06T08:17:37.199Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3168
// Timestamp:     2026-02-06T08:17:37.200Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3169
// Timestamp:     2026-02-06T08:17:37.201Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3170
// Timestamp:     2026-02-06T08:17:37.201Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3171
// Timestamp:     2026-02-06T08:17:37.204Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3172
// Timestamp:     2026-02-06T08:17:37.204Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3173
// Timestamp:     2026-02-06T08:17:37.204Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3174
// Timestamp:     2026-02-06T08:17:37.206Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3175
// Timestamp:     2026-02-06T08:17:37.207Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3176
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3177
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3178
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export function makeContainers(c: ColorScheme) { ... }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3179
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3180
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3181
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3182
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
export { makeContainers } from './Containers';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3183
// Timestamp:     2026-02-06T08:17:37.210Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3184
// Timestamp:     2026-02-06T08:17:37.215Z
// ==========================================================
...makeContainers(c), // ← 1 regel


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3185
// Timestamp:     2026-02-06T08:17:37.215Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3186
// Timestamp:     2026-02-06T08:17:37.217Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3187
// Timestamp:     2026-02-06T08:17:37.217Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3188
// Timestamp:     2026-02-06T08:17:37.217Z
// ==========================================================
# TODO: Na config.files refactor

## Pre-Refactor: Plan maken
- [ ] Token document opnieuw lezen
- [ ] Tokens.ts template maken
- [ ] Migration checklist maken
- [ ] Beslissen: geleidelijk of big bang
- [ ] Timeline inschatten

## Tijdens Refactor: Dumb Components
- [ ] Setup beide systemen parallel
- [ ] Per component: dumb maken + token styling
- [ ] Visueel testen
- [ ] Old system blijft werken

## Post-Refactor: Cleanup
- [ ] Verwijder oude makeX(c) modules
- [ ] Verwijder Colors.ts (optioneel)
- [ ] Update useAppStyles (alleen tokens)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3189
// Timestamp:     2026-02-06T08:17:37.218Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3190
// Timestamp:     2026-02-06T08:17:37.219Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3191
// Timestamp:     2026-02-06T08:17:37.221Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3192
// Timestamp:     2026-02-06T08:17:37.222Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3193
// Timestamp:     2026-02-06T08:17:37.222Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3194
// Timestamp:     2026-02-06T08:17:37.222Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3195
// Timestamp:     2026-02-06T08:17:37.222Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3196
// Timestamp:     2026-02-06T08:17:37.222Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3197
// Timestamp:     2026-02-06T08:17:37.224Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3198
// Timestamp:     2026-02-06T08:17:37.224Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3199
// Timestamp:     2026-02-06T08:17:37.224Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3200
// Timestamp:     2026-02-06T08:17:37.225Z
// ==========================================================
// src/styles/Colors.ts
export type Theme = 'light' | 'dark';

export interface ColorScheme {
  background: string;
  surface: string;
  inputBackground: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  inverseText: string;
  border: string;
  borderSubtle: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  success: string;
  onSuccess: string;
  selected: string;
  onSelected: string;
  card: string; // ← alias voor surface (backwards compat)
  shadow: string;
}

export const Colors: Record<Theme, ColorScheme> = {
  light: {
    background: '#F2F2F7',
    surface: '#FFFFFF',
    inputBackground: '#FFFFFF',
    textPrimary: '#1C1C1E',
    textSecondary: '#6E6E73',
    textTertiary: '#8E8E93',
    inverseText: '#FFFFFF',
    border: '#D1D1D6',
    borderSubtle: '#F2F2F7',
    primary: '#007AFF',
    onPrimary: '#FFFFFF',
    secondary: '#E5E5EA',
    onSecondary: '#1C1C1E',
    error: '#FF3B30',
    onError: '#FFFFFF',
    warning: '#FF9500',
    onWarning: '#FFFFFF',
    success: '#34C759',
    onSuccess: '#FFFFFF',
    selected: '#007AFF',
    onSelected: '#FFFFFF',
    shadow: '#000000',
    card: '#FFFFFF', // ← zelfde als surface
  },
  dark: {
    background: '#0F172A',
    surface: '#1E293B',
    inputBackground: '#1E293B',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    textTertiary: '#64748B',
    inverseText: '#0F172A',
    border: '#334155',
    borderSubtle: '#1E293B',
    primary: '#38BDF8',
    onPrimary: '#0F172A',
    secondary: '#334155',
    onSecondary: '#F8FAFC',
    error: '#FF453A',
    onError: '#FFFFFF',
    warning: '#FF9F0A',
    onWarning: '#0F172A',
    success: '#30D158',
    onSuccess: '#0F172A',
    selected: '#38BDF8',
    onSelected: '#0F172A',
    shadow: '#000000',
    card: '#1E293B', // ← zelfde als surface
  },
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3201
// Timestamp:     2026-02-06T08:17:37.225Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3202
// Timestamp:     2026-02-06T08:17:37.225Z
// ==========================================================
// src/ui/styles/tokens.ts
export const Space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 } as const;
export const Type = { xs: 12, sm: 14, md: 16, lg: 17, xl: 18, h2: 28, kpi: 48 } as const;
export const Radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  round: 20,
  circle: 999,
  pill: 20,
} as const;
export const Sizes = { inputHeight: 48, checkbox: 24, toggleWidth: 80 } as const;

// Definieer eerst losse shadows (sm/md/lg), maak daarna alias level1/2/3
const shadowSm = { ios: { y: 1, radius: 2, opacity: 0.05 }, android: { elevation: 2 } };
const shadowMd = { ios: { y: 2, radius: 4, opacity: 0.1 }, android: { elevation: 3 } };
const shadowLg = { ios: { y: 2, radius: 8, opacity: 0.1 }, android: { elevation: 4 } };

export const Shadows = {
  // primaire naamgeving
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  // aliassen voor backwards-compat
  level1: shadowSm,
  level2: shadowMd,
  level3: shadowLg,
} as const;

export const Tokens = { Space, Type, Radius, Sizes, Shadows } as const;
export type TokensType = typeof Tokens;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3203
// Timestamp:     2026-02-06T08:17:37.226Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3204
// Timestamp:     2026-02-06T08:17:37.226Z
// ==========================================================
// src/ui/constants/labelResolver.ts
import WizStrings from '@config/WizStrings';

export function labelFromToken(token: string): string {
  // Probeer in vaste secties:
  if (token in (WizStrings.wizard ?? {}))     return (WizStrings.wizard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.dashboard ?? {}))  return (WizStrings.dashboard as Record<string,string>)[token] ?? token;
  if (token in (WizStrings.common ?? {}))     return (WizStrings.common as Record<string,string>)[token] ?? token;
  // Fallback
  return token;
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3205
// Timestamp:     2026-02-06T08:17:37.227Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3206
// Timestamp:     2026-02-06T08:17:37.227Z
// ==========================================================
//src/ui/constants/uiSections.ts
export const UI_SECTIONS = {
  HOUSEHOLD_SETUP: 'household_setup',
  HOUSEHOLD_DETAILS: 'household_details',
  INCOME_DETAILS: 'income_details',
  FIXED_EXPENSES: 'fixed_expenses',
  CSV_UPLOAD: 'csv_upload',
  WIZARD: 'wizard', // ✅ ADD THIS
} as const;

  export type UISection = keyof typeof UI_SECTIONS;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3207
// Timestamp:     2026-02-06T08:17:37.229Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3208
// Timestamp:     2026-02-06T08:17:37.231Z
// ==========================================================
export const UX_TOKENS = {
  PAGES: {
    HOUSEHOLD_SETUP: 'setup_page_title',
    HOUSEHOLD_DETAILS: 'household_page_title',
    INCOME_DETAILS: 'finance_page_title',
    FIXED_EXPENSES: 'finance_page_title',
  },
  FIELDS: {
    AANTAL_MENSEN: 'LABEL_AANTAL_MENSEN',
    AANTAL_VOLWASSENEN: 'LABEL_AANTAL_VOLWASSENEN',
    KINDEREN: 'LABEL_KINDEREN',
    CAR_COUNT: 'car_count_label',
    NAME: 'name_label',
    AGE: 'age_label',
    BRUTO_INCOME: 'LABEL_BRUTO_INKOMEN',
    INCOME_MEMBER: 'LABEL_INKOMEN_PER_LID',
    AUTO_INSURANCE: 'LABEL_AUTO_VERZEKERING',
    CAR_REPEATER: 'LABEL_AUTO_FORMS'
  }
} as const;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3209
// Timestamp:     2026-02-06T08:17:37.231Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3210
// Timestamp:     2026-02-06T08:17:37.231Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3211
// Timestamp:     2026-02-06T08:17:37.232Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3212
// Timestamp:     2026-02-06T08:17:37.232Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3213
// Timestamp:     2026-02-06T08:17:37.233Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3214
// Timestamp:     2026-02-06T08:17:37.234Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3215
// Timestamp:     2026-02-06T08:17:37.234Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3216
// Timestamp:     2026-02-06T08:17:37.235Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3217
// Timestamp:     2026-02-06T08:17:37.235Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3218
// Timestamp:     2026-02-06T08:17:37.235Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3219
// Timestamp:     2026-02-06T08:17:37.235Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3220
// Timestamp:     2026-02-06T08:17:37.235Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3221
// Timestamp:     2026-02-06T08:17:37.236Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3222
// Timestamp:     2026-02-06T08:17:37.237Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3223
// Timestamp:     2026-02-06T08:17:37.237Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3224
// Timestamp:     2026-02-06T08:17:37.239Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3225
// Timestamp:     2026-02-06T08:17:37.239Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3226
// Timestamp:     2026-02-06T08:17:37.239Z
// ==========================================================
// makeContainers kan direct je ColorScheme gebruiken!
export function makeContainers(c: ColorScheme) {
  return {
    collapsibleContainer: {
      backgroundColor: c.surface,     // ✅ Bestaat!
      borderColor: c.border,          // ✅ Bestaat!
      borderRadius: Tokens.Radius.md, // ✅ Bestaat!
      marginVertical: Tokens.Space.sm, // ✅ Bestaat!
    },
    collapsibleHeader: {
      padding: Tokens.Space.md,        // ✅ Bestaat!
      // etc.
    },
  };
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3227
// Timestamp:     2026-02-06T08:17:37.240Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3228
// Timestamp:     2026-02-06T08:17:37.240Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3229
// Timestamp:     2026-02-06T08:17:37.241Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3230
// Timestamp:     2026-02-06T08:17:37.241Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3231
// Timestamp:     2026-02-06T08:17:37.241Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3232
// Timestamp:     2026-02-06T08:17:37.241Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3233
// Timestamp:     2026-02-06T08:17:37.241Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3234
// Timestamp:     2026-02-06T08:17:37.245Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3235
// Timestamp:     2026-02-06T08:17:37.245Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3236
// Timestamp:     2026-02-06T08:17:37.247Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3237
// Timestamp:     2026-02-06T08:17:37.247Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3238
// Timestamp:     2026-02-06T08:17:37.248Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3239
// Timestamp:     2026-02-06T08:17:37.248Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3240
// Timestamp:     2026-02-06T08:17:37.248Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3241
// Timestamp:     2026-02-06T08:17:37.249Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3242
// Timestamp:     2026-02-06T08:17:37.249Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3243
// Timestamp:     2026-02-06T08:17:37.250Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3244
// Timestamp:     2026-02-06T08:17:37.250Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3245
// Timestamp:     2026-02-06T08:17:37.250Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3246
// Timestamp:     2026-02-06T08:17:37.251Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3247
// Timestamp:     2026-02-06T08:17:37.251Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3248
// Timestamp:     2026-02-06T08:17:37.253Z
// ==========================================================
backgroundColor: c.surface,      // ✅ Jouw property
borderColor: c.border,           // ✅ Jouw property  
color: c.textPrimary,            // ✅ Jouw property


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3249
// Timestamp:     2026-02-06T08:17:37.253Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3250
// Timestamp:     2026-02-06T08:17:37.254Z
// ==========================================================
padding: Tokens.Space.md,        // ✅ Jouw token
fontSize: Tokens.Type.md,        // ✅ Jouw token
borderRadius: Tokens.Radius.md,  // ✅ Jouw token
minHeight: Tokens.Sizes.inputHeight, // ✅ Jouw token (48px)


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3251
// Timestamp:     2026-02-06T08:17:37.254Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3252
// Timestamp:     2026-02-06T08:17:37.254Z
// ==========================================================
const label = labelFromToken(labelToken);  // ✅ Jouw resolver


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3253
// Timestamp:     2026-02-06T08:17:37.254Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3254
// Timestamp:     2026-02-06T08:17:37.255Z
// ==========================================================
const assembled = {
  ...makeLayout(c),
  // ... bestaande
  ...makeContainers(c),  // ✅ Zelfde pattern
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3255
// Timestamp:     2026-02-06T08:17:37.256Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3256
// Timestamp:     2026-02-06T08:17:37.257Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3257
// Timestamp:     2026-02-06T08:17:37.258Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3258
// Timestamp:     2026-02-06T08:17:37.259Z
// ==========================================================
# 1. Nieuwe module
Containers_FINAL.ts → src/ui/styles/modules/Containers.ts

# 2. Nieuwe component  
CollapsibleSection_FINAL.tsx → src/ui/components/CollapsibleSection.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3259
// Timestamp:     2026-02-06T08:17:37.260Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3260
// Timestamp:     2026-02-06T08:17:37.261Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3261
// Timestamp:     2026-02-06T08:17:37.261Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3262
// Timestamp:     2026-02-06T08:17:37.261Z
// ==========================================================
# 3. modules/index.ts - 1 regel toevoegen
export { makeContainers } from './Containers';

# 4. useAppStyles.ts - 2 regels toevoegen
import { makeContainers } from '@styles/modules';  // import
...makeContainers(c),  // spread in assembled


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3263
// Timestamp:     2026-02-06T08:17:37.261Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3264
// Timestamp:     2026-02-06T08:17:37.261Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3265
// Timestamp:     2026-02-06T08:17:37.262Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3266
// Timestamp:     2026-02-06T08:17:37.263Z
// ==========================================================
# 5. WizStrings.ts - 3 labels toevoegen
LABEL_TOESLAGEN: 'Toeslagen',
LABEL_OVERIGE_VERZEKERINGEN: 'Overige verzekeringen',
LABEL_ABONNEMENTEN: 'Abonnementen',


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3267
// Timestamp:     2026-02-06T08:17:37.264Z
// ==========================================================
<View style={styles.pageContainer}>
  <Text style={styles.pageTitle}>{config.titleToken}</Text>      <ScrollView>
    {viewModels.map((vm: FieldViewModel) => {
      // 🆕 STRUCTURELE BESLISSING: Container vs Field
      // WizardPage beslist welk component type, gebaseerd op wat Orchestrator geeft          if (vm.componentType === 'container') {
        // Container ViewModel → Render als CollapsibleSection
        return (
          <CollapsibleSection
            key={vm.fieldId}
            labelToken={vm.labelToken}
            defaultExpanded={false}
          >
            {/* Recursief: render child fields */}
            {(vm.childFields ?? []).map((child) => (
              <FieldRenderer
                key={child.fieldId}
                viewModel={child}
                onUpdate={(value) => orchestrator.updateField(child.fieldId, value)}
              />
            ))}
          </CollapsibleSection>
        );
      }
      // Regular field ViewModel → Render via FieldRenderer
      return (
        <FieldRenderer
          key={vm.fieldId}
          viewModel={vm}
          onUpdate={(value) => orchestrator.updateField(vm.fieldId, value)}
        />
      );
    })}
  </ScrollView>
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3268
// Timestamp:     2026-02-06T08:17:37.265Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3269
// Timestamp:     2026-02-06T08:17:37.268Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3270
// Timestamp:     2026-02-06T08:17:37.268Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3271
// Timestamp:     2026-02-06T08:17:37.268Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3272
// Timestamp:     2026-02-06T08:17:37.268Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3273
// Timestamp:     2026-02-06T08:17:37.269Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3274
// Timestamp:     2026-02-06T08:17:37.269Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3275
// Timestamp:     2026-02-06T08:17:37.272Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3276
// Timestamp:     2026-02-06T08:17:37.272Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3277
// Timestamp:     2026-02-06T08:17:37.273Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3278
// Timestamp:     2026-02-06T08:17:37.274Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3279
// Timestamp:     2026-02-06T08:17:37.274Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3280
// Timestamp:     2026-02-06T08:17:37.275Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3281
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3282
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3283
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3284
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3285
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3286
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3287
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3288
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3289
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3290
// Timestamp:     2026-02-06T08:17:37.277Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3291
// Timestamp:     2026-02-06T08:17:37.279Z
// ==========================================================
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3292
// Timestamp:     2026-02-06T08:17:37.280Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3293
// Timestamp:     2026-02-06T08:17:37.281Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3294
// Timestamp:     2026-02-06T08:17:37.282Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3295
// Timestamp:     2026-02-06T08:17:37.285Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3296
// Timestamp:     2026-02-06T08:17:37.285Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3297
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3298
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3299
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3300
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3301
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3302
// Timestamp:     2026-02-06T08:17:37.287Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3303
// Timestamp:     2026-02-06T08:17:37.288Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3304
// Timestamp:     2026-02-06T08:17:37.288Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3305
// Timestamp:     2026-02-06T08:17:37.290Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3306
// Timestamp:     2026-02-06T08:17:37.290Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3307
// Timestamp:     2026-02-06T08:17:37.292Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3308
// Timestamp:     2026-02-06T08:17:37.293Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3309
// Timestamp:     2026-02-06T08:17:37.297Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3310
// Timestamp:     2026-02-06T08:17:37.297Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3311
// Timestamp:     2026-02-06T08:17:37.297Z
// ==========================================================
// Huidige code in WizardPage:
if (vm.componentType === 'container') {
  return <CollapsibleSection>...</CollapsibleSection>
}
return <FieldRenderer>...</FieldRenderer>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3312
// Timestamp:     2026-02-06T08:17:37.299Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3313
// Timestamp:     2026-02-06T08:17:37.300Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3314
// Timestamp:     2026-02-06T08:17:37.301Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3315
// Timestamp:     2026-02-06T08:17:37.303Z
// ==========================================================
// Orchestrator (business):
{
  componentType: 'container',  // ← "WAT het is"
  labelToken: 'LABEL_TOESLAGEN',
  childFields: [...]
}

// WizardPage (layout):
if (vm.componentType === 'container') {  // ← "HOE ik het render"
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3316
// Timestamp:     2026-02-06T08:17:37.306Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3317
// Timestamp:     2026-02-06T08:17:37.309Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3318
// Timestamp:     2026-02-06T08:17:37.309Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3319
// Timestamp:     2026-02-06T08:17:37.310Z
// ==========================================================
// Niemand vindt dit raar:
if (vm.componentType === 'currency') {
  return <MoneyInput />
}
if (vm.componentType === 'text') {
  return <TextInput />
}

// Dus waarom zou dit raar zijn?
if (vm.componentType === 'container') {
  return <CollapsibleSection />
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3320
// Timestamp:     2026-02-06T08:17:37.310Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3321
// Timestamp:     2026-02-06T08:17:37.311Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3322
// Timestamp:     2026-02-06T08:17:37.312Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3323
// Timestamp:     2026-02-06T08:17:37.314Z
// ==========================================================
// app/orchestrators/ComponentMapper.ts
export class ComponentMapper {
  public getComponentForType(type: string) {
    const map = {
      'container': CollapsibleSection,
      'currency': MoneyInput,
      'text': TextInput,
      // etc.
    };
    return map[type] ?? FieldRenderer;
  }
}

// In MasterOrchestrator:
public readonly mapper = new ComponentMapper();

// In WizardPage:
const Component = orchestrator.mapper.getComponentForType(vm.componentType);
return <Component {...props} />;


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3324
// Timestamp:     2026-02-06T08:17:37.315Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3325
// Timestamp:     2026-02-06T08:17:37.316Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3326
// Timestamp:     2026-02-06T08:17:37.319Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3327
// Timestamp:     2026-02-06T08:17:37.319Z
// ==========================================================
// ui/components/FieldRenderer.tsx
export const FieldRenderer = ({ viewModel, onUpdate }) => {
  // FieldRenderer doet de component type mapping
  if (viewModel.componentType === 'container') {
    return (
      <CollapsibleSection labelToken={viewModel.labelToken}>
        {viewModel.childFields.map(child => (
          <FieldRenderer viewModel={child} onUpdate={onUpdate} />
        ))}
      </CollapsibleSection>
    );
  }
  
  // Regular field rendering
  return <MoneyInput {...viewModel} />;
};

// WizardPage wordt super simpel:
{viewModels.map(vm => (
  <FieldRenderer key={vm.fieldId} viewModel={vm} onUpdate={...} />
))}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3328
// Timestamp:     2026-02-06T08:17:37.319Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3329
// Timestamp:     2026-02-06T08:17:37.320Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3330
// Timestamp:     2026-02-06T08:17:37.320Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3331
// Timestamp:     2026-02-06T08:17:37.321Z
// ==========================================================
// Dit is vergelijkbaar met:
<ScrollView>  {/* ← Layout beslissing */}
  {items.map(...)}  {/* ← Layout beslissing */}
</ScrollView>

// Net als:
if (type === 'container') {  /* ← Layout beslissing */}
  return <CollapsibleSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3332
// Timestamp:     2026-02-06T08:17:37.322Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3333
// Timestamp:     2026-02-06T08:17:37.323Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3334
// Timestamp:     2026-02-06T08:17:37.324Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3335
// Timestamp:     2026-02-06T08:17:37.324Z
// ==========================================================
// Easy to test:
const vm = { componentType: 'container', childFields: [...] };
const result = render(<WizardPage viewModels={[vm]} />);
expect(result.getByText('Toeslagen')).toBeInTheDocument();


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3336
// Timestamp:     2026-02-06T08:17:37.325Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3337
// Timestamp:     2026-02-06T08:17:37.329Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3338
// Timestamp:     2026-02-06T08:17:37.330Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3339
// Timestamp:     2026-02-06T08:17:37.330Z
// ==========================================================
if (vm.componentType === 'collapsible') {
  return <CollapsibleSection>
}
if (vm.componentType === 'tabs') {
  return <TabbedSection>
}
if (vm.componentType === 'accordion') {
  return <AccordionSection>
}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3340
// Timestamp:     2026-02-06T08:17:37.330Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3341
// Timestamp:     2026-02-06T08:17:37.333Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3342
// Timestamp:     2026-02-06T08:17:37.334Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "typescript",
"code": "2322",
"severity": 8,
"message": "Type '{ label: string; value: number; onChange: (value: unknown) => void; error: string | null | undefined; }' is not assignable to type 'IntrinsicAttributes & InputCounterProps'.\n  Property 'label' does not exist on type 'IntrinsicAttributes & InputCounterProps'.",
"source": "ts",
"startLineNumber": 40,
"startColumn": 11,
"endLineNumber": 40,
"endColumn": 16


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3343
// Timestamp:     2026-02-06T08:17:37.341Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "max-lines-per-function",
    "target": {
        "$mid": 1,
        "path": "/docs/latest/rules/max-lines-per-function",
        "scheme": "https",
        "authority": "eslint.org"
    }
},
"severity": 4,
"message": "Arrow function has too many lines (39). Maximum allowed is 30.",
"source": "eslint",
"startLineNumber": 22,
"startColumn": 60,
"endLineNumber": 70,
"endColumn": 2


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3344
// Timestamp:     2026-02-06T08:17:37.341Z
// ==========================================================
"resource": "/home/user/pre7/src/ui/components/FieldRenderer.tsx",
"owner": "eslint2",
"code": {
    "value": "@typescript-eslint/strict-boolean-expressions",
    "target": {
        "$mid": 1,
        "path": "/rules/strict-boolean-expressions",
        "scheme": "https",
        "authority": "typescript-eslint.io"
    }
},
"severity": 4,
"message": "Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.",
"source": "eslint",
"startLineNumber": 64,
"startColumn": 12,
"endLineNumber": 64,
"endColumn": 27


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3345
// Timestamp:     2026-02-06T08:17:37.341Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3346
// Timestamp:     2026-02-06T08:17:37.342Z
// ==========================================================
import React from 'react';
import { View, Text } from 'react-native';
import { useAppStyles } from '@styles/useAppStyles';
// Importeer hier je specifieke veld-componenten
import { InputCounter } from '@ui/components/fields/InputCounter'; 

interface FieldViewModel {
  fieldId: string;
  componentType: string;
  labelToken: string;
  value: unknown;
  isVisible: boolean;
  error?: string | null;
  options?: readonly unknown[];
}

interface FieldRendererProps {
  viewModel: FieldViewModel;
  onUpdate: (value: unknown) => void;
}

export const FieldRenderer: React.FC<FieldRendererProps> = ({
  viewModel,
  onUpdate,
}) => {
  const { styles } = useAppStyles();

  // De 'isVisible' check doen we hier alleen nog als allerlaatste veiligheidsnet.
  // In principe filtert de WizardPage deze al weg via de Master.
  if (viewModel.isVisible === false) {
    return null;
  }

  // DE COMPONENT FACTORY
  // We switchen nu op 'componentType' die uit de FieldRegistry komt
  switch (viewModel.componentType) {
    case 'NUMBER_COUNTER':
      return (
        <InputCounter
          label={viewModel.labelToken}
          value={viewModel.value as number}
          onChange={onUpdate}
          error={viewModel.error}
        />
      );

    case 'TEXT_INPUT':
      // Hier zou je een standaard TextInput component kunnen plaatsen
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          {/* Jouw TextInput component komt hier */}
        </View>
      );

    default:
      // Fallback voor simpele weergave (zoals in je oude file)
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>{viewModel.labelToken}</Text>
          <Text style={styles.description}>
            {String(viewModel.value ?? '')}
          </Text>
          {viewModel.error && (
            <Text style={styles.errorText}>{viewModel.error}</Text>
          )}
        </View>
      );
  }
};


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3347
// Timestamp:     2026-02-06T08:17:37.342Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3348
// Timestamp:     2026-02-06T08:17:37.343Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3349
// Timestamp:     2026-02-06T08:17:37.347Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3350
// Timestamp:     2026-02-06T08:17:37.349Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3351
// Timestamp:     2026-02-06T08:17:37.349Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3352
// Timestamp:     2026-02-06T08:17:37.349Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3353
// Timestamp:     2026-02-06T08:17:37.351Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3354
// Timestamp:     2026-02-06T08:17:37.352Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3355
// Timestamp:     2026-02-06T08:17:37.356Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3356
// Timestamp:     2026-02-06T08:17:37.356Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3357
// Timestamp:     2026-02-06T08:17:37.356Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3358
// Timestamp:     2026-02-06T08:17:37.356Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3359
// Timestamp:     2026-02-06T08:17:37.358Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3360
// Timestamp:     2026-02-06T08:17:37.361Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3361
// Timestamp:     2026-02-06T08:17:37.362Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3362
// Timestamp:     2026-02-06T08:17:37.363Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3363
// Timestamp:     2026-02-06T08:17:37.366Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3364
// Timestamp:     2026-02-06T08:17:37.369Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3365
// Timestamp:     2026-02-06T08:17:37.369Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3366
// Timestamp:     2026-02-06T08:17:37.369Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3367
// Timestamp:     2026-02-06T08:17:37.369Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3368
// Timestamp:     2026-02-06T08:17:37.370Z
// ==========================================================
// ❌ FOUT
<InputCounter label={...} />  // InputCounter heeft geen label prop!

// ✅ GOED
<View>
  <Text>{label}</Text>
  <InputCounter value={...} onChange={...} />
</View>


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3369
// Timestamp:     2026-02-06T08:17:37.372Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3370
// Timestamp:     2026-02-06T08:17:37.375Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3371
// Timestamp:     2026-02-06T08:17:37.376Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3372
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
// ❌ Te lang (39 regels in één functie)
export const FieldRenderer = () => { /* 39 lines */ }

// ✅ Opsplitsen
function renderFieldComponent() { /* switch cases */ }
export const FieldRenderer = () => { /* 15 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3373
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3374
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3375
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3376
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
// ❌ Impliciete check
{viewModel.error && <Text>...</Text>}

// ✅ Expliciete check
{viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
  <Text>...</Text>
)}


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3377
// Timestamp:     2026-02-06T08:17:37.377Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3378
// Timestamp:     2026-02-06T08:17:37.379Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3379
// Timestamp:     2026-02-06T08:17:37.380Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3380
// Timestamp:     2026-02-06T08:17:37.380Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3381
// Timestamp:     2026-02-06T08:17:37.381Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3382
// Timestamp:     2026-02-06T08:17:37.381Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3383
// Timestamp:     2026-02-06T08:17:37.381Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3384
// Timestamp:     2026-02-06T08:17:37.381Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3385
// Timestamp:     2026-02-06T08:17:37.382Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3386
// Timestamp:     2026-02-06T08:17:37.386Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3387
// Timestamp:     2026-02-06T08:17:37.389Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3388
// Timestamp:     2026-02-06T08:17:37.389Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3389
// Timestamp:     2026-02-06T08:17:37.389Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3390
// Timestamp:     2026-02-06T08:17:37.390Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3391
// Timestamp:     2026-02-06T08:17:37.391Z
// ==========================================================
/home/user/pre7/src/ui/components/fields
├── ChipButton.tsx
├── ConditionalField.tsx
├── DateField.tsx
├── FormField.tsx
├── index.ts
├── InputCounter.tsx
├── MoneyField.tsx
├── MoneyInput.tsx
├── ToggleSwitch.tsx
└── types.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3392
// Timestamp:     2026-02-06T08:17:37.393Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3393
// Timestamp:     2026-02-06T08:17:37.393Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3394
// Timestamp:     2026-02-06T08:17:37.393Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3395
// Timestamp:     2026-02-06T08:17:37.393Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3396
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3397
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3398
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3399
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3400
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3401
// Timestamp:     2026-02-06T08:17:37.394Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3402
// Timestamp:     2026-02-06T08:17:37.395Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3403
// Timestamp:     2026-02-06T08:17:37.396Z
// ==========================================================
src/ui/styles/modules/Forms.ts


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3404
// Timestamp:     2026-02-06T08:17:37.396Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3405
// Timestamp:     2026-02-06T08:17:37.396Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3406
// Timestamp:     2026-02-06T08:17:37.396Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3407
// Timestamp:     2026-02-06T08:17:37.396Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3408
// Timestamp:     2026-02-06T08:17:37.398Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3409
// Timestamp:     2026-02-06T08:17:37.399Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3410
// Timestamp:     2026-02-06T08:17:37.399Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3411
// Timestamp:     2026-02-06T08:17:37.400Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3412
// Timestamp:     2026-02-06T08:17:37.400Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3413
// Timestamp:     2026-02-06T08:17:37.400Z
// ==========================================================
FieldRenderer_PRODUCTION.tsx → src/ui/components/FieldRenderer.tsx


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3414
// Timestamp:     2026-02-06T08:17:37.400Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3415
// Timestamp:     2026-02-06T08:17:37.401Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3416
// Timestamp:     2026-02-06T08:17:37.401Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3417
// Timestamp:     2026-02-06T08:17:37.402Z
// ==========================================================
const vm = {
  fieldId: 'aantalMensen',
  componentType: 'counter',
  labelToken: 'LABEL_AANTAL_MENSEN',
  value: 3,
  isVisible: true,
};

<FieldRenderer viewModel={vm} onUpdate={(val) => console.log(val)} />


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3418
// Timestamp:     2026-02-06T08:17:37.402Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3419
// Timestamp:     2026-02-06T08:17:37.403Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3420
// Timestamp:     2026-02-06T08:17:37.403Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3421
// Timestamp:     2026-02-06T08:17:37.403Z
// ==========================================================
// Kleine functies (<30 regels)
export const FieldRenderer = () => { /* 25 lines */ }

// Helper functies apart
function renderCounter() { /* 10 lines */ }
function renderCurrency() { /* 12 lines */ }


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3422
// Timestamp:     2026-02-06T08:17:37.406Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3423
// Timestamp:     2026-02-06T08:17:37.406Z
// ==========================================================
// Proper coercion
value={typeof vm.value === 'number' ? vm.value : 0}

// Safe array check
const values = Array.isArray(vm.value) ? vm.value : [];


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3424
// Timestamp:     2026-02-06T08:17:37.406Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';


// ==========================================================
// Extracted from: claude_Repeater-functionaliteit met collapsable velden implementeren - Claude.json
// Block #:       3425
// Timestamp:     2026-02-06T08:17:37.406Z
// ==========================================================
// Linter-friendly null checks
const hasError = vm.error !== null && 
                 vm.error !== undefined && 
                 vm.error !== '';
