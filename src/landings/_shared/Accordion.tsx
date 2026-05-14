import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItemData = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItemData[] }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <AccordionItem key={i} {...it} />
      ))}
    </div>
  );
}

function AccordionItem({ q, a }: AccordionItemData) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-inset"
      >
        <span className="font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
