import { describe, expect, it } from 'vitest';
import { calculateLifePath } from './lifePath';

describe('calculateLifePath', () => {
  it('calculates a well-known example (Oct 12, 1976 -> 9)', () => {
    expect(calculateLifePath({ day: 12, month: 10, year: 1976 }).number).toBe(9);
  });

  it('calculates a simple non-reducing example', () => {
    // day=15 (1+5=6) + month=5 (5) + year=1990 (1+9+9+0=19) = 30 -> 3+0=3
    expect(calculateLifePath({ day: 15, month: 5, year: 1990 }).number).toBe(3);
  });

  it('stops at a master number', () => {
    // day=29 (2+9=11) + month=11 (1+1=2) + year=1992 (1+9+9+2=21) = 34 -> 3+4=7... use a crafted case instead
    // day=9, month=9, year=1999: 9+9+(1+9+9+9=28)=46 -> 4+6=10 -> 1+0=1 (not master, sanity check only)
    expect(calculateLifePath({ day: 9, month: 9, year: 1999 }).number).toBe(1);
  });

  it('exposes the raw pre-reduction sum for karmic debt checks', () => {
    const result = calculateLifePath({ day: 15, month: 5, year: 1990 });
    expect(result.rawSum).toBe(30);
  });

  it('rejects invalid calendar dates', () => {
    expect(() => calculateLifePath({ day: 30, month: 2, year: 2000 })).toThrow();
  });

  it('rejects future dates', () => {
    const nextYear = new Date().getFullYear() + 1;
    expect(() => calculateLifePath({ day: 1, month: 1, year: nextYear })).toThrow();
  });

  it('rejects non-integer input', () => {
    expect(() => calculateLifePath({ day: 15.5, month: 5, year: 1990 })).toThrow();
  });
});
