import { useState } from "react";
import { Save, RotateCcw, ExternalLink, AlertCircle } from "lucide-react";
import { normalizeSlug } from "@/lib/landingConfig";

type Props = {
  currentSlug: string;
  defaultSlug: string;
  onSave: (slug: string) => Promise<void>;
};

export function PathEditor({ currentSlug, defaultSlug, onSave }: Props) {
  const [value, setValue] = useState(currentSlug);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const normalized = normalizeSlug(value);
  const dirty = normalized !== currentSlug;

  async function handleSave() {
    setError(null);
    if (normalized.length < 2) { setError("Le chemin doit contenir au moins un caractère après le /."); return; }
    if (normalized === "/" || ["/admin", "/contact", "/formations", "/publicite-media"].includes(normalized)) {
      setError(`Le chemin "${normalized}" est réservé.`);
      return;
    }
    setSaving(true);
    try {
      await onSave(normalized);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-white p-5 sm:p-6">
      <h3 className="font-bold">Chemin (URL) de la landing page</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Cette landing est accessible publiquement sur ce chemin. Vous pouvez le personnaliser.
      </p>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center rounded-lg border border-input bg-white px-3 focus-within:border-[var(--brand-blue)]">
          <span className="text-sm text-muted-foreground select-none">leadwave.tn</span>
          <input
            value={value}
            onChange={(e) => { setValue(e.target.value); setSaved(false); }}
            placeholder="/ma-landing"
            className="flex-1 bg-transparent py-2.5 px-1 text-sm font-mono outline-none"
          />
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !dirty}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-blue)] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          <Save size={14} /> {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
      </div>

      {dirty && (
        <p className="mt-2 text-xs text-muted-foreground">
          Sera enregistré comme : <span className="font-mono font-semibold text-foreground">{normalized}</span>
        </p>
      )}
      {error && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {saved && <p className="mt-3 text-xs text-emerald-600 font-medium">✓ Chemin enregistré. Rafraîchissez la page pour appliquer.</p>}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          Chemin par défaut : <code className="font-mono">{defaultSlug}</code>
        </div>
        <div className="flex gap-2">
          {currentSlug !== defaultSlug && (
            <button
              onClick={() => { setValue(defaultSlug); }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-muted"
            >
              <RotateCcw size={12} /> Restaurer
            </button>
          )}
          <a
            href={currentSlug}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium hover:bg-muted"
          >
            Ouvrir <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
