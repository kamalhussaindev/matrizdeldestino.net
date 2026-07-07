export type Arcana = number; // 1..22

export interface MatrixInput {
  day: number;
  month: number;
  year: number;
  name?: string;
}

/**
 * Every lettered point from the reference implementation
 * (`matriz-del-destino-calculadora`), kept 1:1 for parity so the whole
 * formula graph stays inspectable/debuggable, not just the named subset
 * BUILD-SPEC.md's MatrixPositions exposes.
 */
export interface RawPoints {
  a: Arcana;
  b: Arcana;
  c: Arcana;
  d: Arcana;
  e: Arcana;
  f: Arcana;
  g: Arcana;
  h: Arcana;
  i: Arcana;
  j: Arcana;
  k: Arcana;
  l: Arcana;
  m: Arcana;
  n: Arcana;
  o: Arcana;
  p: Arcana;
  q: Arcana;
  r: Arcana;
  s: Arcana;
  t: Arcana;
  u: Arcana;
  v: Arcana;
  w: Arcana;
  x: Arcana;
  f1: Arcana;
  f2: Arcana;
  g1: Arcana;
  g2: Arcana;
  h1: Arcana;
  h2: Arcana;
  i1: Arcana;
  i2: Arcana;
}

export interface MatrixPurposes {
  personal: Arcana;
  social: Arcana;
  general: Arcana;
  planetary: Arcana;
  sky: Arcana;
  earth: Arcana;
  male: Arcana;
  female: Arcana;
}

export interface ChakraPosition {
  name: string;
  physical: Arcana;
  energy: Arcana;
  emotion: Arcana;
}

export interface MatrixPositions {
  // central octagram
  A: Arcana; // día (personalidad / carácter)
  B: Arcana; // mes (talentos)
  C: Arcana; // año (energía generacional)
  D: Arcana; // A+B+C (misión terrenal)
  E: Arcana; // A+B+C+D (comfort / propósito central)
  // líneas
  masculine: Arcana[]; // línea paterna
  feminine: Arcana[]; // línea materna
  karmicTail: Arcana[]; // cola kármica
  money: Arcana; // línea del dinero / prosperidad
  chakras: ChakraPosition[];
  purposes: MatrixPurposes;
  // Full parity set with the reference implementation — see positions.ts
  // for which fields above are verified vs. best-effort mappings onto it.
  raw: RawPoints;
}

export interface MatrixResult {
  input: MatrixInput;
  positions: MatrixPositions;
  central: Arcana;
}
