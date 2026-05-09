import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, LineChart, Rocket, Activity, FileBarChart, Settings2, ClipboardList } from "lucide-react";
import { useState } from "react";
import ads from "@/assets/ads-illustration.png";

const faqs = [
  {
    q: "Qu'est-ce que le Media Buying et pourquoi est-il important ?",
    a: "Le Media Buying consiste à acheter des espaces publicitaires sur des plateformes numériques comme Google, Facebook ou Instagram. Il garantit que vos publicités atteignent le bon public au bon moment, maximisant ROI et visibilité.",
  },
  {
    q: "Comment déterminez-vous le budget de mes campagnes ?",
    a: "Nous analysons vos objectifs, votre marché et vos concurrents pour proposer un budget optimal, ajusté en continu selon les performances mesurées via Google Analytics 4 et Tag Manager.",
  },
  {
    q: "Quels types de publicités gérez-vous ?",
    a: "Search Ads (Google), Display, YouTube, Performance Max, ainsi que Meta Ads (Facebook/Instagram), LinkedIn Ads et TikTok Ads.",
  },
];

export default function PubliciteMedia() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="blob bg-[var(--brand-red)] w-80 h-80 -top-10 -right-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="chip">Publicité Digitale</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              Générez plus de <span className="text-[var(--brand-red)]">leads</span> et de <span className="text-[var(--brand-blue)]">ventes</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              La publicité digitale est essentielle pour toucher vos clients cibles. Avec des stratégies adaptées,
              nous vous aidons à augmenter vos leads et vos ventes.
            </p>
            <Link to="/contact" className="btn btn-primary mt-8">Prendre rendez-vous <ArrowRight size={16} /></Link>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-red)_15%,transparent)]" />
            <img src={ads} alt="Publicité digitale" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">Notre méthode</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Pourquoi choisir notre expertise en publicité digitale ?</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", icon: Activity, color: "var(--brand-blue)", t: "Une base de tracking solide", d: "Tunnel de vente performant et suivi fiable avec Google Analytics 4 et Tag Manager." },
            { n: "02", icon: Rocket, color: "var(--brand-yellow)", t: "Un lancement structuré", d: "Campagnes lancées avec une stratégie claire et alignée sur votre tunnel de vente." },
            { n: "03", icon: LineChart, color: "var(--brand-red)", t: "Suivi & optimisation continue", d: "Analyse hebdomadaire et améliorations pour maximiser durablement votre ROI." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl bg-card border border-border p-8 hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold" style={{ color: s.color }}>{s.n}</span>
                <s.icon size={28} style={{ color: s.color }} />
              </div>
              <h3 className="mt-4 font-bold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[color-mix(in_oklab,var(--brand-blue)_5%,white)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Nos solutions</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Ce que nous pouvons faire pour vous</h2>
            <p className="mt-3 text-muted-foreground">Maximisez le potentiel de votre marque avec nos solutions expertes en publicité digitale.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { i: ClipboardList, c: "var(--brand-blue)", t: "Plans Stratégiques & Budgétaires", d: "Plans personnalisés Google Ads & social, optimisés via GA4 et Tag Manager." },
              { i: Settings2, c: "var(--brand-yellow)", t: "Gestion Complète des Comptes", d: "Déploiement de campagnes avec attentes claires et estimations précises." },
              { i: FileBarChart, c: "var(--brand-red)", t: "Reporting & Suivi des Performances", d: "Rapports détaillés et optimisations pour maximiser votre ROI." },
            ].map((s) => (
              <div key={s.t} className="rounded-3xl bg-white border border-border p-8">
                <div className="h-14 w-14 grid place-items-center rounded-2xl" style={{ background: `color-mix(in oklab, ${s.c} 18%, white)`, color: s.c }}>
                  <s.i size={26} />
                </div>
                <h3 className="mt-5 font-bold text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <span className="chip">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Avez-vous des questions ?</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button className="w-full text-left p-5 flex items-center justify-between gap-4" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold">{f.q}</span>
                <span className="h-8 w-8 grid place-items-center rounded-full text-white shrink-0" style={{ background: open === i ? "var(--brand-red)" : "var(--brand-blue)" }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden text-center" style={{ background: "var(--gradient-cta)" }}>
          <h3 className="text-2xl sm:text-3xl font-bold">Besoin de plus d'informations ?</h3>
          <p className="mt-2 text-white/85">Vous avez des questions ou souhaitez en savoir plus ? Contactez-nous dès maintenant.</p>
          <Link to="/contact" className="btn btn-accent mt-6">Nous appeler <ArrowRight size={16} /></Link>
        </div>
      </section>
    </Layout>
  );
}
