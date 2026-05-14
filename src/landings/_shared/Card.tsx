import type { ReactNode } from "react";

/**
 * Unified card primitive for landing pages.
 *  - rounded-2xl + border + bg-white + shadow-soft (consistent across the page)
 *  - `as="article"` by default for SEO/semantic correctness
 *  - `interactive` adds subtle hover lift
 */
type Props = {
  as?: "article" | "div" | "li";
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({ as: As = "article", interactive, className = "", children }: Props) {
  const cls = `rounded-2xl border border-border bg-white ${interactive ? "transition-transform hover:-translate-y-1" : ""} ${className}`;
  return (
    <As className={cls} style={{ boxShadow: "var(--shadow-soft)" }}>
      {children}
    </As>
  );
}

/** Card with a photo header — used for module cards, case studies, etc. */
export function PhotoCard({
  photo,
  alt = "",
  badge,
  overlay,
  height = "h-48",
  children,
  className = "",
}: {
  photo: string;
  alt?: string;
  badge?: ReactNode;
  overlay?: ReactNode;
  height?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={`overflow-hidden flex flex-col ${className}`}>
      <div className={`relative ${height} overflow-hidden`}>
        <img src={photo} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
        {badge && <div className="absolute top-4 left-4">{badge}</div>}
        {overlay && <div className="absolute inset-x-4 bottom-4 text-white">{overlay}</div>}
      </div>
      <div className="p-6 flex-1 flex flex-col">{children}</div>
    </Card>
  );
}

/** Standardized icon tile used inside cards. */
export function IconTile({
  icon: Icon,
  size = 18,
  tone = "blue",
}: {
  icon: React.ComponentType<{ size?: number }>;
  size?: number;
  tone?: "blue" | "red" | "yellow";
}) {
  const cls =
    tone === "red"
      ? "bg-[color-mix(in_oklab,var(--brand-red)_14%,white)] text-[var(--brand-red)]"
      : tone === "yellow"
        ? "bg-[color-mix(in_oklab,var(--brand-yellow)_22%,white)] text-[oklch(0.45_0.12_70)]"
        : "bg-[color-mix(in_oklab,var(--brand-blue)_14%,white)] text-[var(--brand-blue)]";
  return (
    <span className={`inline-flex items-center justify-center h-10 w-10 rounded-lg shrink-0 ${cls}`}>
      <Icon size={size} />
    </span>
  );
}
