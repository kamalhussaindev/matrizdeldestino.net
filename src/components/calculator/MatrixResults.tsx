import type { Ref } from 'preact';
import type { MatrixResult } from '../../lib/matrix/types';
import type { PositionKey } from '../../lib/matrix/interpretations';
import MatrixChart from './MatrixChart';
import ResultSummary from './ResultSummary';
import PositionBreakdown from './PositionBreakdown';
import InsightTabs from './InsightTabs';
import ShareResult, { type ShareMethod } from './ShareResult';

// The full result stack, extracted so MatrixCalculator (matriz infantil) and
// UnifiedCalculator (homepage) render an identical read-out without
// duplicating the JSX or the chart/breakdown selection wiring.
//
// `activeKey` is the shared selection channel: MatrixChart and
// PositionBreakdown are siblings that both read and write it, so it has to
// be lifted to whichever component owns the form.

export interface MatrixResultsProps {
  result: MatrixResult;
  activeKey: PositionKey | null;
  /** Fired by PositionBreakdown; passing null collapses the open row. */
  onSelectKey: (key: PositionKey | null) => void;
  /** Fired by MatrixChart; separate so the caller can log the click. */
  onChartSelect: (key: PositionKey) => void;
  onTabChange?: (tab: string) => void;
  onShare?: (method: ShareMethod) => void;
  /** The caller focuses this on calculation so screen readers land here. */
  containerRef?: Ref<HTMLDivElement>;
}

export default function MatrixResults({
  result,
  activeKey,
  onSelectKey,
  onChartSelect,
  onTabChange,
  onShare,
  containerRef,
}: MatrixResultsProps) {
  return (
    <div class="flex flex-col gap-6" ref={containerRef} tabIndex={-1} aria-live="polite">
      <ResultSummary result={result} />

      {/* The chart and the tabs have no chrome of their own, so they get a
          panel here — otherwise they float on the page background between
          two carded sections and the result stops reading as one object. */}
      <section class="card-surface p-5 sm:p-8">
        <header class="mb-2 text-center">
          <h3 class="font-heading text-lg font-semibold text-ink">Tu octagrama</h3>
          <p class="mt-1 text-sm text-ink-muted">Haz clic en cualquier punto para leer su interpretación.</p>
        </header>
        <MatrixChart positions={result.positions} activeKey={activeKey} onSelect={onChartSelect} />
      </section>

      <PositionBreakdown result={result} activeKey={activeKey} onSelectKey={onSelectKey} />

      <section class="card-surface p-5 sm:p-8">
        <h3 class="mb-4 font-heading text-lg font-semibold text-ink">Tu lectura por temas</h3>
        <InsightTabs result={result} onTabChange={onTabChange} />
      </section>

      <ShareResult result={result} onShare={onShare} />
    </div>
  );
}
