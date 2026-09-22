import { useMemo, useRef, useState } from 'preact/hooks';
import type { TargetedKeyboardEvent } from 'preact';
import type { MatrixPositions } from '../../lib/matrix/types';
import type { PositionKey } from '../../lib/matrix/interpretations';

export interface MatrixChartProps {
  positions: MatrixPositions;
  activeKey: PositionKey | null;
  onSelect: (key: PositionKey) => void;
}

interface ChartNode {
  key: PositionKey;
  label: string;
  value: number;
  angleDeg: number;
  radius: number; // percentage of container half-width
  ring: 'inner' | 'outer' | 'center';
}

// F/G/H/I (the diagonal-square corners) feed into the masculine/feminine
// lines and money point but have no interpretation entry of their own in
// positions.json — they're shown for the full octagram silhouette, but as
// plain (non-interactive) labels, not clickable/keyboard-focusable nodes.
interface DiagonalNode {
  key: 'F' | 'G' | 'H' | 'I';
  value: number;
  angleDeg: number;
}

const INNER_RADIUS = 36;
const OUTER_RADIUS = 47;

// Clockwise from the top. Cardinal points (A/B/C/D) sit opposite each other;
// the diagonal square (F/G/H/I) fills the gaps between them.
const CARDINAL_NODES: Omit<ChartNode, 'value' | 'ring'>[] = [
  { key: 'B', label: 'B · Talentos', angleDeg: 0, radius: INNER_RADIUS },
  { key: 'C', label: 'C · Energía generacional', angleDeg: 90, radius: INNER_RADIUS },
  { key: 'D', label: 'D · Misión', angleDeg: 180, radius: INNER_RADIUS },
  { key: 'A', label: 'A · Personalidad', angleDeg: 270, radius: INNER_RADIUS },
];

const DIAGONAL_NODES: Omit<DiagonalNode, 'value'>[] = [
  { key: 'G', angleDeg: 45 },
  { key: 'I', angleDeg: 135 },
  { key: 'H', angleDeg: 225 },
  { key: 'F', angleDeg: 315 },
];

const OUTER_NODES: Omit<ChartNode, 'value' | 'ring'>[] = [
  { key: 'purposes.personal', label: 'Propósito personal', angleDeg: 0, radius: OUTER_RADIUS },
  { key: 'purposes.social', label: 'Propósito social', angleDeg: 45, radius: OUTER_RADIUS },
  { key: 'purposes.general', label: 'Propósito general', angleDeg: 90, radius: OUTER_RADIUS },
  { key: 'purposes.planetary', label: 'Propósito planetario', angleDeg: 135, radius: OUTER_RADIUS },
  { key: 'purposes.sky', label: 'Punto cielo', angleDeg: 180, radius: OUTER_RADIUS },
  { key: 'purposes.earth', label: 'Punto tierra', angleDeg: 225, radius: OUTER_RADIUS },
  { key: 'purposes.male', label: 'Punto masculino', angleDeg: 270, radius: OUTER_RADIUS },
  { key: 'purposes.female', label: 'Punto femenino', angleDeg: 315, radius: OUTER_RADIUS },
];

const toXY = (angleDeg: number, radius: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radius * Math.sin(rad),
    y: 50 - radius * Math.cos(rad),
  };
};

function readValue(positions: MatrixPositions, key: PositionKey): number {
  if (key.startsWith('purposes.')) {
    const purposeKey = key.slice('purposes.'.length) as keyof MatrixPositions['purposes'];
    return positions.purposes[purposeKey];
  }
  return positions.raw[key.toLowerCase() as keyof MatrixPositions['raw']];
}

function readRawValue(positions: MatrixPositions, key: DiagonalNode['key']): number {
  return positions.raw[key.toLowerCase() as keyof MatrixPositions['raw']];
}

export default function MatrixChart({ positions, activeKey, onSelect }: MatrixChartProps) {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const nodes: ChartNode[] = useMemo(() => {
    const inner = CARDINAL_NODES.map((n) => ({ ...n, value: readValue(positions, n.key), ring: 'inner' as const }));
    const outer = OUTER_NODES.map((n) => ({ ...n, value: readValue(positions, n.key), ring: 'outer' as const }));
    const center: ChartNode = { key: 'E', label: 'E · Zona de confort', value: positions.E, angleDeg: 0, radius: 0, ring: 'center' };
    return [...inner, center, ...outer];
  }, [positions]);

  const diagonalNodes: DiagonalNode[] = useMemo(
    () => DIAGONAL_NODES.map((n) => ({ ...n, value: readRawValue(positions, n.key) })),
    [positions],
  );

  // Roving tabindex order: inner ring, then center, then outer ring.
  const rovingOrder = useMemo(() => nodes.map((n) => n.key), [nodes]);
  const [focusedKey, setFocusedKey] = useState<PositionKey>(rovingOrder[0]);

  const focusNode = (key: PositionKey) => {
    buttonRefs.current[key]?.focus();
    setFocusedKey(key);
  };

  const handleKeyDown = (event: TargetedKeyboardEvent<HTMLButtonElement>, key: PositionKey) => {
    const index = rovingOrder.indexOf(key);
    if (index === -1) return;

    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % rovingOrder.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + rovingOrder.length) % rovingOrder.length;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      focusNode(rovingOrder[nextIndex]);
    }
  };

  // Full 8-point star outline (cardinal + diagonal) for the decorative SVG.
  const starPoints = useMemo(() => {
    const all = [...CARDINAL_NODES, ...DIAGONAL_NODES].map((n) => ({ ...n, radius: INNER_RADIUS }));
    all.sort((a, b) => a.angleDeg - b.angleDeg);
    return all.map((n) => toXY(n.angleDeg, INNER_RADIUS));
  }, []);

  return (
    <div class="mx-auto aspect-square w-full max-w-md">
      <div class="relative h-full w-full">
        <svg viewBox="0 0 100 100" class="absolute inset-0 h-full w-full text-primary/25" aria-hidden="true">
          <polygon
            points={starPoints.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="currentColor"
            stroke-width="0.5"
          />
          <polygon
            points={OUTER_NODES.map((n) => {
              const { x, y } = toXY(n.angleDeg, n.radius);
              return `${x},${y}`;
            }).join(' ')}
            fill="none"
            stroke="currentColor"
            stroke-width="0.3"
            stroke-dasharray="1.5 1.5"
          />
          {CARDINAL_NODES.map((n) => {
            const { x, y } = toXY(n.angleDeg, n.radius);
            return <line key={n.key} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" stroke-width="0.4" />;
          })}
        </svg>

        {diagonalNodes.map((node) => {
          const { x, y } = toXY(node.angleDeg, INNER_RADIUS);
          return (
            <span
              key={node.key}
              aria-hidden="true"
              class="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-surface-alt bg-surface font-heading text-sm font-semibold text-ink-muted"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {node.value}
            </span>
          );
        })}

        {nodes.map((node) => {
          const { x, y } = toXY(node.angleDeg, node.radius);
          const isActive = activeKey === node.key;
          const isCenter = node.ring === 'center';
          const isOuter = node.ring === 'outer';

          return (
            <button
              key={node.key}
              ref={(el) => {
                buttonRefs.current[node.key] = el;
              }}
              type="button"
              tabIndex={focusedKey === node.key ? 0 : -1}
              onClick={() => {
                setFocusedKey(node.key);
                onSelect(node.key);
              }}
              onFocus={() => setFocusedKey(node.key)}
              onKeyDown={(event) => handleKeyDown(event, node.key)}
              aria-pressed={isActive}
              aria-label={`${node.label}: arcano ${node.value}`}
              class={[
                'absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 font-heading font-bold shadow-sm transition-transform hover:scale-105 focus-visible:scale-105',
                isCenter
                  ? 'h-16 w-16 border-accent bg-primary text-white text-xl'
                  : isOuter
                    ? 'h-9 w-9 border-surface-alt bg-white text-ink-muted text-xs'
                    : 'h-12 w-12 border-primary bg-white text-primary text-base',
                isActive && !isCenter ? 'border-accent bg-accent text-ink' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {node.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
