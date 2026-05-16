import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { saveLead } from "@/lib/leads";
import type { FormField } from "@/landings/types";
import { ThankYouOverlay } from "./ThankYouOverlay";

type Props = {
  landingKey: string;
  landingSlug: string;
  fields: FormField[];
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  footnote?: string;
  className?: string;
};

export function LandingForm({
  landingKey,
  landingSlug,
  fields,
  title = "Réservez votre place",
  subtitle,
  submitLabel = "Envoyer",
  footnote = "Places limitées · Sans engagement initial",
  className = "",
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update(name: string, v: string) {
    setValues((s) => ({ ...s, [name]: v }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await saveLead(landingKey, landingSlug, values);
      setStatus("success");
      setValues({});
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Un problème est survenu. Réessayez dans un instant.");
    }
  }

  if (status === "success") {
    return <ThankYouOverlay onClose={() => setStatus("idle")} />;
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)] ${className}`}
    >
      <div className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
        Formulaire — demande de soumission / inscription
      </div>
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}

      <div className="mt-6 space-y-4">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="block text-sm font-medium text-foreground">
              {f.label}
              {f.required && <span className="text-[var(--brand-red)]"> *</span>}
            </label>
            {f.type === "select" ? (
              <select
                id={f.name}
                required={f.required}
                value={values[f.name] ?? ""}
                onChange={(e) => update(f.name, e.target.value)}
                className="field mt-1.5"
              >
                <option value="" disabled>
                  {f.placeholder ?? "Sélectionnez…"}
                </option>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                id={f.name}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => update(f.name, e.target.value)}
                rows={4}
                className="field mt-1.5"
              />
            ) : (
              <input
                id={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name] ?? ""}
                onChange={(e) => update(f.name, e.target.value)}
                className="field mt-1.5"
              />
            )}
          </div>
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-[var(--brand-red)]">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:bg-[color-mix(in_oklab,var(--brand-blue)_88%,black)] hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
      >
        {status === "submitting" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
        {status === "submitting" ? "Envoi en cours…" : submitLabel}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">{footnote}</p>
    </form>
  );
}
