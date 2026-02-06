

// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2195
// Timestamp:     2026-02-06T08:17:36.568Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2196
// Timestamp:     2026-02-06T08:17:36.568Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2197
// Timestamp:     2026-02-06T08:17:36.569Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2198
// Timestamp:     2026-02-06T08:17:36.570Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2199
// Timestamp:     2026-02-06T08:17:36.571Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2200
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2201
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2202
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2203
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2204
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2205
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2206
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2207
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2208
// Timestamp:     2026-02-06T08:17:36.572Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2209
// Timestamp:     2026-02-06T08:17:36.573Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2210
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2211
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2212
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2213
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2214
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2215
// Timestamp:     2026-02-06T08:17:36.574Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2216
// Timestamp:     2026-02-06T08:17:36.575Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2217
// Timestamp:     2026-02-06T08:17:36.576Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2218
// Timestamp:     2026-02-06T08:17:36.576Z
// ==========================================================
<ChipButton selected={x} onPress={y}>


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2219
// Timestamp:     2026-02-06T08:17:36.576Z
// ==========================================================
<ChipButton viewModel={vm} />


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2220
// Timestamp:     2026-02-06T08:17:36.578Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2221
// Timestamp:     2026-02-06T08:17:36.579Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2222
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2223
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2224
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2225
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2226
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2227
// Timestamp:     2026-02-06T08:17:36.581Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2228
// Timestamp:     2026-02-06T08:17:36.582Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2229
// Timestamp:     2026-02-06T08:17:36.582Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2230
// Timestamp:     2026-02-06T08:17:36.583Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2231
// Timestamp:     2026-02-06T08:17:36.584Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2232
// Timestamp:     2026-02-06T08:17:36.585Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2233
// Timestamp:     2026-02-06T08:17:36.585Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2234
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2235
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2236
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2237
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2238
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2239
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2240
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2241
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2242
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2243
// Timestamp:     2026-02-06T08:17:36.586Z
// ==========================================================
<ChipButton selected={x} onPress={y}>


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2244
// Timestamp:     2026-02-06T08:17:36.587Z
// ==========================================================
<ChipButton viewModel={vm} />


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2245
// Timestamp:     2026-02-06T08:17:36.592Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2246
// Timestamp:     2026-02-06T08:17:36.595Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2247
// Timestamp:     2026-02-06T08:17:36.595Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2248
// Timestamp:     2026-02-06T08:17:36.595Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2249
// Timestamp:     2026-02-06T08:17:36.595Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2250
// Timestamp:     2026-02-06T08:17:36.595Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2251
// Timestamp:     2026-02-06T08:17:36.596Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2252
// Timestamp:     2026-02-06T08:17:36.596Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2253
// Timestamp:     2026-02-06T08:17:36.596Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2254
// Timestamp:     2026-02-06T08:17:36.596Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2255
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2256
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2257
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2258
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2259
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2260
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2261
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2262
// Timestamp:     2026-02-06T08:17:36.597Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2263
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2264
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2265
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2266
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2267
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2268
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
<ChipButton selected={x} onPress={y}>


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2269
// Timestamp:     2026-02-06T08:17:36.598Z
// ==========================================================
<ChipButton viewModel={vm} />


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2270
// Timestamp:     2026-02-06T08:17:36.599Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2271
// Timestamp:     2026-02-06T08:17:36.601Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2272
// Timestamp:     2026-02-06T08:17:36.601Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2273
// Timestamp:     2026-02-06T08:17:36.602Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2274
// Timestamp:     2026-02-06T08:17:36.603Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2275
// Timestamp:     2026-02-06T08:17:36.603Z
// ==========================================================
# 🔧 ORCHESTRATOR REFACTORING - Concrete Implementatie

## 🎯 Doel
Transformeer de huidige orchestrator architectuur naar een clean vertical dependency structure waar:
1. **Master** is een pure façade (alleen delegation, geen logic)
2. **Alle orchestrators** zijn instance-based (geen static methods)
3. **Geen horizontal dependencies** (orchestrators kennen elkaar niet)
4. **Single responsibility** per orchestrator

---

## 📦 STAP 1: Fix ImportOrchestrator (HIGH PRIORITY)

### ❌ Voor (Horizontal Dependency)

```typescript
// MasterOrchestrator.ts
export class MasterOrchestrator {
  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }
  
  public async handleCsvImport(csvText: string): Promise<void> {
    const state = this.fso.getState();
    
    // ❌ Static method call met research instance
    const result = ImportOrchestrator.processCsvImport(this.research, {
      csvText,
      members: state.data.household.members,
      setupData: state.data.setup,
    });
    
    // ❌ Master doet de orchestratie
    this.fso.updateField('transactions', result.transactions);
    const newSummary = FinancialOrchestrator.prepareViewModel(this.fso.getState());
    this.fso.dispatch({
      type: 'UPDATE_VIEWMODEL',
      payload: { financialSummary: newSummary },
    });
    
    // ❌ Master doet logging
    if (result.summary.isDiscrepancy) {
      logger.warn('import.discrepancy_found', { details: result.summary });
    } else {
      logger.info('import.success', { count: result.transactions.length });
    }
  }
}

// ImportOrchestrator.ts
export class ImportOrchestrator {
  // ❌ Static method ontvangt andere orchestrator
  public static processCsvImport(
    research: ResearchOrchestrator,
    params: { csvText: string; members: Member[]; setupData: Record<string, unknown> | null }
  ): ImportResult {
    const rawResult = research.processAllData(
      params.members,
      params.csvText,
      params.setupData
    );
    // ...
  }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2276
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2277
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2278
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2279
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2280
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2281
// Timestamp:     2026-02-06T08:17:36.604Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2282
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2283
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2284
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2285
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2286
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2287
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2288
// Timestamp:     2026-02-06T08:17:36.605Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2289
// Timestamp:     2026-02-06T08:17:36.607Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2290
// Timestamp:     2026-02-06T08:17:36.608Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2291
// Timestamp:     2026-02-06T08:17:36.610Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2292
// Timestamp:     2026-02-06T08:17:36.610Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2293
// Timestamp:     2026-02-06T08:17:36.610Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2294
// Timestamp:     2026-02-06T08:17:36.611Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2295
// Timestamp:     2026-02-06T08:17:36.611Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2296
// Timestamp:     2026-02-06T08:17:36.612Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2297
// Timestamp:     2026-02-06T08:17:36.612Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2298
// Timestamp:     2026-02-06T08:17:36.614Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2299
// Timestamp:     2026-02-06T08:17:36.614Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2300
// Timestamp:     2026-02-06T08:17:36.615Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2301
// Timestamp:     2026-02-06T08:17:36.616Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2302
// Timestamp:     2026-02-06T08:17:36.617Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2303
// Timestamp:     2026-02-06T08:17:36.617Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2304
// Timestamp:     2026-02-06T08:17:36.617Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2305
// Timestamp:     2026-02-06T08:17:36.617Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2306
// Timestamp:     2026-02-06T08:17:36.617Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2307
// Timestamp:     2026-02-06T08:17:36.619Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2308
// Timestamp:     2026-02-06T08:17:36.620Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2309
// Timestamp:     2026-02-06T08:17:36.621Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2310
// Timestamp:     2026-02-06T08:17:36.621Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2311
// Timestamp:     2026-02-06T08:17:36.621Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2312
// Timestamp:     2026-02-06T08:17:36.621Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2313
// Timestamp:     2026-02-06T08:17:36.622Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2314
// Timestamp:     2026-02-06T08:17:36.622Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2315
// Timestamp:     2026-02-06T08:17:36.623Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2316
// Timestamp:     2026-02-06T08:17:36.623Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2317
// Timestamp:     2026-02-06T08:17:36.623Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2318
// Timestamp:     2026-02-06T08:17:36.623Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2319
// Timestamp:     2026-02-06T08:17:36.623Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2320
// Timestamp:     2026-02-06T08:17:36.625Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2321
// Timestamp:     2026-02-06T08:17:36.626Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2322
// Timestamp:     2026-02-06T08:17:36.627Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2323
// Timestamp:     2026-02-06T08:17:36.627Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2324
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2325
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2326
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2327
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2328
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2329
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2330
// Timestamp:     2026-02-06T08:17:36.628Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2331
// Timestamp:     2026-02-06T08:17:36.629Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2332
// Timestamp:     2026-02-06T08:17:36.629Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2333
// Timestamp:     2026-02-06T08:17:36.629Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2334
// Timestamp:     2026-02-06T08:17:36.630Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2335
// Timestamp:     2026-02-06T08:17:36.630Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2336
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2337
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2338
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2339
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2340
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2341
// Timestamp:     2026-02-06T08:17:36.631Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2342
// Timestamp:     2026-02-06T08:17:36.633Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2343
// Timestamp:     2026-02-06T08:17:36.633Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2344
// Timestamp:     2026-02-06T08:17:36.634Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2345
// Timestamp:     2026-02-06T08:17:36.635Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2346
// Timestamp:     2026-02-06T08:17:36.636Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2347
// Timestamp:     2026-02-06T08:17:36.637Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2348
// Timestamp:     2026-02-06T08:17:36.638Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2349
// Timestamp:     2026-02-06T08:17:36.638Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2350
// Timestamp:     2026-02-06T08:17:36.638Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2351
// Timestamp:     2026-02-06T08:17:36.639Z
// ==========================================================
export class MasterOrchestrator {
  public readonly render: RenderOrchestrator;

  constructor(
    public readonly fso: FormStateOrchestrator,
    public readonly research: ResearchOrchestrator,
    public readonly visibility: VisibilityOrchestrator,
  ) {
    this.render = new RenderOrchestrator(this.fso);
  }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2352
// Timestamp:     2026-02-06T08:17:36.639Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2353
// Timestamp:     2026-02-06T08:17:36.640Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2354
// Timestamp:     2026-02-06T08:17:36.640Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2355
// Timestamp:     2026-02-06T08:17:36.641Z
// ==========================================================
export class ImportOrchestrator {
  public static processCsvImport(
    research: ResearchOrchestrator,  // ❌ HORIZONTAL DEPENDENCY!
    params: { csvText, members, setupData }
  ): ImportResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2356
// Timestamp:     2026-02-06T08:17:36.641Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2357
// Timestamp:     2026-02-06T08:17:36.642Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2358
// Timestamp:     2026-02-06T08:17:36.644Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2359
// Timestamp:     2026-02-06T08:17:36.644Z
// ==========================================================
export class FinancialOrchestrator {
  public static prepareViewModel(state: FormState) { ... }
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2360
// Timestamp:     2026-02-06T08:17:36.645Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2361
// Timestamp:     2026-02-06T08:17:36.646Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2362
// Timestamp:     2026-02-06T08:17:36.648Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2363
// Timestamp:     2026-02-06T08:17:36.648Z
// ==========================================================
export class ResearchOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}  // ⚠️ Ontvangt maar gebruikt niet
  
  public readonly processAllData = (
    rawMembers: RawUIData[],
    rawCsv: string,
    currentSetup: Record<string, unknown> | null,  // ❌ Ontvangt setup direct
  ): MasterProcessResult


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2364
// Timestamp:     2026-02-06T08:17:36.649Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2365
// Timestamp:     2026-02-06T08:17:36.649Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2366
// Timestamp:     2026-02-06T08:17:36.649Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2367
// Timestamp:     2026-02-06T08:17:36.649Z
// ==========================================================
export class ComponentOrchestrator {
  constructor(
    private readonly update

: UpdateFieldCallback,
    private readonly styles: any
  ) {}
  
  public buildComponentViewModel(vm: FieldViewModel): ComponentViewModel | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2368
// Timestamp:     2026-02-06T08:17:36.650Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2369
// Timestamp:     2026-02-06T08:17:36.650Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2370
// Timestamp:     2026-02-06T08:17:36.650Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2371
// Timestamp:     2026-02-06T08:17:36.651Z
// ==========================================================
export class VisibilityOrchestrator {
  constructor(private readonly fso: FormStateOrchestrator) {}
  
  public evaluate(ruleName: string, memberId?: string): boolean


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2372
// Timestamp:     2026-02-06T08:17:36.651Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2373
// Timestamp:     2026-02-06T08:17:36.651Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2374
// Timestamp:     2026-02-06T08:17:36.652Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2375
// Timestamp:     2026-02-06T08:17:36.652Z
// ==========================================================
export class FormStateOrchestrator {
  constructor(
    public readonly getState: () => FormState,
    public readonly dispatch: (action: FormAction) => void
  ) {
    this.writer = new StateWriterAdapter(this.getState, (a) => this.dispatch(a as FormAction));
  }
  
  public getValue(fieldId: string): unknown
  public updateField(fieldId: string, validatedValue: unknown): void
  public getValidationError(fieldId: string, value: unknown): string | null


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2376
// Timestamp:     2026-02-06T08:17:36.652Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2377
// Timestamp:     2026-02-06T08:17:36.652Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2378
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2379
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2380
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2381
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2382
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2383
// Timestamp:     2026-02-06T08:17:36.653Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2384
// Timestamp:     2026-02-06T08:17:36.654Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2385
// Timestamp:     2026-02-06T08:17:36.655Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static processCsvImport(
  research: ResearchOrchestrator,  // ← HORIZONTAL DEPENDENCY!
  params: { csvText, members, setupData }
)

// Master moet research doorgeven:
ImportOrchestrator.processCsvImport(this.research, {...})


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2386
// Timestamp:     2026-02-06T08:17:36.655Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2387
// Timestamp:     2026-02-06T08:17:36.656Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2388
// Timestamp:     2026-02-06T08:17:36.656Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2389
// Timestamp:     2026-02-06T08:17:36.656Z
// ==========================================================
export class ImportOrchestrator {
  constructor(
    private readonly research: ResearchOrchestrator,  // ← Owns dependency
    private readonly fso: FormStateOrchestrator
  ) {}
  
  public async processCsvImport(csvText: string): Promise<ImportResult>
}

// Master creëert instance:
this.import = new ImportOrchestrator(this.research, this.fso);


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2390
// Timestamp:     2026-02-06T08:17:36.656Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2391
// Timestamp:     2026-02-06T08:17:36.658Z
// ==========================================================
// ❌ HUIDIGE SITUATIE
public static prepareViewModel(state: FormState)

// Master moet state doorgeven - breaking encapsulation
FinancialOrchestrator.prepareViewModel(this.fso.getState())


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2392
// Timestamp:     2026-02-06T08:17:36.658Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2393
// Timestamp:     2026-02-06T08:17:36.658Z
// ==========================================================
constructor(private readonly fso: FormStateOrchestrator) {}
public prepareViewModel(): FinancialSummary


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2394
// Timestamp:     2026-02-06T08:17:36.659Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2395
// Timestamp:     2026-02-06T08:17:36.659Z
// ==========================================================
// ❌ 15+ lines per method
public updateField() { /* validation + update + recalc */ }
public getFormattedDate() { /* complex date formatting */ }
public handleCsvImport() { /* orchestration + logging */ }


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2396
// Timestamp:     2026-02-06T08:17:36.659Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2397
// Timestamp:     2026-02-06T08:17:36.659Z
// ==========================================================
public updateField(fieldId, value) {
  const result = validateAtBoundary(fieldId, value);
  if (!result.success) { logger.warn(...); return; }
  this.fso.updateField(fieldId, result.data);
  const summary = this.financial.prepareViewModel();  // ← instance
  this.fso.dispatch({...});
}


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2398
// Timestamp:     2026-02-06T08:17:36.661Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2399
// Timestamp:     2026-02-06T08:17:36.661Z
// ==========================================================
// VOOR
orchestrator.getFormattedDate(fieldId, format)

// NA
orchestrator.getFormattedValue(fieldId, 'date')


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2400
// Timestamp:     2026-02-06T08:17:36.664Z
// ==========================================================
<ChipButton selected={x} onPress={y}>


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2401
// Timestamp:     2026-02-06T08:17:36.665Z
// ==========================================================
<ChipButton viewModel={vm} />


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2402
// Timestamp:     2026-02-06T08:17:36.666Z
// ==========================================================
<ChipButton selected={x} onPress={y}>


// ==========================================================
// Extracted from: claude_Master-orchestrator architectuur met taakdeling - Claude.json
// Block #:       2403
// Timestamp:     2026-02-06T08:17:36.666Z
// ==========================================================
<ChipButton viewModel={vm} />
