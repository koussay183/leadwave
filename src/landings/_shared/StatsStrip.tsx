import type { ComponentType } from "react";

type Stat = {
  icon: ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  value: string;
  label: string;
};

/**
 * Inline 4-up stats strip — same dimensions on every landing.
 * Render inside <Section tone="surface" compact>.
 */
export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s) => (
        <li key={s.label} className="text-center">
          <s.icon className="mx-auto text-[var(--brand-blue)]" size={22} aria-hidden />
          <div className="mt-3 text-2xl sm:text-3xl font-extrabold tabular-nums">{s.value}</div>
          <div className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
        </li>
      ))}
    </ul>
  );
}
