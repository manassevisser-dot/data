// src/app/orchestrators/ComponentOrchestrator.ts

import {
    ComponentViewModel,
    CounterViewModel,
    CurrencyViewModel,
    TextViewModel,
    NumberViewModel,
    ChipGroupViewModel,
    ChipViewModel,
    RadioViewModel,
    RadioOptionViewModel,
    LabelViewModel,
    DateViewModel,
    COMPONENT_TYPES,
    ComponentType,
    getComponentMetadata,
  } from '@domain/registry/ComponentRegistry';
  import { FieldViewModel } from './RenderOrchestrator';
  import { labelFromToken } from '@ui/constants/labelResolver';
  import { ViewStyle, TextStyle } from 'react-native';
  
  /**
   * ═══════════════════════════════════════════════════════════
   * UPDATE CALLBACK - Facade from MasterOrchestrator
   * ═══════════════════════════════════════════════════════════
   * 
   * ComponentOrchestrator does NOT know about FormStateOrchestrator!
   * It receives this callback from MasterOrchestrator.
   * 
   * This maintains vertical architecture (no horizontal dependencies).
   */
  export type UpdateFieldCallback = (fieldId: string, value: unknown) => void;
  
  /**
   * ═══════════════════════════════════════════════════════════
   * COMPONENT ORCHESTRATOR
   * ═══════════════════════════════════════════════════════════
   * 
   * Transforms FieldViewModels → ComponentViewModels
   * 
   * Responsibilities:
   * - Resolve label tokens to display strings
   * - Compute styles (containerStyle, labelStyle, etc.)
   * - Type-safe value conversions (string → number, etc.)
   * - Build callbacks (pre-bound to updateField)
   * - Pre-build nested structures (chips, radio options)
   * 
   * Does NOT:
   * - Access state directly (uses FieldViewModel)
   * - Know about other orchestrators (uses callbacks)
   * - Contain business logic (pure transformation)
   * - Evaluate visibility (already done by RenderOrchestrator)
   * 
   * Architecture:
   * - Private to MasterOrchestrator
   * - No horizontal dependencies
   * - Uses ComponentRegistry SSOT
   */
  export class ComponentOrchestrator {
    constructor(
      private readonly updateField: UpdateFieldCallback,
      private readonly styles: any  // Injected from useAppStyles
    ) {}
  
    /**
     * ═══════════════════════════════════════════════════════════
     * PUBLIC API
     * ═══════════════════════════════════════════════════════════
     */
  
    /**
     * Main entry point: FieldViewModel → ComponentViewModel
     * 
     * Uses exhaustive switch with COMPONENT_TYPES SSOT
     * TypeScript enforces all cases are handled
     */
    public buildComponentViewModel(
      fieldViewModel: FieldViewModel
    ): ComponentViewModel | null {
      // Safety check (should be pre-filtered, but defensive programming)
      if (!fieldViewModel.isVisible) {
        return null;
      }
  
      // Validate component requirements (options, etc.)
      const metadata = getComponentMetadata(fieldViewModel.componentType as ComponentType);
      if (metadata.requiresOptions && !fieldViewModel.options) {
        console.warn(`Component ${fieldViewModel.componentType} requires options but none provided for ${fieldViewModel.fieldId}`);
        return null;
      }
  
      // Exhaustive switch using SSOT constants
      switch (fieldViewModel.componentType) {
        case COMPONENT_TYPES.COUNTER:
          return this.buildCounter(fieldViewModel);
        
        case COMPONENT_TYPES.CURRENCY:
          return this.buildCurrency(fieldViewModel);
        
        case COMPONENT_TYPES.TEXT:
          return this.buildText(fieldViewModel);
        
        case COMPONENT_TYPES.NUMBER:
          return this.buildNumber(fieldViewModel);
        
        case COMPONENT_TYPES.CHIP_GROUP:
          return this.buildChipGroup(fieldViewModel);
        
        case COMPONENT_TYPES.CHIP_GROUP_MULTIPLE:
          return this.buildChipGroupMultiple(fieldViewModel);
        
        case COMPONENT_TYPES.RADIO:
          return this.buildRadio(fieldViewModel);
        
        case COMPONENT_TYPES.LABEL:
          return this.buildLabel(fieldViewModel);
        
        case COMPONENT_TYPES.DATE:
          return this.buildDate(fieldViewModel);
        
        default:
          // TypeScript exhaustiveness check - will error if case missing
          const exhaustiveCheck: never = fieldViewModel.componentType as never;
          console.warn(`Unknown component type: ${exhaustiveCheck}`);
          return null;
      }
    }
  
    /**
     * ═══════════════════════════════════════════════════════════
     * BUILD METHODS - One per component type
     * ═══════════════════════════════════════════════════════════
     */
  
    /**
     * BUILD COUNTER
     */
    private buildCounter(vm: FieldViewModel): CounterViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.COUNTER,
        label: labelFromToken(vm.labelToken),
        value: this.ensureNumber(vm.value),
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
        onUpdate: (value: number) => {
          this.updateField(vm.fieldId, value);
        },
      };
    }
  
    /**
     * BUILD CURRENCY
     */
    private buildCurrency(vm: FieldViewModel): CurrencyViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.CURRENCY,
        label: labelFromToken(vm.labelToken),
        value: this.ensureNumber(vm.value),
        placeholder: vm.placeholderToken 
          ? labelFromToken(vm.placeholderToken)
          : undefined,
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
        onUpdate: (value: number) => {
          this.updateField(vm.fieldId, value);
        },
      };
    }
  
    /**
     * BUILD TEXT
     */
    private buildText(vm: FieldViewModel): TextViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.TEXT,
        label: labelFromToken(vm.labelToken),
        value: this.ensureString(vm.value),
        placeholder: vm.placeholderToken
          ? labelFromToken(vm.placeholderToken)
          : undefined,
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
        onChangeText: (text: string) => {
          this.updateField(vm.fieldId, text);
        },
      };
    }
  
    /**
     * BUILD NUMBER
     */
    private buildNumber(vm: FieldViewModel): NumberViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.NUMBER,
        label: labelFromToken(vm.labelToken),
        value: this.ensureNumber(vm.value),
        placeholder: vm.placeholderToken
          ? labelFromToken(vm.placeholderToken)
          : undefined,
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
        onChangeText: (value: number) => {
          this.updateField(vm.fieldId, value);
        },
      };
    }
  
    /**
     * BUILD CHIP GROUP (single select)
     * Pre-builds all chips with styles and callbacks
     */
    private buildChipGroup(vm: FieldViewModel): ChipGroupViewModel {
      const options = (vm.options ?? []) as readonly string[];
      const currentValue = vm.value as string | undefined;
  
      // Pre-build all chips
      const chips = options.map((option) => 
        this.buildChip(option, currentValue === option, () => {
          this.updateField(vm.fieldId, option);
        })
      );
  
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.CHIP_GROUP,
        label: labelFromToken(vm.labelToken),
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        chipContainerStyle: this.styles.chipContainer as ViewStyle,
        chips,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
      };
    }
  
    /**
     * BUILD CHIP GROUP MULTIPLE (multi select)
     * Includes toggle logic in callbacks
     */
    private buildChipGroupMultiple(vm: FieldViewModel): ChipGroupViewModel {
      const options = (vm.options ?? []) as readonly string[];
      const currentValues = Array.isArray(vm.value) ? vm.value : [];
  
      const chips = options.map((option) => {
        const isSelected = currentValues.includes(option);
        
        return this.buildChip(option, isSelected, () => {
          // Toggle logic
          const newValues = isSelected
            ? currentValues.filter((v) => v !== option)
            : [...currentValues, option];
          this.updateField(vm.fieldId, newValues);
        });
      });
  
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.CHIP_GROUP_MULTIPLE,
        label: labelFromToken(vm.labelToken),
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        chipContainerStyle: this.styles.chipContainer as ViewStyle,
        chips,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
      };
    }
  
    /**
     * BUILD INDIVIDUAL CHIP
     * All style decisions made here
     */
    private buildChip(
      label: string,
      selected: boolean,
      onPress: () => void
    ): ChipViewModel {
      // Style logic - all conditionals resolved here
      const containerStyle = [
        this.styles.chip,
        selected && this.styles.chipSelected,
      ] as ViewStyle;
  
      const textStyle = [
        this.styles.chipText,
        selected && this.styles.chipTextSelected,
      ] as TextStyle;
  
      return {
        label,
        selected,
        containerStyle,
        textStyle,
        onPress,
        accessibilityLabel: label,
        accessibilityState: { selected },
      };
    }
  
    /**
     * BUILD RADIO (vertical single select)
     */
    private buildRadio(vm: FieldViewModel): RadioViewModel {
      const options = (vm.options ?? []) as readonly string[];
      const currentValue = vm.value as string | undefined;
  
      const radioOptions: RadioOptionViewModel[] = options.map((option) => ({
        label: option,
        value: option,
        selected: currentValue === option,
        onSelect: () => {
          this.updateField(vm.fieldId, option);
        },
      }));
  
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.RADIO,
        label: labelFromToken(vm.labelToken),
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        radioContainerStyle: this.styles.radioContainer as ViewStyle,
        options: radioOptions,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
      };
    }
  
    /**
     * BUILD LABEL (read-only, derived value)
     */
    private buildLabel(vm: FieldViewModel): LabelViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.LABEL,
        label: labelFromToken(vm.labelToken),
        value: String(vm.value ?? ''),
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        valueStyle: this.styles.derivedValue as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
      };
    }
  
    /**
     * BUILD DATE
     */
    private buildDate(vm: FieldViewModel): DateViewModel {
      return {
        fieldId: vm.fieldId,
        componentType: COMPONENT_TYPES.DATE,
        label: labelFromToken(vm.labelToken),
        value: vm.value instanceof Date ? vm.value : undefined,
        containerStyle: this.styles.fieldContainer as ViewStyle,
        labelStyle: this.styles.label as TextStyle,
        error: vm.error,
        errorStyle: this.styles.errorText as TextStyle,
        onChange: (date: Date) => {
          this.updateField(vm.fieldId, date);
        },
      };
    }
  
    /**
     * ═══════════════════════════════════════════════════════════
     * HELPER METHODS
     * ═══════════════════════════════════════════════════════════
     */
  
    /**
     * Type-safe conversion to number
     */
    private ensureNumber(value: unknown): number {
      if (typeof value === 'number' && !isNaN(value)) {
        return value;
      }
      return 0;
    }
  
    /**
     * Type-safe conversion to string
     */
    private ensureString(value: unknown): string {
      if (typeof value === 'string') {
        return value;
      }
      return '';
    }
  }