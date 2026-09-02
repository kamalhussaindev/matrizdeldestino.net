// Standard (Pythagorean) numerology reduction: sum digits repeatedly until a
// single digit remains, unless an intermediate sum lands on a recognised
// master number, in which case reduction stops there. This is a distinct
// rule set from lib/matrix/reduce.ts (which reduces to the 1..22 arcana
// range for the Matriz del Destino) — kept separate on purpose.
export const sumDigits = (n: number): number =>
  String(Math.abs(Math.trunc(n)))
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);

// masterNumbers defaults to the full 11/22/33 set (life path, soul urge use
// subsets of this via the second argument — see each calculator module).
export const reduceNumber = (n: number, masterNumbers: readonly number[] = [11, 22, 33]): number => {
  const masters = new Set(masterNumbers);
  let x = Math.abs(Math.trunc(n));
  while (x > 9 && !masters.has(x)) {
    x = sumDigits(x);
  }
  return x;
};
