import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  BarChart3,
  Megaphone,
  GraduationCap,
  Search,
  ShoppingBag,
  Share2,
  Globe,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Quote,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { brandLogos } from "@/components/site/BrandLogos";
import { HeroIllustration } from "@/components/site/HeroIllustration";
import training from "@/assets/training-illustration.png";

export default function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://leadwave.tn/#org",
        name: "LeadWave Agency",
        description:
          "Agence de publicité digitale BtoB en Tunisie spécialisée en Google Ads, Meta Ads et formations marketing digital.",
        url: "https://leadwave.tn",
        logo: "https://leadwave.tn/favicon.png",
        sameAs: ["https://www.facebook.com/leadwave", "https://www.linkedin.com/company/leadwave"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenue Farhat Hached, Megrine Sidi Rezig",
          postalCode: "2033",
          addressCountry: "TN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+216 28 776 710",
          contactType: "customer service",
          email: "info@leadwave.tn",
          areaServed: ["TN", "FR", "EU"],
          availableLanguage: ["French", "English", "Arabic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://leadwave.tn/#website",
        url: "https://leadwave.tn",
        name: "LeadWave",
        publisher: { "@id": "https://leadwave.tn/#org" },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <Layout>
      <Seo
        title="LeadWave — Agence Google Ads & Formation Marketing Digital | Tunisie"
        description="Agence de publicité digitale BtoB en Tunisie. Génération de leads qualifiés via Google Ads et Meta Ads. Formations professionnelles PPC & SEM."
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }} aria-labelledby="home-h1">
        <div className="blob bg-[var(--brand-yellow)] w-72 h-72 -top-24 -right-10" aria-hidden="true" />

        {/* Decorative dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 grid lg:grid-cols-[1.15fr_1fr] gap-10 sm:gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)] border border-border">
              <Sparkles size={12} /> Agence Google Ads · Tunisie
            </span>
            <h1 id="home-h1" className="mt-4 sm:mt-5 text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Publicité digitale qui transforme votre{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--brand-blue)]">trafic</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 -z-0 rounded"
                  style={{ background: "color-mix(in oklab, var(--brand-yellow) 60%, transparent)" }}
                />
              </span>{" "}
              en <span className="text-[var(--brand-red)]">leads qualifiés</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Nous concevons et opérons des campagnes <strong>Google Ads</strong> & <strong>Meta Ads</strong>{" "}
              orientées résultat — et formons les marketeurs aux mêmes méthodes que celles que nous appliquons à
              nos clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Auditer ma stratégie <ArrowRight size={16} />
              </Link>
              <Link to="/formations" className="btn btn-outline">
                Découvrir les formations
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#2C6E91", "#F2B544", "#D85059", "#4A8FB3"].map((c, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-white grid place-items-center text-white text-xs font-bold"
                      style={{ background: c }}
                    >
                      {["LW", "AB", "SL", "+"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">+50 clients accompagnés</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--brand-yellow)]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
                <span className="ml-1 text-muted-foreground font-medium">4.9 / 5</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <HeroIllustration />
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/40 bg-white/40 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: "+150", l: "Campagnes" },
              { n: "+50", l: "Clients B2B" },
              { n: "×4", l: "ROI moyen" },
              { n: "98%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-[var(--brand-blue)]">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS WE MASTER */}
      <section className="border-y border-border bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Plateformes & technologies que nous maîtrisons
          </p>
          <ul className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {brandLogos.map((b) => (
              <li
                key={b.name}
                className="group flex flex-col items-center justify-center gap-2 h-16 opacity-70 hover:opacity-100 transition"
                title={b.name}
              >
                <b.component className="h-7 w-7 sm:h-8 sm:w-8" />
                <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {b.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">Nos services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Une approche complète, du média à la formation
          </h2>
          <p className="mt-4 text-muted-foreground">
            LeadWave conçoit, opère et optimise vos acquisitions digitales — et transmet cette expertise via des
            formations professionnelles à fort impact.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              color: "var(--brand-blue)",
              title: "Google Ads",
              desc: "Campagnes Search, Performance Max & YouTube optimisées pour la génération de leads B2B et l'e-commerce.",
              cta: "Auditer ma stratégie",
              to: "/contact",
            },
            {
              icon: Share2,
              color: "var(--brand-red)",
              title: "Meta & Social Ads",
              desc: "Acquisition et remarketing sur Facebook, Instagram et LinkedIn — créatifs orientés conversion.",
              cta: "Prendre rendez-vous",
              to: "/contact",
            },
            {
              icon: GraduationCap,
              color: "var(--brand-yellow)",
              title: "Formations PPC / SEM",
              desc: "Formations 100% pratiques sur de vrais comptes clients — Google Ads, SEO, Web Analytics.",
              cta: "Voir les formations",
              to: "/formations",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-card p-8 border border-border hover:border-transparent transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div
                className="h-14 w-14 grid place-items-center rounded-2xl mb-6"
                style={{ background: `color-mix(in oklab, ${s.color} 18%, white)`, color: s.color }}
              >
                <s.icon size={26} />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-blue)] group-hover:gap-2 transition-all"
              >
                {s.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIGITAL */}
      <section className="bg-[color-mix(in_oklab,var(--brand-blue)_5%,white)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="chip">Pourquoi nous</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Une méthode éprouvée. Des résultats mesurables.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Chaque euro investi est tracé. Chaque campagne est optimisée. Nous travaillons en cycle court
              pour faire baisser le coût par lead et augmenter la qualité des prospects.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Audit gratuit de votre compte publicitaire",
                "Tracking irréprochable (GA4, GTM, conversions serveurs)",
                "Budget optimisé, ROI mesurable chaque semaine",
                "Reporting clair et actionable",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--brand-blue)] mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary mt-8">
              Demander mon audit gratuit <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, label: "Ciblage précis", color: "var(--brand-blue)" },
              { icon: BarChart3, label: "Data tracking", color: "var(--brand-red)" },
              { icon: Megaphone, label: "Visibilité", color: "var(--brand-yellow)" },
              { icon: ShoppingBag, label: "Conversions", color: "var(--brand-blue)" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl p-6 bg-white border border-border hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div
                  className="h-12 w-12 rounded-xl grid place-items-center"
                  style={{ background: `color-mix(in oklab, ${c.color} 20%, white)`, color: c.color }}
                >
                  <c.icon size={22} />
                </div>
                <div className="mt-4 font-semibold">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Notre process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">4 étapes pour générer des leads qui ferment.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: "01", t: "Audit", d: "Analyse de votre compte, tracking, audience et concurrence." },
            { n: "02", t: "Stratégie", d: "Plan media, structure de compte, plan de tracking." },
            { n: "03", t: "Lancement", d: "Création des campagnes, créatifs et landing pages." },
            { n: "04", t: "Optimisation", d: "Itérations hebdomadaires, scaling et reporting." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border p-6 bg-white relative overflow-hidden">
              <div
                className="absolute -top-4 -right-4 text-7xl font-extrabold opacity-[0.06] text-[var(--brand-blue)]"
              >
                {s.n}
              </div>
              <div className="text-xs font-bold text-[var(--brand-red)] tracking-wider">{s.n}</div>
              <h3 className="mt-2 font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATIONS PROMO */}
      <section className="bg-[color-mix(in_oklab,var(--brand-yellow)_8%,white)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-6 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-yellow)_22%,transparent)]" />
            <img src={training} alt="Formations marketing digital" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="chip">Formations</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Transformez votre carrière grâce au digital.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Formations professionnelles dispensées par un formateur qui gère activement des comptes clients à
              l'international. 100% pratique, basé sur des cas réels.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { i: Search, t: "Maîtrisez le SEO" },
                { i: Target, t: "Google Ads & Media Buying" },
                { i: Share2, t: "Réseaux Sociaux" },
                { i: Globe, t: "Expertise CMS Web" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-xl border border-border p-4 bg-card">
                  <span className="h-10 w-10 grid place-items-center rounded-lg bg-[color-mix(in_oklab,var(--brand-blue)_15%,white)] text-[var(--brand-blue)]">
                    <x.i size={18} />
                  </span>
                  <span className="font-semibold text-sm">{x.t}</span>
                </div>
              ))}
            </div>
            <Link to="/formations" className="btn btn-primary mt-8">
              Découvrir les formations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">Témoignages</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Ce que disent nos clients</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              q: "Notre coût par lead a baissé de 42% en deux mois. L'équipe est ultra-réactive et le reporting est clair.",
              n: "Sami Ben Romdhane",
              r: "CMO · SaaS B2B",
              c: "var(--brand-blue)",
            },
            {
              q: "La formation est concrète, basée sur de vrais comptes. Je l'ai appliquée le lendemain sur mes propres campagnes.",
              n: "Lina Trabelsi",
              r: "Freelance Marketing",
              c: "var(--brand-red)",
            },
            {
              q: "On a doublé nos leads qualifiés sans augmenter le budget. Le ROI est au rendez-vous.",
              n: "Mehdi Karoui",
              r: "Dirigeant · Services BtoB",
              c: "var(--brand-yellow)",
            },
          ].map((t) => (
            <figure
              key={t.n}
              className="rounded-3xl border border-border bg-card p-7 flex flex-col"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote size={28} style={{ color: t.c }} />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed flex-1">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-white font-bold text-sm"
                  style={{ background: t.c }}
                >
                  {t.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, n: "+200", l: "Apprenants formés" },
            { icon: Award, n: "+50", l: "Clients B2B accompagnés" },
            { icon: TrendingUp, n: "×4", l: "ROI moyen constaté" },
            { icon: Target, n: "−38%", l: "Coût par lead en moyenne" },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl bg-white border border-border p-6">
              <x.icon className="text-[var(--brand-blue)]" size={22} />
              <div className="mt-3 text-3xl font-extrabold">{x.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Questions fréquentes</h2>
        </div>
        <div className="mt-10 space-y-3">
          {[
            {
              q: "Combien de temps avant d'avoir des premiers résultats ?",
              a: "Les premiers leads tombent généralement dans les 48 à 72h après le lancement. Les phases d'optimisation s'étalent sur 30 à 90 jours pour atteindre un coût par lead stable.",
            },
            {
              q: "Travaillez-vous uniquement en Tunisie ?",
              a: "Non. Nous accompagnons des clients en Tunisie, en Europe et en Amérique du Nord, sur des comptes Google Ads et Meta Ads multilingues.",
            },
            {
              q: "Les formations sont-elles éligibles à un financement ?",
              a: "Selon votre statut et votre pays, certaines formations peuvent être prises en charge. Contactez-nous pour étudier votre cas.",
            },
            {
              q: "Puis-je consulter un audit avant de m'engager ?",
              a: "Oui. Nous proposons un audit gratuit de votre compte publicitaire avec recommandations actionnables.",
            },
          ].map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-14 text-white"
          style={{ background: "var(--brand-blue)" }}
        >
          {/* Decorative yellow accent — soft, not overlapping text */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
            style={{ background: "var(--brand-yellow)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Restez à la pointe du marketing digital.
              </h2>
              <p className="mt-3 text-white/90 leading-relaxed max-w-md">
                Conseils PPC, études de cas et nouveaux modules de formation — directement dans votre boîte mail.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Inscription à la newsletter"
            >
              <label className="sr-only" htmlFor="nl-email">Email</label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="Votre email professionnel"
                className="flex-1 rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground bg-white outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-3 text-sm font-semibold text-[oklch(0.25_0.05_60)] hover:-translate-y-0.5 transition-transform">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between gap-3 px-6 py-5 text-left"
      >
        <span className="font-semibold">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
