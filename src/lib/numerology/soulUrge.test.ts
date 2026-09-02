import { describe, expect, it } from 'vitest';
import { calculateSoulUrge } from './soulUrge';

describe('calculateSoulUrge', () => {
  it('sums vowel values and reduces (e.g. "Maria" = A1+I9+A1=11, master)', () => {
    expect(calculateSoulUrge('Maria')).toBe(11);
  });

  it('is case-insensitive and ignores non-letter characters', () => {
    expect(calculateSoulUrge('maria')).toBe(calculateSoulUrge('MARIA'));
    expect(calculateSoulUrge("O'Brien-Smith")).toBe(calculateSoulUrge('OBrienSmith'));
  });

  it('treats Y as a vowel', () => {
    // "Y" alone -> value 7
    expect(calculateSoulUrge('Y')).toBe(7);
  });

  it('reduces a non-master sum to a single digit', () => {
    // "Bob": O=6 -> single vowel, value 6
    expect(calculateSoulUrge('Bob')).toBe(6);
  });

  it('throws when the name has no vowels', () => {
    expect(() => calculateSoulUrge('Bcdfg')).toThrow();
  });

  it('throws when the input is empty or has no letters', () => {
    expect(() => calculateSoulUrge('   ')).toThrow();
    expect(() => calculateSoulUrge('123')).toThrow();
  });
});
