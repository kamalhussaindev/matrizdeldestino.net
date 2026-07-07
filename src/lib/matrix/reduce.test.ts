import { describe, expect, it } from 'vitest';
import { reduceYear, toArcana } from './reduce';

describe('toArcana', () => {
  it('passes values ≤22 through unchanged', () => {
    expect(toArcana(1)).toBe(1);
    expect(toArcana(15)).toBe(15);
    expect(toArcana(22)).toBe(22);
  });

  it('reduces values >22 by summing digits', () => {
    expect(toArcana(23)).toBe(5); // 2+3
    expect(toArcana(29)).toBe(11); // 2+9
    expect(toArcana(44)).toBe(8); // 4+4
  });

  it('loops until the result is ≤22 for large sums', () => {
    expect(toArcana(199)).toBe(19); // 1+9+9=19
    expect(toArcana(999)).toBe(9); // 9+9+9=27 -> 2+7=9
  });

  it('maps 0 to 22', () => {
    expect(toArcana(0)).toBe(22);
  });
});

describe('reduceYear', () => {
  it('sums year digits then reduces', () => {
    expect(reduceYear(1990)).toBe(19); // 1+9+9+0=19
    expect(reduceYear(2000)).toBe(2); // 2+0+0+0=2
    expect(reduceYear(1985)).toBe(5); // 1+9+8+5=23 -> 2+3=5
  });
});
