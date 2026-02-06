import { ValueProvider } from '../interfaces/ValueProvider';
import { isNumeric } from './typeGuards';

export type Condition = {
  field: string;
  operator: 'eq' | 'neq' | 'gt' | 'lt' | 'truthy';
  value?: unknown;
};



function evaluateNumeric(val: unknown, limit: unknown, op: 'gt' | 'lt'): boolean {
  if (!isNumeric(val) || !isNumeric(limit)) return false;
  const nVal = Number(val);
  const nLim = Number(limit);
  return op === 'gt' ? nVal > nLim : nVal < nLim;
}

export function evaluateVisibilityCondition(
  condition: Condition | null | undefined,
  provider: ValueProvider
): boolean {
  // Nu een geldige check voor de compiler
  if (condition === null || condition === undefined) {
    return false;
  }
  
  if (condition.field === '') {
    return false;
  }

  const value = provider.getValue(condition.field);
  
  if (value === undefined) {
    return false;
  }

  switch (condition.operator) {
    case 'truthy': return Boolean(value);
    case 'eq': return value === condition.value;
    case 'neq': return value !== condition.value;
    case 'gt': return evaluateNumeric(value, condition.value, 'gt');
    case 'lt': return evaluateNumeric(value, condition.value, 'lt');
    default: return false;
  }
}