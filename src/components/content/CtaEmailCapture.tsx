import { useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Standalone bottom-of-page email capture — distinct from PdfReportCTA.tsx,
 * which lives inside the calculator tree and requires a computed
 * MatrixResult. This one has no such dependency (generic marketing copy)
 * and can appear anywhere on the page. Same stub pattern: local state only,
 * no network call yet (Milestone 8 wires the real endpoint).
 */
export default function CtaEmailCapture() {
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
    setSubmitted(true);
  };

  return (
    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div class="rounded-2xl bg-gradient-to-br from-primary to-primary-dark px-6 py-10 text-center text-white sm:px-12">
        <h2 class="font-heading text-2xl font-bold sm:text-3xl">Descarga tu informe completo</h2>
        <p class="mx-auto mt-3 max-w-xl text-white/85">
          Calcula tu matriz arriba y recibe un informe detallado con todas tus posiciones, líneas y
          propósitos directo a tu correo.
        </p>

        {submitted ? (
          <p class="mx-auto mt-6 max-w-sm rounded-xl bg-white/10 px-4 py-3 text-sm font-medium" role="status">
            ¡Listo! Te avisaremos a {email} en cuanto tu informe esté disponible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} class="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row">
            <div class="flex-1">
              <label for="cta-email" class="sr-only">
                Correo electrónico
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onInput={(event) => setEmail((event.target as HTMLInputElement).value)}
                placeholder="tu@correo.com"
                aria-invalid={error ? 'true' : undefined}
                aria-describedby={error ? 'cta-email-error' : undefined}
                class="w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus-visible:outline-2 focus-visible:outline-accent"
              />
              {error && (
                <p id="cta-email-error" class="mt-1 text-sm text-accent-light" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              class="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-ink hover:bg-accent-light"
            >
              Avísame
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
