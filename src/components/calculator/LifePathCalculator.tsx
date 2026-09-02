import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculateLifePath } from '../../lib/numerology/lifePath';
import { lifePathMeanings } from '../../data/numerology';

const CURRENT_YEAR = new Date().getFullYear();
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

const selectClass =
  'mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-3 py-3 text-base text-ink focus-visible:outline-2 focus-visible:outline-accent';

export default function LifePathCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!day || !month || !year) {
      setError('Select your day, month, and year of birth.');
      return;
    }

    try {
      const { number } = calculateLifePath({ day: Number(day), month: Number(month), year: Number(year) });
      setResult(number);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "We couldn't calculate your life path number. Check your date.");
    }
  };

  const meaning = result !== null ? lifePathMeanings[result] : null;

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <span id="lp-date-label" class="text-sm font-medium text-ink">
          Date of birth{' '}
          <span class="text-primary" aria-hidden="true">*</span>
        </span>
        <div
          role="group"
          aria-labelledby="lp-date-label"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'lp-date-error' : undefined}
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
          <p id="lp-date-error" class="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          Calculate My Life Path Number →
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
            <p class="text-sm font-medium text-ink-muted">Your Life Path Number</p>
            <h2 class="mt-1 font-heading text-3xl font-bold text-ink sm:text-4xl">
              {result} · {meaning.title}
            </h2>
          </div>
          <p class="text-base text-ink-muted">{meaning.interpretation}</p>
          <div class="rounded-xl bg-surface-alt p-4">
            <p class="text-sm font-semibold text-ink">Compatibility</p>
            <p class="mt-1 text-sm text-ink-muted">{meaning.compatibility}</p>
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
