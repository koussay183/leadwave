import { useState } from "react";
import { Plus, Trash2, GripVertical, ChevronUp, ChevronDown, RotateCcw, Save, AlertCircle } from "lucide-react";
import type { FormField, FormFieldType } from "@/landings/types";

const TYPES: { value: FormFieldType; label: string }[] = [
  { value: "text", label: "Texte" },
  { value: "email", label: "E-mail" },
  { value: "tel", label: "Téléphone" },
  { value: "textarea", label: "Texte long" },
  { value: "select", label: "Liste déroulante" },
];

type Props = {
  initialFields: FormField[];
  defaultFields: FormField[];
  onSave: (fields: FormField[]) => Promise<void>;
};

export function FormEditor({ initialFields, defaultFields, onSave }: Props) {
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function update(i: number, patch: Partial<FormField>) {
    setFields((s) => s.map((f, idx) => (idx === i ? { ...f, ...patch } : f)));
    setSaved(false);
  }

  function addField() {
    const n = fields.length + 1;
    setFields((s) => [
      ...s,
      { name: `field${n}`, label: `Nouveau champ ${n}`, type: "text", required: false },
    ]);
    setSaved(false);
  }

  function remove(i: number) {
    setFields((s) => s.filter((_, idx) => idx !== i));
    setSaved(false);
  }

  function move(i: number, dir: -1 | 1) {
    setFields((s) => {
      const j = i + dir;
      if (j < 0 || j >= s.length) return s;
      const copy = [...s];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
    setSaved(false);
  }

  function setOptions(i: number, raw: string) {
    const options = raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [value, ...rest] = line.split("|");
        const label = rest.join("|").trim() || value.trim();
        return { value: value.trim(), label };
      });
    update(i, { options });
    setSaved(false);
  }

  async function handleSave() {
    setError(null);
    const names = new Set<string>();
    for (const f of fields) {
      if (!f.name.trim()) { setError("Tous les champs doivent avoir un nom technique."); return; }
      if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(f.name)) {
        setError(`Nom technique invalide "${f.name}" — lettres, chiffres et _ uniquement, doit commencer par une lettre.`);
        return;
      }
      if (names.has(f.name)) { setError(`Le nom technique "${f.name}" est utilisé deux fois.`); return; }
      names.add(f.name);
      if (!f.label.trim()) { setError("Tous les champs doivent avoir un libellé."); return; }
      if (f.type === "select" && (!f.options || f.options.length === 0)) {
        setError(`Le champ "${f.label}" est une liste mais n'a pas d'options.`);
        return;
      }
    }
    setSaving(true);
    try {
      await onSave(fields);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-base font-bold">Champs du formulaire</h3>
          <p className="text-xs text-muted-foreground">Glissez l'ordre, modifiez ou ajoutez des champs.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => { setFields(defaultFields); setSaved(false); }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted"
          >
            <RotateCcw size={14} /> Réinitialiser
          </button>
          <button
            type="button"
            onClick={addField}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted"
          >
            <Plus size={14} /> Ajouter un champ
          </button>
        </div>
      </div>

      {fields.length === 0 && (
        <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
          Aucun champ. Cliquez sur "Ajouter un champ" pour commencer.
        </div>
      )}

      <ul className="space-y-3">
        {fields.map((f, i) => (
          <li key={i} className="rounded-xl border border-border bg-white p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex flex-col gap-1 pt-2">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="text-muted-foreground hover:text-foreground disabled:opacity-30">
                  <ChevronUp size={16} />
                </button>
                <GripVertical size={16} className="text-muted-foreground/50" />
                <button type="button" onClick={() => move(i, 1)} disabled={i === fields.length - 1} className="text-muted-foreground hover:text-foreground disabled:opacity-30">
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="flex-1 grid sm:grid-cols-2 gap-3">
                <Labeled label="Libellé (visible)">
                  <input
                    value={f.label}
                    onChange={(e) => update(i, { label: e.target.value })}
                    className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus:border-[var(--brand-blue)]"
                  />
                </Labeled>
                <Labeled label="Nom technique (clé JSON)">
                  <input
                    value={f.name}
                    onChange={(e) => update(i, { name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm font-mono outline-none focus:border-[var(--brand-blue)]"
                  />
                </Labeled>
                <Labeled label="Type">
                  <select
                    value={f.type}
                    onChange={(e) => update(i, { type: e.target.value as FormFieldType })}
                    className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus:border-[var(--brand-blue)]"
                  >
                    {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </Labeled>
                <Labeled label="Placeholder">
                  <input
                    value={f.placeholder ?? ""}
                    onChange={(e) => update(i, { placeholder: e.target.value })}
                    className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus:border-[var(--brand-blue)]"
                  />
                </Labeled>
                {f.type === "select" && (
                  <Labeled label="Options (une par ligne, format: valeur|libellé)" full>
                    <textarea
                      value={(f.options ?? []).map((o) => `${o.value}|${o.label}`).join("\n")}
                      onChange={(e) => setOptions(i, e.target.value)}
                      rows={Math.max(3, (f.options?.length ?? 0))}
                      className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm font-mono outline-none focus:border-[var(--brand-blue)]"
                      placeholder={"freelance|Freelance\nentreprise|Salarié"}
                    />
                  </Labeled>
                )}
                <div className="sm:col-span-2 flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={f.required ?? false}
                      onChange={(e) => update(i, { required: e.target.checked })}
                      className="h-4 w-4"
                    />
                    Champ obligatoire
                  </label>
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-red)] hover:underline"
                  >
                    <Trash2 size={14} /> Supprimer
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 flex items-center justify-end gap-3">
        {saved && <span className="text-xs text-emerald-600 font-medium">✓ Enregistré</span>}
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)] px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          <Save size={14} /> {saving ? "Enregistrement…" : "Enregistrer le formulaire"}
        </button>
      </div>
    </div>
  );
}

function Labeled({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
