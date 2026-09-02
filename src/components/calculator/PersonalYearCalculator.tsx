import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculatePersonalYear } from '../../lib/numerology/personalYear';
import { personalYearMeanings } from '../../data/numerology';

const CURRENT_YEAR = new Date().getFullYear();
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const selectClass =
  'mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-3 py-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-accent';

// Maps a personal year (including master years 11/22) to its position in the
// underlying 9-year cycle, for the progress indicator.
const cyclePosition = (n: number): number => (n === 11 ? 2 : n === 22 ? 4 : n);

export default function PersonalYearCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!day || !month) {
      setError('Select your day and month of birth.');
      return;
    }

    try {
      const number = calculatePersonalYear({ day: Number(day), month: Number(month), targetYear: CURRENT_YEAR });
      setResult(number);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "We couldn't calculate your personal year number. Check your date.");
    }
  };

  const meaning = result !== null ? personalYearMeanings[result] : null;
  const isMasterYear = result === 11 || result === 22;

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <span id="py-date-label" class="text-sm font-medium text-ink">
          Day and month of birth{' '}
          <span class="text-primary" aria-hidden="true">*</span>
        </span>
        <p class="text-xs text-ink-muted">Your birth year isn't needed for this calculation.</p>
        <div
          role="group"
          aria-labelledby="py-date-label"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'py-date-error' : undefined}
          class="mt-1.5 grid grid-cols-2 gap-2"
        >
          <select aria-label="Day" required value={day} onInput={(e) => setDay((e.target as HTMLSelectElement).value)} class={selectClass}>
            <option value="" disabled>Day</option>
            {DAYS.map((d) => <option value={d}>{d}</option>)}
          </select>
          <select aria-label="Month" required value={month} onInput={(e) => setMonth((e.target as HTMLSelectElement).value)} class={selectClass}>
            <option value="" disabled>Month</option>
            {MONTHS.map((label, index) => <option value={index + 1}>{label}</option>)}
          </select>
        </div>

        {error && (
          <p id="py-date-error" class="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          Calculate My Personal Year →
        </button>

        <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
          <span class="rounded-full bg-surface-alt px-3 py-1">100% free</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">No registration</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Instant result</span>
        </div>
      </form>

      {result !== null && meaning && (
        <div class="flex flex-col gap-6 rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8" aria-live="polite">
          <div>
            <p class="text-sm font-medium text-ink-muted">Your Personal Year Number for {CURRENT_YEAR}</p>
            <h2 class="mt-1 font-heading text-3xl font-bold text-ink sm:text-4xl">
              {result} · {meaning.theme}
            </h2>
          </div>

          <p class="text-base text-ink-muted">{meaning.description}</p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl bg-surface-alt p-4">
              <p class="text-sm font-semibold text-ink">Focus on</p>
              <p class="mt-1 text-sm text-ink-muted">{meaning.focus}</p>
            </div>
            <div class="rounded-xl bg-surface-alt p-4">
              <p class="text-sm font-semibold text-ink">Avoid</p>
              <p class="mt-1 text-sm text-ink-muted">{meaning.avoid}</p>
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold text-ink">Where you are in your 9-year cycle</p>
            <div class="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((step) => (
                <span
                  key={step}
                  class={`flex h-8 w-8 items-center justify-center rounded-full font-heading text-xs font-bold ${
                    step === cyclePosition(result)
                      ? 'bg-primary text-white'
                      : 'bg-surface-alt text-ink-muted'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
            {isMasterYear && (
              <p class="mt-2 text-xs text-ink-muted">
                Master years transcend the standard 9-year cycle — {result} carries the heightened
                intensity of a {cyclePosition(result)}-year with extra spiritual weight.
              </p>
            )}
          </div>

          <a
            href="/matriz-del-destino/"
            class="inline-block font-medium text-primary hover:underline"
          >
            Want a deeper reading? Try the full Matriz del Destino calculator →
          </a>
        </div>
      )}
    </div>
  );
}
