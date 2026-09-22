import { useEffect, useRef, useState } from 'preact/hooks';
import type { TargetedEvent } from 'preact';
import { calculate } from '../../lib/matrix/calculate';
import type { MatrixResult } from '../../lib/matrix/types';
import { getArcana, type PositionKey } from '../../lib/matrix/interpretations';
import MatrixResults from './MatrixResults';
import MatrixChart from './MatrixChart';
import ResultSummary from './ResultSummary';
import type { ShareMethod } from './ShareResult';
import { trackCalculatorCompleted, trackPositionClicked, trackShare, trackTabViewed } from './analytics';

const CURRENT_YEAR = new Date().getFullYear();
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: CURRENT_YEAR - 1900 + 1 }, (_, i) => CURRENT_YEAR - i);

type Tab = 'personal' | 'compatibilidad';

interface PersonFormState {
  name: string;
  day: string;
  month: string;
  year: string;
}

const emptyPerson = (): PersonFormState => ({ name: '', day: '', month: '', year: '' });

function parseDate(state: PersonFormState) {
  if (!state.day || !state.month || !state.year) return null;
  return { day: Number(state.day), month: Number(state.month), year: Number(state.year) };
}

// Same comparison copy the standalone compatibility page used, kept verbatim
// so the redirect from /matriz-del-destino/compatibilidad/ lands on an
// identical read-out.
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

interface DateSelectsProps {
  idPrefix: string;
  legend: string;
  state: PersonFormState;
  onChange: (patch: Partial<PersonFormState>) => void;
  invalid?: boolean;
}

function DateSelects({ idPrefix, legend, state, onChange, invalid }: DateSelectsProps) {
  return (
    <div class="input-group">
      <span id={`${idPrefix}-label`} class="input-label">
        {legend}
      </span>
      <div
        role="group"
        aria-labelledby={`${idPrefix}-label`}
        aria-invalid={invalid ? 'true' : undefined}
        class="date-selects"
      >
        <select
          aria-label={`Día — ${legend}`}
          required
          value={state.day}
          onInput={(event) => onChange({ day: (event.target as HTMLSelectElement).value })}
        >
          <option value="" disabled>
            Día
          </option>
          {DAYS.map((d) => (
            <option value={d}>{d}</option>
          ))}
        </select>
        <select
          aria-label={`Mes — ${legend}`}
          required
          value={state.month}
          onInput={(event) => onChange({ month: (event.target as HTMLSelectElement).value })}
        >
          <option value="" disabled>
            Mes
          </option>
          {MONTHS.map((label, index) => (
            <option value={index + 1}>{label}</option>
          ))}
        </select>
        <select
          aria-label={`Año — ${legend}`}
          required
          value={state.year}
          onInput={(event) => onChange({ year: (event.target as HTMLSelectElement).value })}
        >
          <option value="" disabled>
            Año
          </option>
          {YEARS.map((y) => (
            <option value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TrustBadges() {
  return (
    <div class="trust-badges">
      <span>🔒 Privado</span>
      <span>⚡ Instantáneo</span>
      <span>💚 100% Gratis</span>
    </div>
  );
}

export default function UnifiedCalculator() {
  const [activeTab, setActiveTab] = useState<Tab>('personal');

  const [person, setPerson] = useState<PersonFormState>(emptyPerson());
  const [result, setResult] = useState<MatrixResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState<PositionKey | null>(null);

  const [personA, setPersonA] = useState<PersonFormState>(emptyPerson());
  const [personB, setPersonB] = useState<PersonFormState>(emptyPerson());
  const [compatResult, setCompatResult] = useState<{ a: MatrixResult; b: MatrixResult } | null>(null);
  const [compatError, setCompatError] = useState<string | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);
  const compatResultsRef = useRef<HTMLDivElement>(null);

  // /matriz-del-destino/compatibilidad/ redirects here with ?tab=compatibilidad,
  // so honour that on mount. Read in an effect because this also renders on
  // the server, where there is no location.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const tab = new URLSearchParams(window.location.search).get('tab');
    if (tab === 'compatibilidad') setActiveTab('compatibilidad');
  }, []);

  useEffect(() => {
    if (!result) return;
    resultsRef.current?.focus();
    trackCalculatorCompleted(result.central);
  }, [result]);

  useEffect(() => {
    if (!compatResult) return;
    compatResultsRef.current?.focus();
  }, [compatResult]);

  const handleChartSelect = (key: PositionKey) => {
    setActiveKey(key);
    if (result) trackPositionClicked(result.positions, key);
  };

  const handlePersonalSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!person.day || !person.month || !person.year) {
      setError('Selecciona tu día, mes y año de nacimiento.');
      return;
    }

    try {
      const next = calculate({
        day: Number(person.day),
        month: Number(person.month),
        year: Number(person.year),
        name: person.name.trim() || undefined,
      });
      setResult(next);
      setError(null);
      setActiveKey(null);
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : 'No pudimos calcular tu matriz. Verifica tu fecha.');
    }
  };

  const handleCompatSubmit = (event: TargetedEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dateA = parseDate(personA);
    const dateB = parseDate(personB);

    if (!dateA || !dateB) {
      setCompatError('Selecciona ambas fechas de nacimiento.');
      return;
    }

    try {
      const a = calculate({ ...dateA, name: personA.name.trim() || 'Persona 1' });
      const b = calculate({ ...dateB, name: personB.name.trim() || 'Persona 2' });
      setCompatResult({ a, b });
      setCompatError(null);
    } catch (err) {
      setCompatResult(null);
      setCompatError(
        err instanceof Error ? err.message : 'No pudimos calcular la compatibilidad. Verifica las fechas.',
      );
    }
  };

  const nameA = personA.name.trim() || 'Persona 1';
  const nameB = personB.name.trim() || 'Persona 2';

  return (
    <div class="calculator-wrapper">
      {/* The card floats on the dark hero band; results break out below it. */}
      <div class="calculator-card">
        <div class="calculator-inner">
          <div class="calculator-tabs" role="tablist" aria-label="Tipo de cálculo">
            <button
              type="button"
              role="tab"
              id="tab-personal"
              aria-selected={activeTab === 'personal'}
              aria-controls="panel-personal"
              class={activeTab === 'personal' ? 'active' : ''}
              onClick={() => setActiveTab('personal')}
            >
              Personal
            </button>
            <button
              type="button"
              role="tab"
              id="tab-compatibilidad"
              aria-selected={activeTab === 'compatibilidad'}
              aria-controls="panel-compatibilidad"
              class={activeTab === 'compatibilidad' ? 'active' : ''}
              onClick={() => setActiveTab('compatibilidad')}
            >
              Compatibilidad
            </button>
          </div>

          {activeTab === 'personal' && (
            <div role="tabpanel" id="panel-personal" aria-labelledby="tab-personal">
              <form class="calculator-form" noValidate onSubmit={handlePersonalSubmit}>
                <div class="input-row">
                  <DateSelects
                    idPrefix="calc-date"
                    legend="Fecha de nacimiento"
                    state={person}
                    invalid={Boolean(error)}
                    onChange={(patch) => setPerson((prev) => ({ ...prev, ...patch }))}
                  />
                </div>
                <div class="input-row">
                  <div class="input-group">
                    <label class="input-label" for="calc-name">
                      Nombre (opcional)
                    </label>
                    <input
                      id="calc-name"
                      type="text"
                      placeholder="—"
                      value={person.name}
                      onInput={(event) =>
                        setPerson((prev) => ({ ...prev, name: (event.target as HTMLInputElement).value }))
                      }
                    />
                  </div>
                </div>

                {error && (
                  <p class="calculator-error" role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" class="calculate-btn">
                  Calcular mi matriz →
                </button>
                <TrustBadges />
              </form>
            </div>
          )}

          {activeTab === 'compatibilidad' && (
            <div role="tabpanel" id="panel-compatibilidad" aria-labelledby="tab-compatibilidad">
              <form class="calculator-form" noValidate onSubmit={handleCompatSubmit}>
                <div class="input-row">
                  <DateSelects
                    idPrefix="compat-date-a"
                    legend="Persona 1 — Fecha de nacimiento"
                    state={personA}
                    invalid={Boolean(compatError)}
                    onChange={(patch) => setPersonA((prev) => ({ ...prev, ...patch }))}
                  />
                </div>
                <div class="input-row">
                  <DateSelects
                    idPrefix="compat-date-b"
                    legend="Persona 2 — Fecha de nacimiento"
                    state={personB}
                    invalid={Boolean(compatError)}
                    onChange={(patch) => setPersonB((prev) => ({ ...prev, ...patch }))}
                  />
                </div>

                {/* Names are optional and only personalise the comparison copy,
                so they share one row instead of adding two full-height rows
                that would push the submit button past the fold. */}
                <div class="input-row input-row--split">
                  <div class="input-group">
                    <label class="input-label" for="compat-name-a">
                      Nombres (opcional)
                    </label>
                    <input
                      id="compat-name-a"
                      type="text"
                      placeholder="Persona 1"
                      value={personA.name}
                      onInput={(event) =>
                        setPersonA((prev) => ({ ...prev, name: (event.target as HTMLInputElement).value }))
                      }
                    />
                  </div>
                  <div class="input-group">
                    <label class="input-label sr-only" for="compat-name-b">
                      Persona 2 — Nombre (opcional)
                    </label>
                    <input
                      id="compat-name-b"
                      type="text"
                      placeholder="Persona 2"
                      value={personB.name}
                      onInput={(event) =>
                        setPersonB((prev) => ({ ...prev, name: (event.target as HTMLInputElement).value }))
                      }
                    />
                  </div>
                </div>

                {compatError && (
                  <p class="calculator-error" role="alert">
                    {compatError}
                  </p>
                )}

                <button type="submit" class="calculate-btn">
                  Calcular compatibilidad →
                </button>
                <TrustBadges />
              </form>
            </div>
          )}
        </div>
      </div>

      {result && activeTab === 'personal' && (
        <div class="results-section">
          <MatrixResults
            result={result}
            activeKey={activeKey}
            onSelectKey={setActiveKey}
            onChartSelect={handleChartSelect}
            onTabChange={trackTabViewed}
            onShare={(method: ShareMethod) => trackShare(method)}
            containerRef={resultsRef}
          />
        </div>
      )}

      {compatResult && activeTab === 'compatibilidad' && (
        <div class="results-section">
          <div class="flex flex-col gap-8" ref={compatResultsRef} tabIndex={-1} aria-live="polite">
            <div class="grid gap-8 sm:grid-cols-2">
              <div class="flex flex-col gap-4">
                <ResultSummary result={compatResult.a} />
                <MatrixChart positions={compatResult.a.positions} activeKey={null} onSelect={() => {}} />
              </div>
              <div class="flex flex-col gap-4">
                <ResultSummary result={compatResult.b} />
                <MatrixChart positions={compatResult.b.positions} activeKey={null} onSelect={() => {}} />
              </div>
            </div>

            <div class="rounded-2xl border border-accent/40 bg-white p-6 shadow-sm sm:p-8">
              <h2 class="font-heading text-xl font-bold text-ink">Su compatibilidad</h2>
              <p class="mt-3 text-ink-muted">
                {buildComparison(compatResult.a, compatResult.b, nameA, nameB)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
