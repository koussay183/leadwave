import { useEffect, useMemo, useState } from "react";
import { Download, RefreshCw, Inbox, Eye, X, Search, MessageSquare } from "lucide-react";
import { getContactMessages, type ContactMessage } from "@/lib/contactMessages";

export function ContactMessagesTable() {
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [search, setSearch] = useState("");

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const r = await getContactMessages();
      setMessages(r);
    } catch (e) {
      console.error(e);
      setError("Impossible de charger les messages. Vérifiez vos règles Firestore.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void load(); }, []);

  const filtered = useMemo(() => {
    if (!messages) return [];
    const q = search.trim().toLowerCase();
    if (!q) return messages;
    return messages.filter((m) => {
      const hay = [m.name, m.email, m.company, m.message].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [messages, search]);

  function exportCsv() {
    if (!filtered.length) return;
    const headers = ["createdAt", "name", "email", "company", "message", "userAgent", "referrer"];
    const rows = filtered.map((m) => [
      m.createdAt?.toISOString() ?? "",
      csv(m.name),
      csv(m.email),
      csv(m.company),
      csv(m.message),
      csv(m.userAgent),
      csv(m.referrer),
    ]);
    const out = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([out], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contact-messages.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="mb-8">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="text-[var(--brand-red)]" size={22} />
            Messages de contact
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Soumissions du formulaire de la page <code>/contact</code>.
          </p>
        </div>
        {loading && <span className="text-xs text-muted-foreground">Synchronisation…</span>}
      </div>

      <div className="rounded-2xl bg-white border border-border overflow-hidden">
        <div className="px-4 sm:px-5 py-4 border-b border-border flex flex-wrap items-center gap-3 justify-between">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher par nom, email, société, message…"
              className="w-full rounded-lg border border-input bg-white pl-9 pr-3 py-2 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/15"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-xs font-medium hover:bg-muted">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Rafraîchir
            </button>
            <button
              onClick={exportCsv}
              disabled={!filtered.length}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-blue)] px-3 py-2 text-xs font-semibold text-white disabled:opacity-50"
            >
              <Download size={14} /> Exporter CSV
            </button>
          </div>
        </div>

        {error && <p className="px-5 py-4 text-sm text-[var(--brand-red)]">{error}</p>}

        {messages && messages.length === 0 && !error && (
          <div className="p-10 text-center text-sm text-muted-foreground">
            <Inbox className="mx-auto mb-3" size={28} />
            Aucun message reçu pour le moment.
          </div>
        )}

        {messages && messages.length > 0 && filtered.length === 0 && (
          <div className="p-10 text-center text-sm text-muted-foreground">
            Aucun résultat pour « {search} ».
          </div>
        )}

        {filtered.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-4 sm:px-5 py-3">Date</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3">Nom</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3">Email</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3 hidden md:table-cell">Société</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3 hidden lg:table-cell">Message</th>
                  <th className="text-right font-medium px-4 sm:px-5 py-3">Détails</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id} className="border-t border-border hover:bg-muted/30">
                    <td className="px-4 sm:px-5 py-3 text-muted-foreground whitespace-nowrap">
                      {m.createdAt?.toLocaleString("fr-FR") ?? "—"}
                    </td>
                    <td className="px-4 sm:px-5 py-3 font-medium">{m.name || "—"}</td>
                    <td className="px-4 sm:px-5 py-3">
                      <a href={`mailto:${m.email}`} className="text-[var(--brand-blue)] hover:underline">{m.email || "—"}</a>
                    </td>
                    <td className="px-4 sm:px-5 py-3 hidden md:table-cell">{m.company || "—"}</td>
                    <td className="px-4 sm:px-5 py-3 hidden lg:table-cell max-w-md truncate text-muted-foreground">{m.message || "—"}</td>
                    <td className="px-4 sm:px-5 py-3 text-right">
                      <button onClick={() => setSelected(m)} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-blue)] hover:underline">
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

      {selected && <MessageDetailsModal message={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function MessageDetailsModal({ message, onClose }: { message: ContactMessage; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl border border-border max-w-lg w-full max-h-[85vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold">Message de contact</h3>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded"><X size={16} /></button>
        </div>
        <dl className="p-5 space-y-3 text-sm">
          <Row k="Date" v={message.createdAt?.toLocaleString("fr-FR") ?? "—"} />
          <Row k="Nom" v={message.name || "—"} />
          <Row k="Email" v={message.email || "—"} />
          <Row k="Société" v={message.company || "—"} />
          <Row k="Message" v={message.message || "—"} preserve />
          {message.referrer && <Row k="Referrer" v={message.referrer} mono />}
          {message.userAgent && <Row k="User-Agent" v={message.userAgent} mono small />}
        </dl>
      </div>
    </div>
  );
}

function Row({ k, v, mono, small, preserve }: { k: string; v: string; mono?: boolean; small?: boolean; preserve?: boolean }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{k}</dt>
      <dd className={`mt-0.5 break-words ${mono ? "font-mono" : ""} ${small ? "text-xs" : ""} ${preserve ? "whitespace-pre-wrap" : ""}`}>{v}</dd>
    </div>
  );
}

function csv(v: unknown): string {
  if (v == null) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
}
