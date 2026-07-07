import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculate } from '../../lib/matrix/calculate';
import type { MatrixResult } from '../../lib/matrix/types';
import type { PositionKey } from '../../lib/matrix/interpretations';
import MatrixChart from './MatrixChart';
import ResultSummary from './ResultSummary';
import PositionBreakdown from './PositionBreakdown';
import InsightTabs from './InsightTabs';
import ShareResult from './ShareResult';
import PdfReportCTA from './PdfReportCTA';

const DATE_PATTERN = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

export interface MatrixCalculatorProps {
  nameLabel?: string;
  namePlaceholder?: string;
  submitLabel?: string;
}

export default function MatrixCalculator({
  nameLabel = 'Nombre (opcional)',
  namePlaceholder = 'Tu nombre',
  submitLabel = 'Calcular mi matriz →',
}: MatrixCalculatorProps) {
  const [name, setName] = useState('');
  const [dateText, setDateText] = useState('');
  const [result, setResult] = useState<MatrixResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState<PositionKey | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    const match = dateText.trim().match(DATE_PATTERN);
    if (!match) {
      setError('Ingresa tu fecha de nacimiento en formato DD/MM/AAAA.');
      return;
    }

    const [, dayStr, monthStr, yearStr] = match;

    try {
      const nextResult = calculate({
        day: Number(dayStr),
        month: Number(monthStr),
        year: Number(yearStr),
        name: name.trim() || undefined,
      });
      setResult(nextResult);
      setError(null);
      setActiveKey(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : 'No pudimos calcular tu matriz. Verifica tu fecha.');
    }
  };

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="calc-name" class="text-sm font-medium text-ink">
              {nameLabel}
            </label>
            <input
              id="calc-name"
              type="text"
              value={name}
              onInput={(event) => setName((event.target as HTMLInputElement).value)}
              placeholder={namePlaceholder}
              class="mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
            />
          </div>
          <div>
            <label for="calc-date" class="text-sm font-medium text-ink">
              Fecha de nacimiento{' '}
              <span class="text-primary" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="calc-date"
              type="text"
              inputMode="numeric"
              required
              value={dateText}
              onInput={(event) => setDateText((event.target as HTMLInputElement).value)}
              placeholder="DD/MM/AAAA"
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'calc-date-error' : undefined}
              class="mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
            />
          </div>
        </div>

        {error && (
          <p id="calc-date-error" class="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          {submitLabel}
        </button>

        <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
          <span class="rounded-full bg-surface-alt px-3 py-1">100% gratis</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Sin registro</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Resultado al instante</span>
        </div>
      </form>

      {result && (
        <div class="flex flex-col gap-8">
          <ResultSummary result={result} />
          <MatrixChart positions={result.positions} activeKey={activeKey} onSelect={setActiveKey} />
          <PositionBreakdown result={result} activeKey={activeKey} onSelectKey={setActiveKey} />
          <InsightTabs result={result} />
          <ShareResult result={result} />
          <PdfReportCTA result={result} />
        </div>
      )}
    </div>
  );
}
