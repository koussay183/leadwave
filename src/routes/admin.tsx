import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Lock,
  ChevronLeft,
  ExternalLink,
  ArrowUpRight,
  Inbox,
  Settings as SettingsIcon,
  ListChecks,
  Database,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { useLandings } from "@/landings/useLandings";
import type { ResolvedLanding, FormField } from "@/landings/types";
import { firebaseConfigured } from "@/lib/firebase";
import { saveOverride } from "@/lib/landingConfig";
import { getLeadsByKey } from "@/lib/leads";
import { FormEditor } from "./admin/FormEditor";
import { PathEditor } from "./admin/PathEditor";
import { SubmissionsTable } from "./admin/SubmissionsTable";
import logo from "@/assets/logo.png";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ?? "leadwave123@@2";
const STORAGE_KEY = "leadwave_admin_session";

function useAdminAuth() {
  const [authed, setAuthed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "1";
  });
  return {
    authed,
    login: (p: string) => {
      if (p === ADMIN_PASSWORD) { localStorage.setItem(STORAGE_KEY, "1"); setAuthed(true); return true; }
      return false;
    },
    logout: () => { localStorage.removeItem(STORAGE_KEY); setAuthed(false); },
  };
}

export default function AdminPage() {
  const { authed, login, logout } = useAdminAuth();
  useEffect(() => { document.title = "Admin · LeadWave"; }, []);
  if (!authed) return <LoginScreen onSubmit={login} />;
  return <Dashboard onLogout={logout} />;
}

function LoginScreen({ onSubmit }: { onSubmit: (p: string) => boolean }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState<string | null>(null);
  function submit(e: FormEvent) {
    e.preventDefault();
    if (!onSubmit(pw)) setError("Mot de passe incorrect.");
  }
  return (
    <div className="min-h-screen grid place-items-center px-4" style={{ background: "var(--gradient-hero)" }}>
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <img src={logo} alt="LeadWave" className="h-9 w-auto" />
          <span className="text-sm font-bold tracking-wide text-muted-foreground">/ ADMIN</span>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Connexion administrateur</h1>
        <p className="mt-1 text-sm text-muted-foreground">Saisissez le mot de passe pour gérer les landing pages.</p>
        <label className="mt-6 block text-sm font-medium">Mot de passe</label>
        <div className="mt-1.5 relative">
          <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoFocus
            className="w-full rounded-lg border border-input bg-white pl-10 pr-3.5 py-2.5 text-sm outline-none focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/15"
          />
        </div>
        {error && <p className="mt-3 text-sm text-[var(--brand-red)]">{error}</p>}
        <button className="mt-6 w-full rounded-lg bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform">Se connecter</button>
        <Link to="/" className="mt-4 block text-center text-xs text-muted-foreground hover:text-[var(--brand-blue)]">← Retour au site</Link>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const { landings, loading, refresh } = useLandings();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selected = useMemo(() => landings.find((l) => l.key === selectedKey) ?? null, [landings, selectedKey]);

  return (
    <div className="min-h-screen flex flex-col bg-[color-mix(in_oklab,var(--brand-blue)_4%,white)]">
      <header className="h-14 sm:h-16 px-4 sm:px-6 border-b border-border bg-white flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="LeadWave" className="h-7 sm:h-8 w-auto shrink-0" />
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-[10px] font-bold tracking-[0.18em] text-foreground">ADMIN</span>
            {selected && (
              <>
                <span>/</span>
                <span className="truncate">{selected.title}</span>
              </>
            )}
          </div>
        </div>
        <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-xs sm:text-sm font-medium hover:bg-muted">
          <LogOut size={14} /> <span className="hidden sm:inline">Déconnexion</span>
        </button>
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto w-full">
        {!firebaseConfigured && <FirebaseWarning />}
        {!selected ? (
          <LandingsTable landings={landings} loading={loading} onOpen={setSelectedKey} />
        ) : (
          <LandingDetail
            key={selected.key}
            landing={selected}
            onBack={() => setSelectedKey(null)}
            onRefresh={refresh}
          />
        )}
      </main>
    </div>
  );
}

function FirebaseWarning() {
  return (
    <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
      <strong>Firebase non configuré.</strong> Copiez <code>.env.example</code> vers <code>.env.local</code> et renseignez <code>VITE_FIREBASE_*</code>. Les soumissions et personnalisations ne seront pas persistées.
    </div>
  );
}

function LandingsTable({
  landings,
  loading,
  onOpen,
}: {
  landings: ResolvedLanding[];
  loading: boolean;
  onOpen: (key: string) => void;
}) {
  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <LayoutDashboard className="text-[var(--brand-blue)]" size={26} />
            Landing pages
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Toutes les landing pages enregistrées dans le code. Cliquez sur une ligne pour la gérer.
          </p>
        </div>
        {loading && <span className="text-xs text-muted-foreground">Synchronisation…</span>}
      </div>

      <div className="rounded-2xl bg-white border border-border overflow-hidden">
        {landings.length === 0 ? (
          <div className="p-12 text-center">
            <Inbox className="mx-auto text-muted-foreground" size={32} />
            <p className="mt-3 text-sm text-muted-foreground">
              Aucune landing page. Ajoutez-en une dans <code>src/landings/registry.ts</code>.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/40 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-4 sm:px-5 py-3.5">Landing page</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3.5">Chemin actuel</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3.5 hidden md:table-cell">Champs</th>
                  <th className="text-left font-medium px-4 sm:px-5 py-3.5 hidden lg:table-cell">Personnalisé</th>
                  <th className="px-4 sm:px-5 py-3.5"></th>
                </tr>
              </thead>
              <tbody>
                {landings.map((l) => (
                  <LandingRow key={l.key} landing={l} onOpen={() => onOpen(l.key)} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function LandingRow({ landing, onOpen }: { landing: ResolvedLanding; onOpen: () => void }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    void getLeadsByKey(landing.key).then((r) => { if (active) setCount(r.length); }).catch(() => {});
    return () => { active = false; };
  }, [landing.key]);

  return (
    <tr onClick={onOpen} className="border-t border-border hover:bg-muted/30 cursor-pointer">
      <td className="px-4 sm:px-5 py-4">
        <div className="font-semibold">{landing.title}</div>
        <div className="mt-0.5 text-xs text-muted-foreground line-clamp-1 max-w-md">{landing.description}</div>
        <div className="mt-1.5 text-[11px] text-muted-foreground">
          {count != null ? <span className="inline-flex items-center gap-1 font-medium text-foreground"><Database size={11} /> {count} soumission{count > 1 ? "s" : ""}</span> : null}
        </div>
      </td>
      <td className="px-4 sm:px-5 py-4">
        <a href={landing.slug} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[var(--brand-blue)] font-mono text-xs sm:text-sm font-semibold hover:underline">
          {landing.slug} <ExternalLink size={11} />
        </a>
      </td>
      <td className="px-4 sm:px-5 py-4 hidden md:table-cell text-xs text-muted-foreground">
        {landing.fields.length} champ{landing.fields.length > 1 ? "s" : ""}
      </td>
      <td className="px-4 sm:px-5 py-4 hidden lg:table-cell">
        <div className="flex flex-col gap-1">
          <Badge active={landing.hasPathOverride} label="Chemin" />
          <Badge active={landing.hasFieldsOverride} label="Formulaire" />
        </div>
      </td>
      <td className="px-4 sm:px-5 py-4 text-right">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-blue)]">
          Gérer <ArrowUpRight size={13} />
        </span>
      </td>
    </tr>
  );
}

function Badge({ active, label }: { active: boolean; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${active ? "text-emerald-700" : "text-muted-foreground"}`}>
      {active ? <CheckCircle2 size={11} /> : <Circle size={11} />} {label}
    </span>
  );
}

type Tab = "overview" | "settings" | "form" | "data";

function LandingDetail({
  landing,
  onBack,
  onRefresh,
}: {
  landing: ResolvedLanding;
  onBack: () => void;
  onRefresh: () => Promise<void>;
}) {
  const [tab, setTab] = useState<Tab>("overview");

  async function saveFields(fields: FormField[]) {
    await saveOverride(landing.key, { fieldsOverride: fields });
    await onRefresh();
  }

  async function savePath(pathOverride: string) {
    await saveOverride(landing.key, { pathOverride });
    await onRefresh();
  }

  const tabs: { id: Tab; label: string; icon: typeof SettingsIcon }[] = [
    { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
    { id: "settings", label: "Réglages", icon: SettingsIcon },
    { id: "form", label: "Formulaire", icon: ListChecks },
    { id: "data", label: "Soumissions", icon: Database },
  ];

  return (
    <section>
      <button onClick={onBack} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ChevronLeft size={16} /> Toutes les landings
      </button>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{landing.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{landing.description}</p>
          <a href={landing.slug} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-blue)] hover:underline">
            leadwave.tn{landing.slug} <ExternalLink size={11} />
          </a>
        </div>
        <div className="text-right text-xs text-muted-foreground">
          <div>Clé interne</div>
          <code className="font-mono font-semibold text-foreground">{landing.key}</code>
        </div>
      </div>

      <div className="border-b border-border mb-6 overflow-x-auto">
        <nav className="flex gap-1 -mb-px">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "border-[var(--brand-blue)] text-[var(--brand-blue)]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon size={14} /> {t.label}
            </button>
          ))}
        </nav>
      </div>

      {tab === "overview" && <OverviewTab landing={landing} onGoTo={setTab} />}
      {tab === "settings" && (
        <PathEditor currentSlug={landing.slug} defaultSlug={landing.defaultSlug} onSave={savePath} />
      )}
      {tab === "form" && (
        <FormEditor initialFields={landing.fields} defaultFields={landing.defaultFields} onSave={saveFields} />
      )}
      {tab === "data" && <SubmissionsTable landingKey={landing.key} fields={landing.fields} />}
    </section>
  );
}

function OverviewTab({ landing, onGoTo }: { landing: ResolvedLanding; onGoTo: (t: Tab) => void }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let active = true;
    void getLeadsByKey(landing.key).then((r) => { if (active) setCount(r.length); }).catch(() => {});
    return () => { active = false; };
  }, [landing.key]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="Soumissions reçues" onClick={() => onGoTo("data")}>
        <div className="text-4xl font-extrabold text-[var(--brand-blue)]">{count ?? "—"}</div>
        <div className="mt-1 text-xs text-muted-foreground">Cliquez pour voir les données</div>
      </Card>
      <Card title="Chemin public" onClick={() => onGoTo("settings")}>
        <div className="font-mono text-sm font-semibold break-all">{landing.slug}</div>
        <div className="mt-1 text-xs text-muted-foreground">{landing.hasPathOverride ? "Personnalisé" : "Par défaut"}</div>
      </Card>
      <Card title="Champs du formulaire" onClick={() => onGoTo("form")}>
        <div className="text-4xl font-extrabold text-[var(--brand-red)]">{landing.fields.length}</div>
        <div className="mt-1 text-xs text-muted-foreground">{landing.hasFieldsOverride ? "Personnalisé" : "Par défaut"}</div>
      </Card>
    </div>
  );
}

function Card({ title, children, onClick }: { title: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-left rounded-2xl bg-white border border-border p-6 hover:-translate-y-0.5 transition-transform">
      <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{title}</div>
      <div className="mt-3">{children}</div>
    </button>
  );
}
