

// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       855
// Timestamp:     2026-02-06T08:17:35.484Z
// ==========================================================
public buildGroupedViewModels(fieldIds: string[]): Array<Record<string, unknown>>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       856
// Timestamp:     2026-02-06T08:17:35.484Z
// ==========================================================
export function getGroupLabelToken(groupId: string): string


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       857
// Timestamp:     2026-02-06T08:17:35.485Z
// ==========================================================
const models: Record<string, unknown>[] = [];
for (const id of visibleIds) {
  const vm = this.render.buildFieldViewModel(id);
  if (vm !== null) {
    models.push({ ...vm, isVisible: true });
  }
}


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       858
// Timestamp:     2026-02-06T08:17:35.485Z
// ==========================================================
const models = this.render.buildGroupedViewModels(visibleIds);
return models.map(vm => ({ ...vm, isVisible: true }));


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       859
// Timestamp:     2026-02-06T08:17:35.485Z
// ==========================================================
<View style={styles.collapsibleContainer}>
  <TouchableOpacity
    style={styles.collapsibleHeader}
    onPress={() => setIsExpanded(!isExpanded)}
    accessibilityRole="button"
    accessibilityLabel={`${labelToken} ${isExpanded ? 'inklappen' : 'uitklappen'}`}
  >
    <Text style={styles.collapsibleLabel}>{labelToken}</Text>
    <Text style={styles.collapsibleIcon}>
      {isExpanded ? '▼' : '▶'}
    </Text>
  </TouchableOpacity>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       860
// Timestamp:     2026-02-06T08:17:35.500Z
// ==========================================================
{isExpanded && (
    <View style={styles.collapsibleContent}>
      {children}
    </View>
  )}
</View>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       861
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
<CollapsibleSection labelToken="LABEL_TOESLAGEN">
  <CurrencyField fieldId="zorgtoeslag" />
  <CurrencyField fieldId="reiskosten" />
  <CurrencyField fieldId="overigeInkomsten" />
</CollapsibleSection>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       862
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
// src/ui/styles/useAppStyles.ts
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { tokens } from './Tokens';
import { layoutStyles } from './modules/Layout';
import { buttonStyles } from './modules/Buttons';
import { cardStyles } from './modules/Cards';
import { formStyles } from './modules/Forms';
import { typographyStyles } from './modules/Typography';
import { headerStyles } from './modules/Header';
import { dashboardStyles } from './modules/Dashboard';
import { summaryStyles } from './modules/Summary';
import { chipStyles } from './modules/Chips';
import { toggleStyles } from './modules/Toggles';
import { checkboxStyles } from './modules/Checkboxes';
import { alertStyles } from './modules/Alerts';
import { helperStyles } from './modules/Helpers';
import { containerStyles } from './modules/Containers';

/**
 * Genereert een volledig, gevalideerd en geoptimaliseerd StyleSheet-object
 * op basis van het huidige systeem-thema (light/dark).
 * 
 * - Gebruikt tokens voor consistent design system
 * - Behoudt RN-performance via StyleSheet.create
 * - Ondersteunt caching via useMemo
 */
export const useAppStyles = () => {
  const colorScheme = useColorScheme(); // 'light' | 'dark' | null
  const theme = colorScheme ?? 'light';
  const currentTokens = tokens[theme];

  const styles = useMemo(() => {
    // 1. Assembleer alle style-definities als plain objects
    const rawStyles = {
      ...layoutStyles(currentTokens),
      ...buttonStyles(currentTokens),
      ...cardStyles(currentTokens),
      ...formStyles(currentTokens),
      ...typographyStyles(currentTokens),
      ...headerStyles(currentTokens),
      ...dashboardStyles(currentTokens),
      ...summaryStyles(currentTokens),
      ...chipStyles(currentTokens),
      ...toggleStyles(currentTokens),
      ...checkboxStyles(currentTokens),
      ...alertStyles(currentTokens),
      ...helperStyles(currentTokens),
      ...containerStyles(currentTokens),
    };

    // 2. Valideer & optimaliseer met StyleSheet.create
    return StyleSheet.create(rawStyles);
  }, [currentTokens]);

  return { styles, tokens: currentTokens };
};


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       863
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
// In plaats van useColorScheme(), gebruik een eigen hook:
const { themeName } = useAppTheme(); // retourneert 'light' | 'dark' | 'hc'
const currentTokens = tokens[themeName] ?? tokens.light;


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       864
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
// src/ui/styles/modules/Containers.ts
import { StyleSheet } from 'react-native';

export const containerStyles = (tokens: TokenSet) => StyleSheet.create({
  collapsibleContainer: { ... },
});


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       865
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
// src/ui/styles/modules/Containers.ts
export const containerStyles = (tokens: TokenSet) => ({
  collapsibleContainer: {
    backgroundColor: tokens.background.surface,
    borderRadius: tokens.border.radius.md,
    marginVertical: tokens.spacing.sm,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: tokens.spacing.md,
  },
  // ...
});


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       866
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
// src/ui/styles/Tokens.ts
export type TokenSet = {
  spacing: { xs: number; sm: number; md: number; lg: number };
  colors: {
    text: { primary: string; secondary: string };
    background: { surface: string; elevated: string };
    border: { default: string };
  };
  border: {
    radius: { sm: number; md: number; lg: number };
  };
  // ... etc.
};

export const tokens = {
  light: { /* voldoet aan TokenSet */ } as TokenSet,
  dark: { /* voldoet aan TokenSet */ } as TokenSet,
};


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       867
// Timestamp:     2026-02-06T08:17:35.501Z
// ==========================================================
<View style={styles.collapsibleContainer}>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       868
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
// src/ui/styles/modules/Forms.ts
export const formStyles = (tokens: TokenSet) => ({
  input: {
    borderWidth: 1,
    borderColor: tokens.colors.border.default,
    padding: tokens.spacing.sm,
    borderRadius: tokens.border.radius.sm,
  },
  label: {
    fontSize: tokens.typography.body.fontSize,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
});


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       869
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
const mockTokens = { ... };
const styles = formStyles(mockTokens);
expect(styles.input).toEqual({ borderWidth: 1, ... });


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       870
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
case 'counter':
  // InputCounter: meestal een numeric stepper
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <InputCounter
        value={vm.value as number}
        onChange={onUpdate}
      />
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       871
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
case 'currency':
  // MoneyInput: formatted currency input
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <MoneyInput
        value={vm.value as number}
        onChange={onUpdate}
        placeholder={placeholder}
      /> */}
      <Text style={styles.description}>
        [Currency input - uncomment MoneyInput import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       872
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
case 'text':
  // Text input
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <TextInput
        value={vm.value as string}
        onChange={onUpdate}
        placeholder={placeholder}
      /> */}
      <Text style={styles.description}>
        [Text input - uncomment TextInput import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       873
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
case 'number':
  // Numeric input (not counter)
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <NumberInput
        value={vm.value as number}
        onChange={onUpdate}
        placeholder={placeholder}
      /> */}
      <Text style={styles.description}>
        [Number input - uncomment NumberInput import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       874
// Timestamp:     2026-02-06T08:17:35.504Z
// ==========================================================
case 'chip-group':
  // Single select chips
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <ChipGroup
        value={vm.value as string}
        options={vm.options as string[]}
        onChange={onUpdate}
      /> */}
      <Text style={styles.description}>
        [Chip group - uncomment ChipGroup import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       875
// Timestamp:     2026-02-06T08:17:35.512Z
// ==========================================================
case 'chip-group-multiple':
  // Multi select chips
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <ChipGroupMultiple
        value={vm.value as string[]}
        options={vm.options as string[]}
        onChange={onUpdate}
      /> */}
      <Text style={styles.description}>
        [Multi chip group - uncomment ChipGroupMultiple import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       876
// Timestamp:     2026-02-06T08:17:35.512Z
// ==========================================================
case 'radio':
  // Radio buttons
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* <RadioGroup
        value={vm.value as string}
        options={vm.options as string[]}
        onChange={onUpdate}
      /> */}
      <Text style={styles.description}>
        [Radio group - uncomment RadioGroup import]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       877
// Timestamp:     2026-02-06T08:17:35.512Z
// ==========================================================
case 'label':
  // Read-only label (derived value)
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>
        {String(vm.value ?? '')}
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       878
// Timestamp:     2026-02-06T08:17:35.513Z
// ==========================================================
default:
  // Fallback: simple display
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>
        {String(vm.value ?? '')}
      </Text>
      <Text style={styles.textSecondary}>
        [Unknown type: {vm.componentType}]
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       879
// Timestamp:     2026-02-06T08:17:35.514Z
// ==========================================================
<View>
  {renderFieldComponent(viewModel, onUpdate, styles)}
  
  {/* Error message (explicit null/undefined/empty check for linter) */}
  {hasError && (
    <Text style={styles.errorText}>{viewModel.error}</Text>
  )}
</View>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       880
// Timestamp:     2026-02-06T08:17:35.515Z
// ==========================================================
case 'counter':
  return (
    <InputCounter
      value={vm.value as number}
      onChange={onUpdate}
      // InputCounter heeft waarschijnlijk geen label prop
      // Die moet je zelf renderen als <Text> erboven
    />
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       881
// Timestamp:     2026-02-06T08:17:35.517Z
// ==========================================================
case 'text':
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      {/* Jouw TextInput component komt hier */}
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       882
// Timestamp:     2026-02-06T08:17:35.522Z
// ==========================================================
default:
  // Fallback voor simpele weergave
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>
        {String(vm.value ?? '')}
      </Text>
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       883
// Timestamp:     2026-02-06T08:17:35.523Z
// ==========================================================
<View>
  {renderFieldComponent(viewModel, onUpdate, styles)}
  
  {/* FIX 3: Expliciete null/undefined check voor linter */}
  {viewModel.error !== null && viewModel.error !== undefined && viewModel.error !== '' && (
    <Text style={styles.errorText}>{viewModel.error}</Text>
  )}
</View>


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       884
// Timestamp:     2026-02-06T08:17:35.523Z
// ==========================================================
case 'NUMBER_COUNTER':
  return (
    <InputCounter
      label={viewModel.labelToken}
      value={viewModel.value as number}
      onChange={onUpdate}
      error={viewModel.error}
    />
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       885
// Timestamp:     2026-02-06T08:17:35.523Z
// ==========================================================
case 'TEXT_INPUT':
  // Hier zou je een standaard TextInput component kunnen plaatsen
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{viewModel.labelToken}</Text>
      {/* Jouw TextInput component komt hier */}
    </View>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       886
// Timestamp:     2026-02-06T08:17:35.523Z
// ==========================================================
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


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       887
// Timestamp:     2026-02-06T08:17:35.523Z
// ==========================================================
case 'container':
  return (
    <CollapsibleSection labelToken={labelFromToken(vm.labelToken)}>
      {(vm.childFields as FieldViewModel[]).map(child => (
        <FieldRenderer
          key={child.fieldId}
          viewModel={child}
          onUpdate={onUpdate}
        />
      ))}
    </CollapsibleSection>
  );


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       888
// Timestamp:     2026-02-06T08:17:35.524Z
// ==========================================================
this.fso = new FormStateOrchestrator(getState, dispatch);
this.visibility = new VisibilityOrchestrator(this.fso, timeProvider);
this.render = new RenderOrchestrator(this.fso, this.visibility);
this.research = new ResearchOrchestrator(this.fso);
this.component = new ComponentOrchestrator(
  (fieldId, value) => this.updateField(fieldId, value),
  styles
);


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       889
// Timestamp:     2026-02-06T08:17:35.526Z
// ==========================================================
public readonly fso: FormStateOrchestrator;
public readonly render: RenderOrchestrator;
public readonly visibility: VisibilityOrchestrator;
public readonly research: ResearchOrchestrator;


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       890
// Timestamp:     2026-02-06T08:17:35.530Z
// ==========================================================
// src/app/hooks/useStableOrchestrator.ts
import { useRef } from 'react';
import { MasterOrchestrator } from '../orchestrators/MasterOrchestrator';
import { useAppStore } from '@core/store/AppStore'; // of jouw state dispatch/getState
import { useAppStyles } from '@ui/styles/useAppStyles';
import { TimeProvider } from '@domain/helpers/TimeProvider';

export const useStableOrchestrator = (): MasterOrchestrator => {
  const { getState, dispatch } = useAppStore();
  const { styles } = useAppStyles();
  
  // Gebruik useRef om de orchestrator te "vast te houden"
  const orchestratorRef = useRef<MasterOrchestrator | null>(null);

  if (orchestratorRef.current === null) {
    // Eénmalige initialisatie
    orchestratorRef.current = new MasterOrchestrator(
      getState,
      dispatch,
      styles,
      new TimeProvider() // of een mocked versie in test
    );
  }

  return orchestratorRef.current;
};


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       891
// Timestamp:     2026-02-06T08:17:35.530Z
// ==========================================================
const master = new MasterOrchestrator(getState, dispatch, styles, timeProvider);


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       892
// Timestamp:     2026-02-06T08:17:35.530Z
// ==========================================================
new MasterOrchestrator(fso, research, visibility)


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       893
// Timestamp:     2026-02-06T08:17:35.531Z
// ==========================================================
constructor(
  getState: () => FormState,
  dispatch: (action: FormAction) => void,
  styles: any,
  timeProvider: TimeProvider
)


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       894
// Timestamp:     2026-02-06T08:17:35.532Z
// ==========================================================
const fso = new FormStateOrchestrator(() => state, dispatch);


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       895
// Timestamp:     2026-02-06T08:17:35.533Z
// ==========================================================
// src/app/hooks/useStableOrchestrator.ts
import { useRef } from 'react';
import { MasterOrchestrator } from '@app/orchestrators/MasterOrchestrator';
import type { FormState } from '@core/types/core';
import type { FormAction } from './formReducer';
import { useAppStyles } from '@ui/styles/useAppStyles'; // of waar styles vandaan komt
import { TimeProvider } from '@domain/helpers/TimeProvider';

export function useStableOrchestrator(
  getState: () => FormState,
  dispatch: (action: FormAction) => void
): MasterOrchestrator {
  const { styles } = useAppStyles();
  const orchestratorRef = useRef<MasterOrchestrator | null>(null);

  if (orchestratorRef.current === null) {
    orchestratorRef.current = new MasterOrchestrator(
      getState,          // ✅ Levende getter, geen snapshot
      dispatch,          // ✅ Stabiel via useRef
      styles,            // ✅ Vereist voor ComponentOrchestrator
      new TimeProvider() // ✅ Vereist voor VisibilityOrchestrator
    );
  }

  return orchestratorRef.current;
}


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       896
// Timestamp:     2026-02-06T08:17:35.533Z
// ==========================================================
const [state, dispatch] = useReducer(formReducer, initialState);

// Geef levende getters door
const getState = () => state;

const master = useStableOrchestrator(getState, dispatch);


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       897
// Timestamp:     2026-02-06T08:17:35.536Z
// ==========================================================
constructor(
  getState: () => FormState,
  dispatch: (action: FormAction) => void,
  styles: any,  // ← hier
  timeProvider: TimeProvider
)


// ==========================================================
// Extracted from: chat-RenderOrchestrator Enhancements.txt
// Block #:       898
// Timestamp:     2026-02-06T08:17:35.539Z
// ==========================================================
import type { AppStyles } from '@ui/styles/useAppStyles';

// ...

constructor(
  getState: () => FormState,
  dispatch: (action: FormAction) => void,
  styles: ReturnType<typeof useAppStyles>['styles'],
  timeProvider: TimeProvider
)
