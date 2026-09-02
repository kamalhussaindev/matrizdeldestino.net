import { describe, expect, it } from 'vitest';
import { reduceNumber, sumDigits } from './reduce';

describe('sumDigits', () => {
  it('sums the decimal digits of a number', () => {
    expect(sumDigits(1990)).toBe(19); // 1+9+9+0
    expect(sumDigits(5)).toBe(5);
    expect(sumDigits(0)).toBe(0);
  });
});

describe('reduceNumber', () => {
  it('reduces to a single digit when no master number is hit', () => {
    expect(reduceNumber(27)).toBe(9); // 2+7=9
    expect(reduceNumber(30)).toBe(3); // 3+0=3
  });

  it('stops at a master number reached mid-reduction', () => {
    expect(reduceNumber(29)).toBe(11); // 2+9=11, stop
  });

  it('keeps reducing through an intermediate value that is not a master number', () => {
    expect(reduceNumber(58)).toBe(4); // 5+8=13 (not master) -> 1+3=4
  });

  it('stops immediately if the input itself is a master number', () => {
    expect(reduceNumber(11)).toBe(11);
    expect(reduceNumber(22)).toBe(22);
    expect(reduceNumber(33)).toBe(33);
  });

  it('respects a custom master-number set', () => {
    // With only 11/22 recognised, 33 should keep reducing to 6.
    expect(reduceNumber(33, [11, 22])).toBe(6);
    // 44 has no master status here either, reduces to 8.
    expect(reduceNumber(44, [11, 22])).toBe(8);
  });

  it('handles single-digit input unchanged', () => {
    expect(reduceNumber(7)).toBe(7);
  });
});
