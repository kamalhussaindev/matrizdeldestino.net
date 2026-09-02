import { reduceNumber, sumDigits } from './reduce';

// Personal year traditionally recognises 11 and 22 as master years, but not
// 33 (a personal year total this large from day + month + a 4-digit year
// essentially never lands on 33 before reducing further anyway).
const PERSONAL_YEAR_MASTERS = [11, 22] as const;

export interface PersonalYearInput {
  day: number;
  month: number;
  /** The year the personal year is being calculated for (e.g. 2026). */
  targetYear: number;
}

export function calculatePersonalYear({ day, month, targetYear }: PersonalYearInput): number {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(targetYear)) {
    throw new Error('Date of birth must contain whole numbers.');
  }

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    throw new Error('Enter a valid day and month.');
  }

  const rawSum = sumDigits(day) + sumDigits(month) + sumDigits(targetYear);
  return reduceNumber(rawSum, PERSONAL_YEAR_MASTERS);
}
