import type { ReactNode } from "react";

/**
 * Standard landing-page section wrapper.
 *
 * Conventions enforced here so every landing has the same rhythm:
 *  - Vertical padding: py-16 sm:py-20 lg:py-24 (CTA blocks use `compact`)
 *  - Max width:        max-w-6xl
 *  - Alternation:      pass `tone="surface"` for the subtle blue-tinted sections.
 *                      Avoid 3+ different tones in one page; alternate white ↔ surface.
 */
type Tone = "white" | "surface" | "brand";

const TONE_BG: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-[color-mix(in_oklab,var(--brand-blue)_4%,white)]",
  brand: "",
};

type Props = {
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  tone?: Tone;
  compact?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  ariaLabelledBy,
  ariaLabel,
  tone = "white",
  compact,
  className = "",
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={`${TONE_BG[tone]} ${compact ? "py-10 sm:py-14" : "py-16 sm:py-20 lg:py-24"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type HeaderProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ id, eyebrow, title, lead, align = "left", className = "" }: HeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`${alignClass} max-w-3xl ${className}`}>
      <span className="chip">{eyebrow}</span>
      <h2 id={id} className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {lead && <p className="mt-4 text-foreground/80 leading-relaxed text-sm sm:text-base">{lead}</p>}
    </header>
  );
}
