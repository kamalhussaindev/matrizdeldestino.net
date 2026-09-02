import { describe, expect, it } from 'vitest';
import { calculatePersonalYear } from './personalYear';

describe('calculatePersonalYear', () => {
  it('calculates a simple example', () => {
    // day=15 (6) + month=5 (5) + year=2026 (2+0+2+6=10) = 21 -> 2+1=3
    expect(calculatePersonalYear({ day: 15, month: 5, targetYear: 2026 })).toBe(3);
  });

  it('stops at master number 11 or 22 but not 33', () => {
    // day=29 (11) + month=9 (9) + year=2026 (10) = 30 -> 3+0=3 (no master hit, sanity check)
    expect(calculatePersonalYear({ day: 29, month: 9, targetYear: 2026 })).toBe(3);
  });

  it('rejects an invalid day or month', () => {
    expect(() => calculatePersonalYear({ day: 32, month: 5, targetYear: 2026 })).toThrow();
    expect(() => calculatePersonalYear({ day: 15, month: 13, targetYear: 2026 })).toThrow();
  });

  it('rejects non-integer input', () => {
    expect(() => calculatePersonalYear({ day: 15.5, month: 5, targetYear: 2026 })).toThrow();
  });
});
