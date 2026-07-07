import { useRef, useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

export interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children: ComponentChildren;
}

let instanceCount = 0;

/**
 * Interactive accordion primitive — a Preact island per CLAUDE.md's
 * architecture rules (accordion is one of the four named island exceptions).
 * Each instance manages its own open/closed state independently.
 */
export default function Accordion({ title, defaultOpen = false, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const idRef = useRef(`accordion-${++instanceCount}`);
  const buttonId = `${idRef.current}-button`;
  const panelId = `${idRef.current}-panel`;

  return (
    <div class="border-b border-surface-alt">
      <h3 class="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          class="flex w-full items-center justify-between gap-4 py-4 text-left font-sans font-medium text-ink"
        >
          <span>{title}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        class="pb-4 text-ink-muted"
      >
        {children}
      </div>
    </div>
  );
}
