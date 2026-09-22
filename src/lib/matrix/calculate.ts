import { reduceYear, toArcana } from './reduce';
import {
  buildChakras,
  buildFeminineLine,
  buildKarmicTail,
  buildMasculineLine,
  buildMoneyPoint,
  buildPurposes,
  buildRawPoints,
} from './positions';
import type { MatrixInput, MatrixResult } from './types';

const isValidCalendarDate = (day: number, month: number, year: number): boolean => {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
};

export function calculate(input: MatrixInput): MatrixResult {
  const { day, month, year } = input;

  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    throw new Error('La fecha de nacimiento debe contener números enteros.');
  }

  if (!isValidCalendarDate(day, month, year)) {
    throw new Error('La fecha de nacimiento no es válida.');
  }

  const birthDate = new Date(year, month - 1, day);
  if (birthDate.getTime() > Date.now()) {
    throw new Error('La fecha de nacimiento no puede estar en el futuro.');
  }

  const a = toArcana(day);
  const b = month; // 1..12, already ≤22
  const c = reduceYear(year);

  const raw = buildRawPoints(a, b, c);
  const purposes = buildPurposes(raw);

  const positions = {
    A: raw.a,
    B: raw.b,
    C: raw.c,
    D: raw.d,
    E: raw.e,
    masculine: buildMasculineLine(raw),
    feminine: buildFeminineLine(raw),
    karmicTail: buildKarmicTail(raw),
    money: buildMoneyPoint(raw),
    chakras: buildChakras(raw),
    purposes,
    raw,
  };

  return {
    input,
    positions,
    central: raw.e,
  };
}
