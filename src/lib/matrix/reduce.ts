// Ladini-style: keep values 1..22; if >22, sum digits until ≤22.
export const toArcana = (n: number): number => {
  let x = Math.abs(n);
  while (x > 22) x = String(x).split('').reduce((s, d) => s + +d, 0);
  return x === 0 ? 22 : x;
};

// Sums the decimal digits of a birth year, then reduces to an arcana.
export const reduceYear = (year: number): number => {
  const digitSum = String(Math.abs(year))
    .split('')
    .reduce((s, d) => s + +d, 0);
  return toArcana(digitSum);
};
