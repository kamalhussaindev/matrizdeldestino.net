import { toArcana } from './reduce';
import type { Arcana, ChakraPosition, MatrixPurposes, RawPoints } from './types';

/**
 * Mirrors the reference implementation's formula graph exactly
 * (`matriz-del-destino-calculadora`, core.py) for A–X and the F/G/H/I
 * 1/2-chains. Verified against golden fixtures in calculate.test.ts.
 */
export function buildRawPoints(a: Arcana, b: Arcana, c: Arcana): RawPoints {
  const d = toArcana(a + b + c);
  const e = toArcana(a + b + c + d);

  const f = toArcana(a + b);
  const g = toArcana(b + c);
  const h = toArcana(d + a);
  const i = toArcana(c + d);

  const j = toArcana(d + e);
  const n = toArcana(c + e);
  const l = toArcana(j + n);
  const m = toArcana(l + n);
  const k = toArcana(j + l);

  const q = toArcana(n + c);
  const r = toArcana(j + d);
  const s = toArcana(a + e);
  const t = toArcana(b + e);

  const o = toArcana(a + s);
  const p = toArcana(b + t);

  const u = toArcana(f + g + h + i);
  const v = toArcana(e + u);
  const w = toArcana(s + e);
  const x = toArcana(t + e);

  const f2 = toArcana(f + u);
  const f1 = toArcana(f + f2);
  const g2 = toArcana(g + u);
  const g1 = toArcana(g + g2);
  const i2 = toArcana(i + u);
  const i1 = toArcana(i + i2);
  const h2 = toArcana(h + u);
  const h1 = toArcana(h + h2);

  return {
    a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x,
    f1, f2, g1, g2, h1, h2, i1, i2,
  };
}

/** Verified against the reference implementation's `purposes` output. */
export function buildPurposes(raw: RawPoints): MatrixPurposes {
  const sky = toArcana(raw.b + raw.d);
  const earth = toArcana(raw.a + raw.c);
  const personal = toArcana(sky + earth);

  const female = toArcana(raw.g + raw.h);
  const male = toArcana(raw.f + raw.i);
  const social = toArcana(female + male);

  const general = toArcana(personal + social);
  const planetary = toArcana(social + general);

  return { personal, social, general, planetary, sky, earth, male, female };
}

/**
 * UNVERIFIED (best-effort mapping): the reference package exposes no
 * "karmic tail" field. This is corroborated only loosely by a secondary
 * source (destinynums.com) describing it as [individual karma, inherited
 * karma, synthesis] = [D, M, reduce(D+M)]. D and M are verified raw points;
 * the synthesis value is our own derivation, not package-provided.
 */
export function buildKarmicTail(raw: RawPoints): Arcana[] {
  return [raw.d, raw.m, toArcana(raw.d + raw.m)];
}

/**
 * UNVERIFIED (best-effort mapping): F and G are the two top corners of the
 * diagonal/ancestral square, each extended into a symmetric 3-point chain
 * (F→F2→F1, G→G2→G1). Assigning the F-chain to "masculine/paternal" and the
 * G-chain to "feminine/maternal" is a structural inference from symmetry,
 * not confirmed against a labeled source — swap if a verified source
 * disagrees.
 */
export function buildMasculineLine(raw: RawPoints): Arcana[] {
  return [raw.f, raw.f2, raw.f1];
}

export function buildFeminineLine(raw: RawPoints): Arcana[] {
  return [raw.g, raw.g2, raw.g1];
}

/**
 * UNVERIFIED (low confidence): a vendor snippet described the money-line
 * entry point as "comfort zone (E) + the lower-right corner of the
 * ancestral square," but gave no worked example tied to a real birth date
 * to confirm which raw point is that corner. `I` (built from C+D) is our
 * best geometric guess — flagged for correction if a verified source
 * surfaces.
 */
export function buildMoneyPoint(raw: RawPoints): Arcana {
  return toArcana(raw.e + raw.i);
}

/**
 * PLACEHOLDER — no formula for the 7 chakras was found in any source
 * consulted; the reference package doesn't expose them at all. This is
 * structurally complete (7 named chakras × physical/energy/emotion) so
 * Milestone 3 can render the UI shape, but the point assignments below are
 * NOT verified against any authoritative source and must be replaced
 * before this ships as real content.
 */
const CHAKRA_NAMES = [
  'Raíz',
  'Sacro',
  'Plexo solar',
  'Corazón',
  'Garganta',
  'Tercer ojo',
  'Corona',
] as const;

export function buildChakras(raw: RawPoints): ChakraPosition[] {
  const sequence: Arcana[] = [
    raw.a, raw.b, raw.c, raw.d, raw.e, raw.f, raw.g,
    raw.h, raw.i, raw.j, raw.k, raw.l, raw.m, raw.n,
    raw.o, raw.p, raw.q, raw.r, raw.s, raw.t, raw.u,
  ];

  return CHAKRA_NAMES.map((name, index) => ({
    name,
    physical: sequence[index * 3],
    energy: sequence[index * 3 + 1],
    emotion: sequence[index * 3 + 2],
  }));
}
