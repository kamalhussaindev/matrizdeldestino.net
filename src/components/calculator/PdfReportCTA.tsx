import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import type { MatrixResult } from '../../lib/matrix/types';

export interface PdfReportCTAProps {
  result: MatrixResult;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function PdfReportCTA({ result }: PdfReportCTAProps) {
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
    // Stub only — no network call yet. Milestone 8 wires the real email
    // endpoint (Astro API route → ESP) and PDF generation. This never gates
    // the free result above; it's a purely optional upsell.
    void result;
    setSubmitted(true);
  };

  return (
    <div class="rounded-2xl border border-accent/40 bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-sm sm:p-8">
      <h2 class="font-heading text-xl font-bold">Descarga tu informe completo en PDF</h2>
      <p class="mt-2 text-sm text-white/85">
        Recibe un informe detallado con todas tus posiciones, líneas y propósitos, directo a tu correo.
      </p>

      {submitted ? (
        <p class="mt-4 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium" role="status">
          ¡Listo! En breve recibirás tu informe completo en {email}.
        </p>
      ) : (
        <form onSubmit={handleSubmit} class="mt-4 flex flex-col gap-3 sm:flex-row">
          <div class="flex-1">
            <label for="pdf-email" class="sr-only">
              Correo electrónico
            </label>
            <input
              id="pdf-email"
              type="email"
              required
              value={email}
              onInput={(event) => setEmail((event.target as HTMLInputElement).value)}
              placeholder="tu@correo.com"
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'pdf-email-error' : undefined}
              class="w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
            />
            {error && (
              <p id="pdf-email-error" class="mt-1 text-sm text-accent-light" role="alert">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            class="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-light"
          >
            Descargar gratis
          </button>
        </form>
      )}
    </div>
  );
}
