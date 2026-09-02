import { calculateLifePath, type LifePathInput } from './lifePath';

export const KARMIC_DEBT_NUMBERS = [13, 14, 16, 19] as const;
export type KarmicDebtNumber = (typeof KARMIC_DEBT_NUMBERS)[number];

export type KarmicDebtSource = 'day' | 'lifePath';

export interface KarmicDebtEntry {
  number: KarmicDebtNumber;
  sources: KarmicDebtSource[];
}

function isKarmicDebtNumber(n: number): n is KarmicDebtNumber {
  return (KARMIC_DEBT_NUMBERS as readonly number[]).includes(n);
}

export function calculateKarmicDebt(input: LifePathInput): KarmicDebtEntry[] {
  const { day } = input;
  const { rawSum } = calculateLifePath(input);

  const found = new Map<KarmicDebtNumber, KarmicDebtSource[]>();

  if (isKarmicDebtNumber(day)) {
    found.set(day, [...(found.get(day) ?? []), 'day']);
  }

  if (isKarmicDebtNumber(rawSum)) {
    found.set(rawSum, [...(found.get(rawSum) ?? []), 'lifePath']);
  }

  return [...found.entries()]
    .sort(([a], [b]) => a - b)
    .map(([number, sources]) => ({ number, sources }));
}
