import { useRef } from 'preact/hooks';
import type { MatrixResult } from '../../lib/matrix/types';
import { describePosition, getPositionFraming, type PositionKey } from '../../lib/matrix/interpretations';

export interface PositionBreakdownProps {
  result: MatrixResult;
  activeKey: PositionKey | null;
  onSelectKey: (key: PositionKey | null) => void;
}

interface BreakdownItem {
  key: PositionKey;
  title: string;
  values: number[];
  body: string;
}

function buildItems(result: MatrixResult): BreakdownItem[] {
  const { positions } = result;

  const simple: { key: PositionKey; title: string; value: number | number[] }[] = [
    { key: 'A', title: 'A · Personalidad', value: positions.A },
    { key: 'B', title: 'B · Talentos', value: positions.B },
    { key: 'C', title: 'C · Energía generacional', value: positions.C },
    { key: 'D', title: 'D · Misión terrenal', value: positions.D },
    { key: 'E', title: 'E · Zona de confort', value: positions.E },
    { key: 'masculine', title: 'Línea masculina / paterna', value: positions.masculine },
    { key: 'feminine', title: 'Línea femenina / materna', value: positions.feminine },
    { key: 'karmicTail', title: 'Cola kármica', value: positions.karmicTail },
    { key: 'money', title: 'Línea del dinero', value: positions.money },
    { key: 'purposes.personal', title: 'Propósito personal', value: positions.purposes.personal },
    { key: 'purposes.social', title: 'Propósito social', value: positions.purposes.social },
    { key: 'purposes.general', title: 'Propósito general', value: positions.purposes.general },
    { key: 'purposes.planetary', title: 'Propósito planetario', value: positions.purposes.planetary },
    { key: 'purposes.sky', title: 'Punto cielo', value: positions.purposes.sky },
    { key: 'purposes.earth', title: 'Punto tierra', value: positions.purposes.earth },
    { key: 'purposes.male', title: 'Punto masculino', value: positions.purposes.male },
    { key: 'purposes.female', title: 'Punto femenino', value: positions.purposes.female },
  ];

  return simple.map(({ key, title, value }) => ({
    key,
    title,
    values: Array.isArray(value) ? value : [value],
    body: describePosition(key, value),
  }));
}

export default function PositionBreakdown({ result, activeKey, onSelectKey }: PositionBreakdownProps) {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const items = buildItems(result);
  const chakrasFraming = getPositionFraming('chakras');

  const handleToggle = (key: PositionKey) => {
    onSelectKey(activeKey === key ? null : key);
    itemRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div class="divide-y divide-surface-alt rounded-2xl border border-surface-alt bg-white">
      {items.map((item) => {
        const open = activeKey === item.key;
        const panelId = `breakdown-${item.key}-panel`;

        return (
          <div
            key={item.key}
            ref={(el) => {
              itemRefs.current[item.key] = el;
            }}
          >
            <h3 class="m-0">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => handleToggle(item.key)}
                class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans font-medium text-ink"
              >
                <span>{item.title}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div id={panelId} hidden={!open} class="px-5 pb-5 text-ink-muted">
              <p>{item.body}</p>
              <div class="mt-3 flex flex-wrap gap-2">
                {[...new Set(item.values)].map((value) => (
                  <a
                    key={value}
                    href={`/arcanos/${value}/`}
                    class="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-primary hover:bg-accent hover:text-ink"
                  >
                    Lee más sobre el Arcano {value} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div
        ref={(el) => {
          itemRefs.current['chakras'] = el;
        }}
      >
        <h3 class="m-0">
          <button
            type="button"
            aria-expanded={activeKey === 'chakras'}
            aria-controls="breakdown-chakras-panel"
            onClick={() => handleToggle('chakras')}
            class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans font-medium text-ink"
          >
            <span>Chakras</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ${activeKey === 'chakras' ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </h3>
        <div id="breakdown-chakras-panel" hidden={activeKey !== 'chakras'} class="px-5 pb-5 text-ink-muted">
          <p>{chakrasFraming}</p>
          <ul class="mt-3 flex flex-col gap-2">
            {result.positions.chakras.map((chakra) => (
              <li key={chakra.name} class="flex flex-wrap items-center gap-2 text-sm">
                <span class="w-28 shrink-0 font-medium text-ink">{chakra.name}</span>
                <a href={`/arcanos/${chakra.physical}/`} class="rounded-full bg-surface-alt px-2 py-0.5 text-xs text-primary hover:bg-accent hover:text-ink">
                  Físico {chakra.physical}
                </a>
                <a href={`/arcanos/${chakra.energy}/`} class="rounded-full bg-surface-alt px-2 py-0.5 text-xs text-primary hover:bg-accent hover:text-ink">
                  Energía {chakra.energy}
                </a>
                <a href={`/arcanos/${chakra.emotion}/`} class="rounded-full bg-surface-alt px-2 py-0.5 text-xs text-primary hover:bg-accent hover:text-ink">
                  Emoción {chakra.emotion}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
