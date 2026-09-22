import type { MatrixResult } from '../../lib/matrix/types';
import { getArcana } from '../../lib/matrix/interpretations';

export interface ResultSummaryProps {
  result: MatrixResult;
}

const ROWS: { key: 'A' | 'B' | 'C' | 'D'; label: string }[] = [
  { key: 'A', label: 'Personalidad' },
  { key: 'B', label: 'Talentos' },
  { key: 'C', label: 'Energía generacional' },
  { key: 'D', label: 'Misión' },
];

export default function ResultSummary({ result }: ResultSummaryProps) {
  const central = getArcana(result.central);
  const displayName = result.input.name?.trim();

  return (
    <div class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
      <p class="text-sm font-medium text-ink-muted">
        {displayName ? `La Matriz del Destino de ${displayName}` : 'Tu Matriz del Destino'}
      </p>
      <h2 class="mt-1 font-heading text-2xl font-bold text-ink sm:text-3xl">
        Arcano {result.central} · {central.name}
      </h2>
      <p class="mt-3 text-base text-ink-muted">{central.general}</p>

      <dl class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {ROWS.map(({ key, label }) => (
          <div key={key} class="rounded-xl bg-surface p-3 text-center">
            <dt class="text-xs font-medium uppercase tracking-wide text-ink-muted">{label}</dt>
            <dd class="mt-1 font-heading text-xl font-bold text-primary">{result.positions[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
