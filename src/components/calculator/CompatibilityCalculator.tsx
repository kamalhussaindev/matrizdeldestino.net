import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculate } from '../../lib/matrix/calculate';
import type { MatrixResult } from '../../lib/matrix/types';
import { getArcana } from '../../lib/matrix/interpretations';
import MatrixChart from './MatrixChart';
import ResultSummary from './ResultSummary';

const DATE_PATTERN = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

interface PersonFormState {
  name: string;
  dateText: string;
}

function parseDate(dateText: string) {
  const match = dateText.trim().match(DATE_PATTERN);
  if (!match) return null;
  const [, dayStr, monthStr, yearStr] = match;
  return { day: Number(dayStr), month: Number(monthStr), year: Number(yearStr) };
}

function buildComparison(a: MatrixResult, b: MatrixResult, nameA: string, nameB: string): string {
  const coreA = [a.positions.A, a.positions.B, a.positions.C, a.positions.D, a.positions.E];
  const coreB = [b.positions.A, b.positions.B, b.positions.C, b.positions.D, b.positions.E];
  const shared = [...new Set(coreA.filter((value) => coreB.includes(value)))];

  const centralSentence =
    a.central === b.central
      ? `${nameA} y ${nameB} comparten el mismo arcano central (${a.central} · ${getArcana(a.central).name}), lo que suele indicar una afinidad natural en su propósito de vida y en la forma en que ambos buscan sentirse a gusto.`
      : `${nameA} tiene el arcano ${a.central} (${getArcana(a.central).name}) en su centro, mientras que ${nameB} tiene el ${b.central} (${getArcana(b.central).name}). Energías distintas no significan incompatibilidad: suelen aportar equilibrio y complementariedad a la relación.`;

  const sharedSentence =
    shared.length > 0
      ? `Además, comparten el arcano ${shared.join(', ')} en alguna de sus posiciones principales — una energía que reconocen fácilmente el uno en el otro.`
      : 'No comparten arcanos en sus posiciones principales, lo que sugiere una relación que crece sobre todo a través de la complementariedad de energías distintas.';

  return `${centralSentence} ${sharedSentence}`;
}

export default function CompatibilityCalculator() {
  const [personA, setPersonA] = useState<PersonFormState>({ name: '', dateText: '' });
  const [personB, setPersonB] = useState<PersonFormState>({ name: '', dateText: '' });
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<{ a: MatrixResult; b: MatrixResult } | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dateA = parseDate(personA.dateText);
    const dateB = parseDate(personB.dateText);

    if (!dateA || !dateB) {
      setError('Ingresa ambas fechas de nacimiento en formato DD/MM/AAAA.');
      return;
    }

    try {
      const resultA = calculate({ ...dateA, name: personA.name.trim() || 'Persona 1' });
      const resultB = calculate({ ...dateB, name: personB.name.trim() || 'Persona 2' });
      setResults({ a: resultA, b: resultB });
      setError(null);
    } catch (err) {
      setResults(null);
      setError(err instanceof Error ? err.message : 'No pudimos calcular la compatibilidad. Verifica las fechas.');
    }
  };

  const nameA = personA.name.trim() || 'Persona 1';
  const nameB = personB.name.trim() || 'Persona 2';

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <div class="grid gap-6 sm:grid-cols-2">
          {[
            { label: 'Persona 1', state: personA, setState: setPersonA },
            { label: 'Persona 2', state: personB, setState: setPersonB },
          ].map((person, index) => (
            <div key={index} class="flex flex-col gap-4">
              <h3 class="font-heading text-sm font-semibold text-ink">{person.label}</h3>
              <div>
                <label for={`compat-name-${index}`} class="text-sm font-medium text-ink">
                  Nombre (opcional)
                </label>
                <input
                  id={`compat-name-${index}`}
                  type="text"
                  value={person.state.name}
                  onInput={(event) =>
                    person.setState((prev) => ({ ...prev, name: (event.target as HTMLInputElement).value }))
                  }
                  placeholder={person.label}
                  class="mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>
              <div>
                <label for={`compat-date-${index}`} class="text-sm font-medium text-ink">
                  Fecha de nacimiento{' '}
                  <span class="text-primary" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id={`compat-date-${index}`}
                  type="text"
                  inputMode="numeric"
                  required
                  value={person.state.dateText}
                  onInput={(event) =>
                    person.setState((prev) => ({ ...prev, dateText: (event.target as HTMLInputElement).value }))
                  }
                  placeholder="DD/MM/AAAA"
                  class="mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>
            </div>
          ))}
        </div>

        {error && (
          <p class="mt-4 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          Calcular compatibilidad →
        </button>

        <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
          <span class="rounded-full bg-surface-alt px-3 py-1">100% gratis</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Sin registro</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Resultado al instante</span>
        </div>
      </form>

      {results && (
        <div class="flex flex-col gap-8">
          <div class="grid gap-8 sm:grid-cols-2">
            <div class="flex flex-col gap-4">
              <ResultSummary result={results.a} />
              <MatrixChart positions={results.a.positions} activeKey={null} onSelect={() => {}} />
            </div>
            <div class="flex flex-col gap-4">
              <ResultSummary result={results.b} />
              <MatrixChart positions={results.b.positions} activeKey={null} onSelect={() => {}} />
            </div>
          </div>

          <div class="rounded-2xl border border-accent/40 bg-white p-6 shadow-sm sm:p-8">
            <h2 class="font-heading text-xl font-bold text-ink">Su compatibilidad</h2>
            <p class="mt-3 text-ink-muted">{buildComparison(results.a, results.b, nameA, nameB)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
