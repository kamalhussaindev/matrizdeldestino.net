import type { MatrixPositions } from '../../lib/matrix/types';
import type { PositionKey } from '../../lib/matrix/interpretations';
import type { ShareMethod } from './ShareResult';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Shared by MatrixCalculator and UnifiedCalculator so both emit the same
// GA4 events. The result components stay analytics-agnostic and report
// through callbacks instead.

// Maps the tab labels InsightTabs renders to the stable slugs GA4 events use.
const TAB_EVENT_NAMES: Record<string, string> = {
  Propósito: 'proposito',
  Relaciones: 'relaciones',
  Carrera: 'carrera',
  'Fortalezas y retos': 'retos',
};

const track = (event: string, params: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params);
  }
};

// MatrixChart only ever selects the 5 cardinal points or one of the 8 purposes.
export function readChartPositionValue(positions: MatrixPositions, key: PositionKey): number {
  if (key.startsWith('purposes.')) {
    const purposeKey = key.slice('purposes.'.length) as keyof MatrixPositions['purposes'];
    return positions.purposes[purposeKey];
  }
  return positions[key as 'A' | 'B' | 'C' | 'D' | 'E'];
}

export function trackCalculatorCompleted(central: number) {
  track('calculator_completed', { arcano_central: central, method: 'birth_date' });
}

export function trackPositionClicked(positions: MatrixPositions, key: PositionKey) {
  track('arcana_position_clicked', { position: key, arcano: readChartPositionValue(positions, key) });
}

export function trackShare(method: ShareMethod) {
  track('share_clicked', { share_method: method });
}

export function trackTabViewed(tab: string) {
  track('insight_tab_viewed', { tab: TAB_EVENT_NAMES[tab] ?? tab });
}
