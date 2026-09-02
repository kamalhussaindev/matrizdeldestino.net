import { reduceNumber, sumDigits } from './reduce';

export interface LifePathInput {
  day: number;
  month: number;
  year: number;
}

const isValidCalendarDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
};

export interface LifePathResult {
  number: number;
  /** The raw digit sum before the final reduction loop — used by the karmic debt calculator. */
  rawSum: number;
}

export function calculateLifePath({ day, month, year }: LifePathInput): LifePathResult {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    throw new Error('Date of birth must contain whole numbers.');
  }

  if (!isValidCalendarDate(day, month, year)) {
    throw new Error('Date of birth is not valid.');
  }

  const birthDate = new Date(year, month - 1, day);
  if (birthDate.getTime() > Date.now()) {
    throw new Error('Date of birth cannot be in the future.');
  }

  const rawSum = sumDigits(day) + sumDigits(month) + sumDigits(year);

  return {
    number: reduceNumber(rawSum),
    rawSum,
  };
}
