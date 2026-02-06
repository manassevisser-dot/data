// src/domain/rules/fieldVisibility.ts
//
// FINALE VERSIE - Past bij soft-schema architectuur
// Visibility rules lezen uit echte state structure (members[].categories)
// NIET uit FIELD_REGISTRY
import { isAowEligible } from './aowRules';

export interface VisibilityContext {
  getValue: (fieldId: string) => unknown;
}

export const fieldVisibilityRules = {
  /**
   * ==================== BESTAANDE RULES ====================
   */
  
  aantalVolwassen: (ctx: VisibilityContext): boolean => {
    const aantalMensen = (ctx.getValue('aantalMensen') as number | undefined) ?? 0;
    return aantalMensen > 0;
  },
  
  kinderenLabel: (ctx: VisibilityContext): boolean => {
    const n = (ctx.getValue('aantalMensen') as number | undefined) ?? 0;
    const m = (ctx.getValue('aantalVolwassen') as number | undefined) ?? 0;
    return n > m;
  },
  
  car_repeater: (ctx: VisibilityContext): boolean => {
    const autoCount = ctx.getValue('autoCount') as string | undefined;
    return autoCount !== 'Geen' && autoCount !== undefined && autoCount !== '';
  },
  
  member_income_details: (_ctx: VisibilityContext, memberId?: string): boolean => {
    return typeof memberId === 'string' && memberId !== '';
  },
  
  /**
   * ==================== HOUSEHOLD RULES ====================
   */
  
  showMaritalStatus: (ctx: VisibilityContext): boolean => {
    const aantalVolwassen = (ctx.getValue('aantalVolwassen') as number | undefined) ?? 0;
    return aantalVolwassen > 1;
  },
  
  showPostcode: (ctx: VisibilityContext): boolean => {
    const aantalVolwassen = (ctx.getValue('aantalVolwassen') as number | undefined) ?? 0;
    return aantalVolwassen <= 1;
  },
  
  /**
   * ==================== INCOME / BENEFIT RULES ====================
   */
  
  showHuurtoeslag: (ctx: VisibilityContext): boolean => {
    const woningType = ctx.getValue('woningType') as string | undefined;
    return woningType === 'Huur';
  },
  
  showKgb: (ctx: VisibilityContext): boolean => {
    const aantalMensen = (ctx.getValue('aantalMensen') as number | undefined) ?? 0;
    const aantalVolwassen = (ctx.getValue('aantalVolwassen') as number | undefined) ?? 0;
    return (aantalMensen - aantalVolwassen) > 0;
  },
  
  /**
   * GEFIXED: Werkt nu met echte member structure
   * Members worden opgeslagen als: household.members[{categories: {werk: true, ...}}]
   * Niet meer via dynamische income_{memberId} keys
   */
  hasWorkSelected: (ctx: VisibilityContext, memberId?: string): boolean => {
    if (memberId === undefined || memberId === '') {
      return false;
    }
    
    const member = getMemberFromContext(ctx, memberId);
    if (member === null) {
      return false;
    }
    
    const categories = member.categories as { werk?: boolean } | undefined;
    return categories?.werk === true;
  },
  
  hasBenefitSelected: (ctx: VisibilityContext, memberId?: string): boolean => {
    if (memberId === undefined || memberId === '') {
      return false;
    }
    
    const member = getMemberFromContext(ctx, memberId);
    if (member === null) {
      return false;
    }
    
    const categories = member.categories as { uitkering?: boolean } | undefined;
    return categories?.uitkering === true;
  },
  
  isPensionado: (ctx: VisibilityContext, memberId?: string): boolean => {
    if (memberId === undefined || memberId === '') {
      return false;
    }

    const member = getMemberFromContext(ctx, memberId);
    
    // Check of de member bestaat en of de leeftijd een getal is
    if (member !== null && typeof member.leeftijd === 'number') {
      // HIER wordt de check uit aowRules.ts eindelijk uitgevoerd
      return isAowEligible(member.leeftijd);
    }

    return false;
  },

  /**
   * ==================== HOUSING RULES ====================
   */
  
  isWoningHuur: (ctx: VisibilityContext): boolean => {
    const woningType = ctx.getValue('woningType') as string | undefined;
    return woningType === 'Huur';
  },
  
  isWoningKoop: (ctx: VisibilityContext): boolean => {
    const woningType = ctx.getValue('woningType') as string | undefined;
    return woningType === 'Koop';
  },
  
  isWoningKamer: (ctx: VisibilityContext): boolean => {
    const woningType = ctx.getValue('woningType') as string | undefined;
    return woningType === 'Kamer';
  },
  
  /**
   * ==================== CAR RULES ====================
   */
  
  hasCars: (ctx: VisibilityContext): boolean => {
    const autoCount = ctx.getValue('autoCount') as string | undefined;
    return autoCount !== 'Geen' && autoCount !== undefined && autoCount !== '';
  },
};

/**
 * Helper: Haal member op uit household.members array
 * Werkt met beide naming conventions: fieldId en memberId
 */
function getMemberFromContext(
  ctx: VisibilityContext, 
  memberId: string
): Record<string, unknown> | null {
  const household = ctx.getValue('household') as { members?: unknown[] } | undefined;
  
  if (household === undefined || !Array.isArray(household.members)) {
    return null;
  }
  
  const found = household.members.find((m: unknown) => {
    const member = m as { fieldId?: string; memberId?: string };
    return member.fieldId === memberId || member.memberId === memberId;
  });
  
  if (found === undefined) {
    return null;
  }
  
  return found as Record<string, unknown>;
}