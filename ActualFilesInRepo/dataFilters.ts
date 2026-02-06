// src/domain/rules/dataFilters.ts
import { Member } from '@core/types/core';
import { VisibilityContext } from './fieldVisibility';

/**
 * ADR-06: Defensive Programming
 * Filterregels voor dynamische formulieronderdelen.
 */
export const dataFilterRules = {
  /**
   * Business Rule: "Income repeater iterates over household members"
   * Zorgt ervoor dat inkomstenformulieren worden gegenereerd voor elk lid in de staat.
   */
  member_income_repeater: (ctx: VisibilityContext): Member[] => {
    const members = ctx.getValue('members');

    // FIX: Expliciete type-guard in plaats van 'as any[] || []'
    if (Array.isArray(members)) {
      return members as Member[];
    }

    return [];
  }
};