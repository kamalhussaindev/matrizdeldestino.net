import { useState } from 'preact/hooks';
import type { MatrixResult } from '../../lib/matrix/types';
import { describePosition, getArcana } from '../../lib/matrix/interpretations';

export interface InsightTabsProps {
  result: MatrixResult;
}

const TABS = ['Propósito', 'Relaciones', 'Carrera', 'Fortalezas y retos'] as const;
type Tab = (typeof TABS)[number];

const CORE_KEYS = ['A', 'B', 'C', 'D', 'E'] as const;

export default function InsightTabs({ result }: InsightTabsProps) {
  const [active, setActive] = useState<Tab>('Propósito');
  const { positions } = result;

  return (
    <div>
      <div role="tablist" aria-label="Aspectos de tu matriz" class="flex flex-wrap gap-1 border-b border-surface-alt">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            class={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              active === tab ? 'border-primary text-primary' : 'border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div role="tabpanel" class="py-4 text-ink-muted">
        {active === 'Propósito' && (
          <div class="flex flex-col gap-3">
            <p>{describePosition('E', positions.E)}</p>
            <p>{describePosition('purposes.personal', positions.purposes.personal)}</p>
            <p>{describePosition('purposes.general', positions.purposes.general)}</p>
            <p>{describePosition('purposes.planetary', positions.purposes.planetary)}</p>
          </div>
        )}

        {active === 'Relaciones' && (
          <div class="flex flex-col gap-3">
            <p>{describePosition('masculine', positions.masculine, 'love')}</p>
            <p>{describePosition('feminine', positions.feminine, 'love')}</p>
            <p>{describePosition('purposes.social', positions.purposes.social, 'love')}</p>
          </div>
        )}

        {active === 'Carrera' && (
          <div class="flex flex-col gap-3">
            <p>{describePosition('D', positions.D, 'career')}</p>
            <p>{describePosition('money', positions.money, 'career')}</p>
          </div>
        )}

        {active === 'Fortalezas y retos' && (
          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 class="font-heading text-sm font-semibold text-ink">Fortalezas</h3>
              <ul class="mt-2 flex flex-col gap-2">
                {CORE_KEYS.map((key) => (
                  <li key={key}>{getArcana(positions[key]).gift}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 class="font-heading text-sm font-semibold text-ink">Retos</h3>
              <ul class="mt-2 flex flex-col gap-2">
                {CORE_KEYS.map((key) => (
                  <li key={key}>{getArcana(positions[key]).shadow}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
