import type { Arcana } from './types';

import arcana1 from '../../data/interpretations/arcana/1.json';
import arcana2 from '../../data/interpretations/arcana/2.json';
import arcana3 from '../../data/interpretations/arcana/3.json';
import arcana4 from '../../data/interpretations/arcana/4.json';
import arcana5 from '../../data/interpretations/arcana/5.json';
import arcana6 from '../../data/interpretations/arcana/6.json';
import arcana7 from '../../data/interpretations/arcana/7.json';
import arcana8 from '../../data/interpretations/arcana/8.json';
import arcana9 from '../../data/interpretations/arcana/9.json';
import arcana10 from '../../data/interpretations/arcana/10.json';
import arcana11 from '../../data/interpretations/arcana/11.json';
import arcana12 from '../../data/interpretations/arcana/12.json';
import arcana13 from '../../data/interpretations/arcana/13.json';
import arcana14 from '../../data/interpretations/arcana/14.json';
import arcana15 from '../../data/interpretations/arcana/15.json';
import arcana16 from '../../data/interpretations/arcana/16.json';
import arcana17 from '../../data/interpretations/arcana/17.json';
import arcana18 from '../../data/interpretations/arcana/18.json';
import arcana19 from '../../data/interpretations/arcana/19.json';
import arcana20 from '../../data/interpretations/arcana/20.json';
import arcana21 from '../../data/interpretations/arcana/21.json';
import arcana22 from '../../data/interpretations/arcana/22.json';
import positionsData from '../../data/interpretations/positions.json';

export interface ArcanaPositionEssays {
  puntoE: string;
  colaKarmica: string;
  lineaDinero: string;
  lineaMasculina: string;
  lineaFemenina: string;
}

export interface ArcanaContent {
  name: string;
  general: string;
  love: string;
  career: string;
  shadow: string;
  gift: string;
  positions: ArcanaPositionEssays;
}

export type ArcanaFacet = Exclude<keyof ArcanaContent, 'name'>;

const ARCANA_BY_NUMBER: Record<Arcana, ArcanaContent> = {
  1: arcana1, 2: arcana2, 3: arcana3, 4: arcana4, 5: arcana5,
  6: arcana6, 7: arcana7, 8: arcana8, 9: arcana9, 10: arcana10,
  11: arcana11, 12: arcana12, 13: arcana13, 14: arcana14, 15: arcana15,
  16: arcana16, 17: arcana17, 18: arcana18, 19: arcana19, 20: arcana20,
  21: arcana21, 22: arcana22,
};

export function getArcana(n: Arcana): ArcanaContent {
  const content = ARCANA_BY_NUMBER[n];
  if (!content) throw new Error(`No hay interpretación para el arcano ${n}.`);
  return content;
}

type PositionsData = typeof positionsData;
type PurposeKey = keyof PositionsData['purposes'];

// Dotted key for the 8 purpose fields (e.g. "purposes.personal"), flat keys
// for everything else — matches how PositionBreakdown/InsightTabs address
// positions without needing a discriminated-union key type.
export type PositionKey =
  | Exclude<keyof PositionsData, 'purposes'>
  | `purposes.${PurposeKey}`;

export function getPositionFraming(key: PositionKey): string {
  if (key.startsWith('purposes.')) {
    const purposeKey = key.slice('purposes.'.length) as PurposeKey;
    return positionsData.purposes[purposeKey];
  }
  return positionsData[key as Exclude<keyof PositionsData, 'purposes'>] as string;
}

/**
 * Combines a position's framing text (positions.json) with the arcana
 * facet copy (arcana/{value}.json) for each value at that position — the
 * position × arcana combinatorial rendering that's the product's
 * differentiation (BUILD-SPEC.md §7.3). Arrays (masculine/feminine/
 * karmicTail) get one sentence per value, joined.
 */
export function describePosition(
  key: PositionKey,
  value: Arcana | Arcana[],
  facet: ArcanaFacet = 'general',
): string {
  const framing = getPositionFraming(key);
  const values = Array.isArray(value) ? value : [value];
  const facets = values.map((v) => getArcana(v)[facet]).join(' ');
  return `${framing} ${facets}`.trim();
}
