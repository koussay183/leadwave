import { useEffect, useMemo, useState } from "react";
import { Download, RefreshCw, Inbox, Eye, X } from "lucide-react";
import type { FormField } from "@/landings/types";
import { getLeadsByKey, type LeadRecord } from "@/lib/leads";

type Props = {
  landingKey: string;
  fields: FormField[];
};

export function SubmissionsTable({ landingKey, fields }: Props) {
  const [leads, setLeads] = useState<LeadRecord[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<LeadRecord | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const r = await getLeadsByKey(landingKey);
      setLeads(r);
    } catch (e) {
      console.error(e);
      setError("Impossible de charger les soumissions. Vérifiez vos règles Firestore.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(); }, [landingKey]);

  const stats = useMemo(() => {
    const total = leads?.length ?? 0;
    const today = leads?.filter((l) => l.createdAt && l.createdAt.toDateString() === new Date().toDateString()).length ?? 0;
    const last7 = leads?.filter((l) => l.createdAt && Date.now() - l.createdAt.getTime() < 7 * 86400000).length ?? 0;
    return { total, today, last7 };
  }, [leads]);

  function exportCsv() {
    if (!leads?.length) return;
    const headers = ["createdAt", "landingSlug", ...fields.map((f) => f.name), "userAgent", "referrer"];
    const rows = leads.map((l) => [
      l.createdAt?.toISOString() ?? "",
      csv(l.landingSlug),
      ...fields.map((f) => csv(l.data?.[f.name])),
      csv(l.userAgent),
      csv(l.referrer),
    ]);
    const out = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([out], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${landingKey}-leads.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { l: "Soumissions totales", v: stats.total, c: "var(--brand-blue)" },
          { l: "Aujourd'hui", v: stats.today, c: "var(--brand-red)" },
          { l: "7 derniers jours", v: stats.last7, c: "var(--brand-yellow)" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-white border border-border p-5">
            <div className="text-xs font-medium text-muted-foreground">{s.l}</div>
            <div className="mt-2 text-3xl font-extrabold" style={{ color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white border border-border overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-bold">Soumissions du formulaire</h3>
          <div className="flex gap-2">
            <button onClick={load} className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Rafraîchir
            </button>
            <button onClick={exportCsv} disabled={!leads?.length} className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)] px-3 py-2 text-xs font-semibold text-white disabled:opacity-50">
              <Download size={14} /> Exporter CSV
            </button>
          </div>
        </div>

        {error && <p className="px-5 py-4 text-sm text-[var(--brand-red)]">{error}</p>}
        {leads && leads.length === 0 && !error && (
          <div className="p-10 text-center text-sm text-muted-foreground">
            <Inbox className="mx-auto mb-3" size={28} />
            Aucune soumission pour le moment.
          </div>
        )}

        {leads && leads.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-5 py-3">Date</th>
                  {fields.map((f) => (
                    <th key={f.name} className="text-left font-medium px-5 py-3">{f.label}</th>
                  ))}
                  <th className="text-right font-medium px-5 py-3">Détails</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-t border-border hover:bg-muted/30">
                    <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">{l.createdAt?.toLocaleString("fr-FR") ?? "—"}</td>
                    {fields.map((f) => (
                      <td key={f.name} className="px-5 py-3 max-w-xs truncate">{String(l.data?.[f.name] ?? "—")}</td>
                    ))}
                    <td className="px-5 py-3 text-right">
                      <button onClick={() => setSelected(l)} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-blue)] hover:underline">
                        <Eye size={12} /> Voir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && <LeadDetailsModal lead={selected} fields={fields} onClose={() => setSelected(null)} />}
    </div>
  );
}

function LeadDetailsModal({ lead, fields, onClose }: { lead: LeadRecord; fields: FormField[]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl border border-border max-w-lg w-full max-h-[85vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold">Soumission</h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded"><X size={16} /></button>
        </div>
        <dl className="p-5 space-y-3 text-sm">
          <Row k="Date" v={lead.createdAt?.toLocaleString("fr-FR") ?? "—"} />
          <Row k="Chemin" v={lead.landingSlug} mono />
          {fields.map((f) => (
            <Row key={f.name} k={f.label} v={String(lead.data?.[f.name] ?? "—")} />
          ))}
          {lead.referrer && <Row k="Referrer" v={lead.referrer} mono />}
          {lead.userAgent && <Row k="User-Agent" v={lead.userAgent} mono small />}
        </dl>
      </div>
    </div>
  );
}

function Row({ k, v, mono, small }: { k: string; v: string; mono?: boolean; small?: boolean }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{k}</dt>
      <dd className={`mt-0.5 break-words ${mono ? "font-mono" : ""} ${small ? "text-xs" : ""}`}>{v}</dd>
    </div>
  );
}

function csv(v: unknown): string {
  if (v == null) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
}
