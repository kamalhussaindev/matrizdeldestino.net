import { describe, expect, it } from 'vitest';
import { calculate } from './calculate';
import type { RawPoints, MatrixPurposes } from './types';

/**
 * Golden fixtures generated directly from the reference implementation's
 * exact algorithm (`matriz-del-destino-calculadora`, core.py) for the birth
 * dates below — see Milestone 2's plan for provenance. These pin down the
 * entire A–X / F1-F2-G1-G2-H1-H2-I1-I2 formula graph and all 8 purposes,
 * not just A–E.
 */
const fixtures: {
  input: { day: number; month: number; year: number };
  raw: RawPoints;
  purposes: MatrixPurposes;
}[] = [
  {
    input: { day: 15, month: 5, year: 1990 },
    raw: {
      a: 15, b: 5, c: 19, d: 12, e: 6, f: 20, g: 6, h: 9, i: 4, j: 18, k: 7,
      l: 7, m: 14, n: 7, o: 9, p: 16, q: 8, r: 3, s: 21, t: 11, u: 12, v: 18,
      w: 9, x: 17, f1: 7, f2: 5, g1: 6, g2: 18, h1: 3, h2: 21, i1: 20, i2: 16,
    },
    purposes: {
      sky: 17, earth: 7, personal: 6, female: 15, male: 6, social: 21,
      general: 9, planetary: 3,
    },
  },
  {
    input: { day: 1, month: 1, year: 2000 },
    raw: {
      a: 1, b: 1, c: 2, d: 4, e: 8, f: 2, g: 3, h: 5, i: 6, j: 12, k: 7,
      l: 22, m: 5, n: 10, o: 10, p: 10, q: 12, r: 16, s: 9, t: 9, u: 16,
      v: 6, w: 17, x: 17, f1: 20, f2: 18, g1: 22, g2: 19, h1: 8, h2: 21,
      i1: 10, i2: 22,
    },
    purposes: {
      sky: 5, earth: 3, personal: 8, female: 8, male: 8, social: 16,
      general: 6, planetary: 22,
    },
  },
  {
    // Leap day
    input: { day: 29, month: 2, year: 2000 },
    raw: {
      a: 11, b: 2, c: 2, d: 15, e: 3, f: 13, g: 4, h: 8, i: 17, j: 18, k: 5,
      l: 5, m: 10, n: 5, o: 7, p: 7, q: 7, r: 6, s: 14, t: 5, u: 6, v: 9,
      w: 17, x: 8, f1: 5, f2: 19, g1: 14, g2: 10, h1: 22, h2: 14, i1: 22,
      i2: 5,
    },
    purposes: {
      sky: 17, earth: 13, personal: 3, female: 12, male: 3, social: 15,
      general: 18, planetary: 6,
    },
  },
  {
    // Year boundary
    input: { day: 31, month: 12, year: 1999 },
    raw: {
      a: 4, b: 12, c: 10, d: 8, e: 7, f: 16, g: 22, h: 12, i: 18, j: 15,
      k: 20, l: 5, m: 22, n: 17, o: 15, p: 4, q: 9, r: 5, s: 11, t: 19,
      u: 14, v: 21, w: 18, x: 8, f1: 19, f2: 3, g1: 4, g2: 9, h1: 20,
      h2: 8, i1: 5, i2: 5,
    },
    purposes: {
      sky: 20, earth: 14, personal: 7, female: 7, male: 7, social: 14,
      general: 21, planetary: 8,
    },
  },
  {
    // Day reduces to exactly 22
    input: { day: 22, month: 11, year: 1985 },
    raw: {
      a: 22, b: 11, c: 5, d: 11, e: 13, f: 6, g: 16, h: 6, i: 16, j: 6,
      k: 12, l: 6, m: 6, n: 18, o: 3, p: 17, q: 5, r: 17, s: 8, t: 6,
      u: 8, v: 21, w: 21, x: 19, f1: 20, f2: 14, g1: 22, g2: 6, h1: 20,
      h2: 14, i1: 22, i2: 6,
    },
    purposes: {
      sky: 22, earth: 9, personal: 4, female: 22, male: 22, social: 8,
      general: 12, planetary: 20,
    },
  },
  {
    input: { day: 9, month: 9, year: 1999 },
    raw: {
      a: 9, b: 9, c: 10, d: 10, e: 11, f: 18, g: 19, h: 19, i: 20, j: 21,
      k: 9, l: 6, m: 9, n: 21, o: 11, p: 11, q: 4, r: 4, s: 20, t: 20,
      u: 13, v: 6, w: 4, x: 4, f1: 22, f2: 4, g1: 6, g2: 5, h1: 6, h2: 5,
      i1: 8, i2: 6,
    },
    purposes: {
      sky: 19, earth: 19, personal: 11, female: 11, male: 11, social: 22,
      general: 6, planetary: 10,
    },
  },
  {
    input: { day: 3, month: 7, year: 2015 },
    raw: {
      a: 3, b: 7, c: 8, d: 18, e: 9, f: 10, g: 15, h: 21, i: 8, j: 9,
      k: 17, l: 8, m: 7, n: 17, o: 15, p: 5, q: 7, r: 9, s: 12, t: 16,
      u: 9, v: 18, w: 21, x: 7, f1: 11, f2: 19, g1: 21, g2: 6, h1: 6,
      h2: 3, i1: 7, i2: 17,
    },
    purposes: {
      sky: 7, earth: 11, personal: 18, female: 9, male: 18, social: 9,
      general: 9, planetary: 18,
    },
  },
];

describe('calculate — golden fixtures', () => {
  for (const { input, raw, purposes } of fixtures) {
    const label = `${input.year}-${String(input.month).padStart(2, '0')}-${String(input.day).padStart(2, '0')}`;

    it(`matches the reference implementation for ${label}`, () => {
      const result = calculate(input);

      expect(result.positions.raw).toEqual(raw);
      expect(result.positions.purposes).toEqual(purposes);
      expect(result.positions.A).toBe(raw.a);
      expect(result.positions.E).toBe(raw.e);
      expect(result.central).toBe(raw.e);
    });
  }
});

describe('calculate — validation', () => {
  it('accepts Feb 29 on a leap year', () => {
    expect(() => calculate({ day: 29, month: 2, year: 2000 })).not.toThrow();
  });

  it('rejects Feb 29 on a non-leap year', () => {
    expect(() => calculate({ day: 29, month: 2, year: 1999 })).toThrow();
  });

  it('rejects Feb 30', () => {
    expect(() => calculate({ day: 30, month: 2, year: 2000 })).toThrow();
  });

  it('rejects month 13', () => {
    expect(() => calculate({ day: 1, month: 13, year: 2000 })).toThrow();
  });

  it('rejects month 0', () => {
    expect(() => calculate({ day: 1, month: 0, year: 2000 })).toThrow();
  });

  it('rejects a future date', () => {
    const future = new Date();
    future.setFullYear(future.getFullYear() + 1);
    expect(() =>
      calculate({ day: future.getDate(), month: future.getMonth() + 1, year: future.getFullYear() }),
    ).toThrow();
  });

  it('rejects non-integer input', () => {
    expect(() => calculate({ day: 15.5, month: 5, year: 1990 })).toThrow();
  });

  it('produces a value of exactly 22 for a known date (day-22 boundary)', () => {
    const result = calculate({ day: 22, month: 11, year: 1985 });
    expect(result.positions.A).toBe(22);
  });
});
