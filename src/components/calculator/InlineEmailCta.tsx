import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function InlineEmailCta() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setError('Ingresa un correo electrónico válido.');
      return;
    }

    setError(null);
    // Stub only — no network call yet, mirrors PdfReportCTA until Milestone 8
    // wires the real email endpoint.
    setSubmitted(true);
  };

  return (
    <div class="rounded-2xl border border-primary/15 bg-surface-alt p-5">
      {submitted ? (
        <p class="text-sm font-medium text-ink" role="status">
          ¡Listo! Revisa tu bandeja de entrada.
        </p>
      ) : (
        <>
          <p class="text-sm font-medium text-ink">
            ¿Quieres guardar tu lectura completa? Recíbela en tu correo →
          </p>
          <form onSubmit={handleSubmit} class="mt-3 flex flex-col gap-2 sm:flex-row">
            <div class="flex-1">
              <label for="inline-cta-email" class="sr-only">
                Correo electrónico
              </label>
              <input
                id="inline-cta-email"
                type="email"
                required
                value={email}
                onInput={(event) => setEmail((event.target as HTMLInputElement).value)}
                placeholder="tu@correo.com"
                aria-invalid={error ? 'true' : undefined}
                aria-describedby={error ? 'inline-cta-email-error' : undefined}
                class="w-full rounded-xl border border-surface-alt bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
              />
              {error && (
                <p id="inline-cta-email-error" class="mt-1 text-xs text-red-700" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              class="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-ink"
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
}
