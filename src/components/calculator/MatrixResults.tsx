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
    <div class="flex flex-col gap-8" ref={containerRef} tabIndex={-1} aria-live="polite">
      <ResultSummary result={result} />
      <MatrixChart positions={result.positions} activeKey={activeKey} onSelect={onChartSelect} />
      <PositionBreakdown result={result} activeKey={activeKey} onSelectKey={onSelectKey} />
      <InsightTabs result={result} onTabChange={onTabChange} />
      <ShareResult result={result} onShare={onShare} />
    </div>
  );
}
