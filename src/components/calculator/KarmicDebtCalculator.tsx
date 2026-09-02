import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculateKarmicDebt, type KarmicDebtEntry } from '../../lib/numerology/karmicDebt';
import { karmicDebtMeanings } from '../../data/numerology';

const CURRENT_YEAR = new Date().getFullYear();
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

const selectClass =
  'mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-3 py-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-accent';

const SOURCE_LABEL: Record<KarmicDebtEntry['sources'][number], string> = {
  day: 'your birth day',
  lifePath: 'your life path calculation',
};

export default function KarmicDebtCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<KarmicDebtEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!day || !month || !year) {
      setError('Select your day, month, and year of birth.');
      return;
    }

    try {
      const entries = calculateKarmicDebt({ day: Number(day), month: Number(month), year: Number(year) });
      setResult(entries);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "We couldn't check your chart. Check your date.");
    }
  };

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <span id="kd-date-label" class="text-sm font-medium text-ink">
          Date of birth{' '}
          <span class="text-primary" aria-hidden="true">*</span>
        </span>
        <div
          role="group"
          aria-labelledby="kd-date-label"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'kd-date-error' : undefined}
          class="grid grid-cols-3 gap-2"
        >
          <select aria-label="Day" required value={day} onInput={(e) => setDay((e.target as HTMLSelectElement).value)} class={selectClass}>
            <option value="" disabled>Day</option>
            {DAYS.map((d) => <option value={d}>{d}</option>)}
          </select>
          <select aria-label="Month" required value={month} onInput={(e) => setMonth((e.target as HTMLSelectElement).value)} class={selectClass}>
            <option value="" disabled>Month</option>
            {MONTHS.map((label, index) => <option value={index + 1}>{label}</option>)}
          </select>
          <select aria-label="Year" required value={year} onInput={(e) => setYear((e.target as HTMLSelectElement).value)} class={selectClass}>
            <option value="" disabled>Year</option>
            {YEARS.map((y) => <option value={y}>{y}</option>)}
          </select>
        </div>

        {error && (
          <p id="kd-date-error" class="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          Check My Karmic Debt →
        </button>

        <div class="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-muted">
          <span class="rounded-full bg-surface-alt px-3 py-1">100% free</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">No registration</span>
          <span class="rounded-full bg-surface-alt px-3 py-1">Instant result</span>
        </div>
      </form>

      {result !== null && (
        <div class="flex flex-col gap-6" aria-live="polite">
          {result.length === 0 ? (
            <div class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
              <h2 class="font-heading text-xl font-bold text-ink">No Karmic Debt Numbers Detected</h2>
              <p class="mt-2 text-base text-ink-muted">
                Your chart doesn't carry any of the four recognised karmic debt numbers (13, 14, 16, or
                19). That's not "better" than having one — it simply means this particular kind of
                inherited lesson isn't part of your numerology profile.
              </p>
              <a href="/matriz-del-destino/" class="mt-4 inline-block font-medium text-primary hover:underline">
                Want a deeper reading? Try the full Matriz del Destino calculator →
              </a>
            </div>
          ) : (
            result.map((entry) => {
              const meaning = karmicDebtMeanings[entry.number];
              return (
                <div key={entry.number} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
                  <p class="text-sm font-medium text-ink-muted">Karmic Debt Number</p>
                  <h2 class="mt-1 font-heading text-3xl font-bold text-ink sm:text-4xl">{meaning.label}</h2>
                  <p class="mt-3 text-base text-ink-muted">{meaning.interpretation}</p>
                  <p class="mt-3 text-xs text-ink-muted">
                    Found in: {entry.sources.map((s) => SOURCE_LABEL[s]).join(' and ')}.
                  </p>
                </div>
              );
            })
          )}

          {result.length > 0 && (
            <a href="/matriz-del-destino/" class="inline-block font-medium text-primary hover:underline">
              Want a deeper reading? Try the full Matriz del Destino calculator →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
