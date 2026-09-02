import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculateSoulUrge } from '../../lib/numerology/soulUrge';
import { soulUrgeMeanings } from '../../data/numerology';

export default function SoulUrgeCalculator() {
  const [fullName, setFullName] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim()) {
      setError('Enter your full name.');
      return;
    }

    try {
      const number = calculateSoulUrge(fullName);
      setResult(number);
      setError(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "We couldn't calculate your soul urge number.");
    }
  };

  const meaning = result !== null ? soulUrgeMeanings[result] : null;

  return (
    <div class="flex flex-col gap-8">
      <form onSubmit={handleSubmit} class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
        <label for="su-name" class="text-sm font-medium text-ink">
          Full birth name{' '}
          <span class="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="su-name"
          type="text"
          required
          value={fullName}
          onInput={(event) => setFullName((event.target as HTMLInputElement).value)}
          placeholder="e.g. Maria Elena Rodriguez"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'su-name-error' : 'su-name-hint'}
          class="mt-1.5 w-full rounded-xl border border-surface-alt bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
        />
        <p id="su-name-hint" class="mt-1.5 text-xs text-ink-muted">
          Enter your full name as it appears on your birth certificate for the most accurate reading.
        </p>

        {error && (
          <p id="su-name-error" class="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          class="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent hover:text-ink sm:w-auto"
        >
          Calculate My Soul Urge Number →
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
            <p class="text-sm font-medium text-ink-muted">Your Soul Urge Number</p>
            <h2 class="mt-1 font-heading text-3xl font-bold text-ink sm:text-4xl">
              {result} · {meaning.title}
            </h2>
          </div>
          <p class="text-base text-ink-muted">{meaning.interpretation}</p>
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
