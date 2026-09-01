import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculate } from '../../lib/matrix/calculate';
import type { MatrixResult } from '../../lib/matrix/types';
import { getArcana } from '../../lib/matrix/interpretations';
import MatrixChart from './MatrixChart';
import ResultSummary from './ResultSummary';

const CURRENT_YEAR = new Date().getFullYear();
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

const selectClass =
  'mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-3 py-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-accent';

interface PersonFormState {
  name: string;
  day: string;
  month: string;
  year: string;
}

function parseDate(state: PersonFormState) {
  if (!state.day || !state.month || !state.year) return null;
  return { day: Number(state.day), month: Number(state.month), year: Number(state.year) };
}

function buildComparison(a: MatrixResult, b: MatrixResult, nameA: string, nameB: string): string {
  const coreA = [a.positions.A, a.positions.B, a.positions.C, a.positions.D, a.positions.E];
  const coreB = [b.positions.A, b.positions.B, b.positions.C, b.positions.D, b.positions.E];
  const shared = [...new Set(coreA.filter((value) => coreB.includes(value)))];

  const centralSentence =
    a.central === b.central
      ? `${nameA} and ${nameB} share the same central arcana (${a.central} · ${getArcana(a.central).name}), which usually indicates a natural affinity in their life purpose and in how they both seek to feel at ease.`
      : `${nameA} has arcana ${a.central} (${getArcana(a.central).name}) at their centre, while ${nameB} has ${b.central} (${getArcana(b.central).name}). Different energies don't mean incompatibility — they usually bring balance and complementarity to the relationship.`;

  const sharedSentence =
    shared.length > 0
      ? `They also share arcana ${shared.join(', ')} in some of their main positions — an energy they recognise easily in each other.`
      : "They don't share arcana in their main positions, which suggests a relationship that grows mainly through the complementarity of different energies.";

  return `${centralSentence} ${sharedSentence}`;
}

export default function CompatibilityCalculator() {
  const [personA, setPersonA] = useState<PersonFormState>({ name: '', day: '', month: '', year: '' });
  const [personB, setPersonB] = useState<PersonFormState>({ name: '', day: '', month: '', year: '' });
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<{ a: MatrixResult; b: MatrixResult } | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dateA = parseDate(personA);
    const dateB = parseDate(personB);

    if (!dateA || !dateB) {
      setError('Select both dates of birth.');
      return;
    }

    try {
      const resultA = calculate({ ...dateA, name: personA.name.trim() || 'Person 1' });
      const resultB = calculate({ ...dateB, name: personB.name.trim() || 'Person 2' });
      setResults({ a: resultA, b: resultB });
      setError(null);
    } catch (err) {
      setResults(null);
      setError(err instanceof Error ? err.message : "We couldn't calculate the compatibility. Check the dates.");
    }
  };

  const nameA = personA.name.trim() || 'Person 1';
  const nameB = personB.name.trim() || 'Person 2';

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <div class="grid gap-6 sm:grid-cols-2">
          {[
            { label: 'Person 1', state: personA, setState: setPersonA },
            { label: 'Person 2', state: personB, setState: setPersonB },
          ].map((person, index) => (
            <div key={index} class="flex flex-col gap-4">
              <h3 class="font-heading text-sm font-semibold text-ink">{person.label}</h3>
              <div>
                <label for={`compat-name-${index}`} class="text-sm font-medium text-ink">
                  Name (optional)
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
                <span id={`compat-date-label-${index}`} class="text-sm font-medium text-ink">
                  Date of birth{' '}
                  <span class="text-primary" aria-hidden="true">
                    *
                  </span>
                </span>
                <div role="group" aria-labelledby={`compat-date-label-${index}`} class="grid grid-cols-3 gap-2">
                  <select
                    aria-label={`Day — ${person.label}`}
                    required
                    value={person.state.day}
                    onInput={(event) =>
                      person.setState((prev) => ({ ...prev, day: (event.target as HTMLSelectElement).value }))
                    }
                    class={selectClass}
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {DAYS.map((d) => (
                      <option value={d}>{d}</option>
                    ))}
                  </select>
                  <select
                    aria-label={`Month — ${person.label}`}
                    required
                    value={person.state.month}
                    onInput={(event) =>
                      person.setState((prev) => ({ ...prev, month: (event.target as HTMLSelectElement).value }))
                    }
                    class={selectClass}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {MONTHS.map((label, monthIndex) => (
                      <option value={monthIndex + 1}>{label}</option>
                    ))}
                  </select>
                  <select
                    aria-label={`Year — ${person.label}`}
                    required
                    value={person.state.year}
                    onInput={(event) =>
                      person.setState((prev) => ({ ...prev, year: (event.target as HTMLSelectElement).value }))
                    }
                    class={selectClass}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {YEARS.map((y) => (
                      <option value={y}>{y}</option>
                    ))}
                  </select>
                </div>
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
          Calculate Compatibility →
        </button>

        <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
          <span class="rounded-full bg-surface-alt px-3 py-1">100% free</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">No registration</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Instant result</span>
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
            <h2 class="font-heading text-xl font-bold text-ink">Your Compatibility</h2>
            <p class="mt-3 text-ink-muted">{buildComparison(results.a, results.b, nameA, nameB)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
