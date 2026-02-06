

// ==========================================================
// Extracted from: chat-FileNamingForClarity.txt
// Block #:       2
// Timestamp:     2026-02-06T08:17:34.660Z
// ==========================================================
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


// ==========================================================
// Extracted from: chat-FileNamingForClarity.txt
// Block #:       3
// Timestamp:     2026-02-06T08:17:34.661Z
// ==========================================================
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


// ==========================================================
// Extracted from: chat-FileNamingForClarity.txt
// Block #:       4
// Timestamp:     2026-02-06T08:17:34.662Z
// ==========================================================
/**
 * ViewModelOrchestrator
 * 
 * Orchestreert de opbouw van ViewModels voor formulierweergave:
 * - Combineert field-definities (registry), huidige state en visibility rules
 * - Genereert FieldViewModels (inclusief container-VMs voor gegroepeerde velden)
 * - Filtert niet-zichtbare velden vóór levering aan UI-laag
 * - Levert complete PageViewModels voor rendering
 * 
 * ⚠️ Let op: Deze klasse bereidt ViewModels voor — 
 * ze voert géén DOM-rendering uit. De naam "Render" in eerdere versies 
 * was misleidend en is bewust vermeden.
 */
