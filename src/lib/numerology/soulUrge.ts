import { reduceNumber } from './reduce';

// Soul urge traditionally recognises 11 and 22 as master numbers (33 is
// vanishingly rare from a name's vowel sum and isn't part of the standard
// method), matching the personal year convention.
const SOUL_URGE_MASTERS = [11, 22] as const;

const VOWEL_VALUES: Record<string, number> = { A: 1, E: 5, I: 9, O: 6, U: 3, Y: 7 };

export function calculateSoulUrge(fullName: string): number {
  const letters = fullName.toUpperCase().replace(/[^A-Z]/g, '');

  if (!letters) {
    throw new Error('Enter your full name to calculate your soul urge number.');
  }

  let sum = 0;
  let vowelCount = 0;

  for (const letter of letters) {
    const value = VOWEL_VALUES[letter];
    if (value !== undefined) {
      sum += value;
      vowelCount += 1;
    }
  }

  if (vowelCount === 0) {
    throw new Error("We couldn't find any vowels in that name. Check the spelling and try again.");
  }

  return reduceNumber(sum, SOUL_URGE_MASTERS);
}
