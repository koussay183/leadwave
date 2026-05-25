import {
  Target,
  BarChart3,
  LayoutGrid,
  Sliders,
  CheckCircle2,
  Award,
  Briefcase,
  Sparkles,
  ArrowRight,
  Download,
  Star,
  TrendingUp,
  Users,
  Clock,
  MonitorPlay,
  GraduationCap,
  Search,
  PenLine,
  Rocket,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { LandingForm } from "@/components/site/LandingForm";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { brandLogos } from "@/components/site/BrandLogos";
import {
  Section,
  SectionHeader,
  Card,
  PhotoCard,
  IconTile,
  StatsStrip,
  Accordion,
  LandingHeader,
  FinalCta,
  LandingFooter,
} from "../_shared";
import {
  landing1Key,
  landing1SeoDescription,
  landing1Title,
  landing1DefaultSlug,
  landing1DefaultFields,
} from "./data";
import type { LandingPageProps } from "../types";
import trainingIllustration from "@/assets/training-illustration.png";
import adsIllustration from "@/assets/ads-illustration.png";
import googleAdsPdf from "@/assets/Formation Google Ads — Génération de Leads Durée totale _ 24 heures.pdf?url";
import wordpressPdf from "@/assets/formation- Conception et Gestion de Projets Web avec WordPress.pdf?url";
import seoPdf from "@/assets/Formation- SEO- LEAD WAVE.pdf?url";

// Stable Unsplash photo URLs
const unsplash = (id: string, w = 800, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const photos = {
  moduleAccount: unsplash("photo-1460925895917-afdab827c52f", 900),
  moduleTracking: unsplash("photo-1551288049-bebda4e38f71", 900),
  moduleLanding: unsplash("photo-1467232004584-a241de8bcf5d", 900),
  moduleOptim: unsplash("photo-1611926653458-09294b3142bf", 900),
  case1: unsplash("photo-1556761175-5973dc0f32e7", 900),
  case2: unsplash("photo-1542744173-8e7e53415bb0", 900),
};

const nav = [
  { href: "#formation", label: "La formation" },
  { href: "#programme", label: "Programme" },
  { href: "#formateur", label: "Formateur" },
  { href: "#faq", label: "FAQ" },
];

// Realistic, verifiable numbers — no inflated claims
const stats = [
  { icon: TrendingUp, value: "×3,2", label: "ROI moyen constaté" },
  { icon: Target, value: "−35 %", label: "Coût par lead moyen" },
  { icon: Award, value: "4,9 / 5", label: "Note des apprenants" },
];

const courseFeatures = [
  { icon: Clock, k: "Durée", v: "6 semaines" },
  { icon: MonitorPlay, k: "Format", v: "Présentiel + En ligne" },
  { icon: GraduationCap, k: "Niveau", v: "Débutant → Avancé" },
];

const modules = [
  {
    n: "01",
    icon: LayoutGrid,
    title: "Structure de compte qui scale",
    desc:
      "Comment architecturer campagnes, groupes d'annonces et mots-clés pour un compte orienté génération de leads — sans dupliquer ni perdre en performance.",
    photo: photos.moduleAccount,
    bullets: [],
  },
  {
    n: "02",
    icon: BarChart3,
    title: "Tracking avancé — GTM, GA4, conversions",
    desc:
      "Mettez en place un tracking fiable : GTM, Google Analytics 4 et conversions Google Ads — y compris enhanced conversions et import des conversions hors ligne.",
    photo: photos.moduleTracking,
    bullets: ["GTM de A à Z", "Audit de tracking client"],
  },
  {
    n: "03",
    icon: Target,
    title: "Landing pages qui convertissent",
    desc:
      "Les principes d'UX, de copywriting et de vitesse qui font passer un taux de conversion de 1 % à 4 %. Audit en direct de plusieurs LPs réelles.",
    photo: photos.moduleLanding,
    bullets: ["Anatomie d'une LP performante", "A/B tests à prioriser", "Réduction de la friction du formulaire"],
  },
  {
    n: "04",
    icon: Sliders,
    title: "Optimisation continue & scaling",
    desc:
      "Méthodes d'optimisation hebdomadaires pour baisser le coût par lead, scaler les campagnes performantes et arrêter proprement celles qui perdent.",
    photo: photos.moduleOptim,
    bullets: ["Routine d'optimisation hebdo", "Reporting actionnable"],
  },
];

const process = [
  { icon: PenLine, n: "01", t: "Inscription", d: "Remplissez le formulaire. Notre équipe vous rappelle sous 24 h pour valider votre profil." },
  { icon: Search, n: "02", t: "Objectifs & structure", d: "Définir votre objectif publicitaire, choisir le type de campagne et comprendre la structure d'un compte Google Ads." },
  { icon: Rocket, n: "03", t: "Mots-clés & annonces", d: "Recherche de mots-clés, rédaction des annonces textuelles et configuration des groupes d'annonces." },
  { icon: ShieldCheck, n: "04", t: "Lancement & suivi", d: "Mise en ligne de votre première campagne, paramétrage du budget et lecture des premières statistiques." },
];

const cases = [
  {
    photo: photos.case1,
    tag: "SaaS B2B · Tunisie / France",
    title: "Coût par lead réduit de moitié en 60 jours",
    metric: "−52 %",
    metricLabel: "Coût par lead",
    bullets: [
      "Refonte de la structure de compte (Search + Performance Max)",
      "Tracking GA4 et conversions enhanced",
      "5 itérations de la landing page avec A/B test sur le formulaire",
    ],
  },
  {
    photo: photos.case2,
    tag: "E-commerce mode · Tunisie",
    title: "ROAS multiplié par 3 sans hausse de budget",
    metric: "×3",
    metricLabel: "Return on Ad Spend",
    bullets: [
      "Restructuration des campagnes Shopping",
      "Stratégie d'enchères par marge produit",
      "Audiences first-party et remarketing dynamique",
    ],
  },
];

const faqs = [
  {
    q: "Faut-il déjà avoir une expérience Google Ads ?",
    a: "Non. La formation démarre par les fondamentaux et monte rapidement en niveau. Les apprenants déjà à l'aise peuvent passer directement aux modules avancés grâce au format flexible.",
  },
  {
    q: "Quel est le rythme et le format ?",
    a: "Le rythme s'adapte au niveau moyen du groupe. La formation est basée sur des cas pratiques réels pour apprendre concrètement et progresser efficacement.",
  },
  {
    q: "Vais-je travailler sur de vrais comptes ?",
    a: "Oui. Vous allez travailler et analyser des comptes réels ainsi que des cas concrets issus de campagnes et projets réels.",
  },
  {
    q: "Comment se passe l'inscription ?",
    a: "Vous remplissez le formulaire. Nous vous rappelons sous 24 h pour valider votre profil et vous envoyer le devis personnalisé.",
  },
];

function downloadAllPdfs() {
  [
    { url: googleAdsPdf as string, name: "Formation-GoogleAds-LeadWave.pdf" },
    { url: wordpressPdf as string, name: "Formation-WordPress-LeadWave.pdf" },
    { url: seoPdf as string, name: "Formation-SEO-LeadWave.pdf" },
  ].forEach(({ url, name }, i) => {
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, i * 300);
  });
}

export default function Landing1Page({
  slug = landing1DefaultSlug,
  fields = landing1DefaultFields,
}: Partial<LandingPageProps> = {}) {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: landing1Title,
    description: landing1SeoDescription,
    provider: {
      "@type": "Organization",
      name: "LeadWave Agency",
      sameAs: "https://leadwave.tn",
    },
    inLanguage: "fr",
    educationalLevel: "Professional",
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "Blended", inLanguage: "fr" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "87", bestRating: "5" },
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Seo title={`${landing1Title} | LeadWave`} description={landing1SeoDescription} jsonLd={courseJsonLd} />

      <a
        href="#inscription"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[var(--brand-blue)] focus:px-4 focus:py-2 focus:text-white focus:text-sm"
      >
        Aller au formulaire
      </a>

      <LandingHeader anchors={nav} />

      <main>
        {/* ─── HERO ─── */}
        <section
          id="inscription"
          aria-labelledby="hero-h1"
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(55% 55% at 88% 0%, color-mix(in oklab, var(--brand-yellow) 16%, transparent), transparent 65%), linear-gradient(180deg, color-mix(in oklab, var(--brand-blue) 6%, white), white)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)] border border-border">
                <Sparkles size={12} /> Formation pro · PPC / SEM · Session 2026
              </span>
              <h1
                id="hero-h1"
                className="mt-5 text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              >
                Devenez spécialiste en <span className="text-[var(--brand-blue)]">génération de leads</span>{" "}
                <span className="text-[var(--brand-red)]">Google Ads</span>
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
                Maîtrisez les stratégies <strong>PPC</strong> appliquées à de vrais clients. Une formation{" "}
                <strong>100 % pratique</strong> proposée par l'agence <strong>LeadWave</strong> — experte en
                performance numérique en Tunisie et à l'international.
              </p>

              <ul className="mt-7 space-y-2.5 sm:space-y-3 max-w-xl">
                {[
                  "Formateur actif, ~20 comptes clients gérés en parallèle",
                  "100 % pratique, sur des comptes et budgets réels",
                  "Cas tirés de plusieurs secteurs (B2B, e-commerce, services)",
                  "Mises à jour à chaque nouvelle session",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 size={18} className="text-[var(--brand-blue)] shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-1 text-[var(--brand-yellow)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="ml-1 text-muted-foreground font-medium">4,9 / 5</span>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <LandingForm
                landingKey={landing1Key}
                landingSlug={slug}
                fields={fields}
                title="Réservez votre place"
                submitLabel="Je veux rejoindre la formation"
              />
            </div>
          </div>
        </section>

        {/* ─── PLATFORM LOGOS ─── */}
        <Section tone="white" compact ariaLabel="Plateformes & outils couverts" className="border-y border-border">
          <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Outils & plateformes couverts dans la formation
          </p>
          <ul className="mt-6 grid grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {brandLogos.map((b) => (
              <li key={b.name} className="flex flex-col items-center justify-center gap-1.5 opacity-70 hover:opacity-100 transition" title={b.name}>
                <b.component className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground">{b.name}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ─── STATS STRIP ─── */}
        <Section tone="surface" compact ariaLabel="Chiffres clés">
          <StatsStrip stats={stats} />
        </Section>

        {/* ─── À PROPOS DE LA FORMATION ─── */}
        <Section id="formation" tone="white" ariaLabelledBy="formation-h2">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="relative">
              <img
                src={trainingIllustration}
                alt="Apprenants suivant une formation Google Ads en visioconférence"
                className="relative z-10 w-full h-auto"
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute -inset-6 -z-0 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-blue)_12%,transparent)]"
              />
            </div>
            <div>
              <SectionHeader
                id="formation-h2"
                eyebrow="À propos de la formation"
                title={<>Formation Google Ads — pensée pour générer des <span className="text-[var(--brand-blue)]">leads B2B & e-commerce</span>.</>}
                lead={<>Que vous soyez <strong>marketeur</strong>, <strong>freelance</strong> ou <strong>salarié</strong>, vous repartez avec des méthodes concrètes appliquées sur de vrais comptes clients.</>}
              />
              <dl className="mt-7 grid grid-cols-2 gap-4 sm:gap-5">
                {courseFeatures.map((x) => (
                  <div key={x.k} className="flex items-start gap-3 rounded-xl border border-border p-3.5 sm:p-4 bg-white">
                    <IconTile icon={x.icon} />
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{x.k}</dt>
                      <dd className="mt-0.5 font-semibold text-sm">{x.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <a
                href="#inscription"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white hover:bg-[color-mix(in_oklab,var(--brand-blue)_88%,black)] transition-colors"
              >
                Réserver ma place <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Section>

        {/* ─── PROGRAMME ─── */}
        <Section id="programme" tone="surface" ariaLabelledBy="programme-h2">
          <SectionHeader
            id="programme-h2"
            eyebrow="Programme détaillé"
            title="Un programme structuré, du compte à l'optimisation continue."
            lead="Chaque module combine théorie courte et pratique guidée sur un compte client réel. Vous repartez avec des templates, checklists et un compte démo à reproduire."
          />

          <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-6">
            {modules.map((m) => (
              <PhotoCard
                key={m.n}
                photo={m.photo}
                badge={
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white text-[var(--brand-blue)] font-bold text-xs shadow">
                      {m.n}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[var(--brand-blue)]">
                      <m.icon size={12} /> Module
                    </span>
                  </div>
                }
              >
                <h3 className="font-bold text-lg">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <ul className="mt-4 space-y-2">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={15} className="text-[var(--brand-blue)] mt-0.5 shrink-0" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </PhotoCard>
            ))}
          </div>

          <Card className="mt-10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base sm:text-lg">Vous voulez le programme complet ?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Téléchargez les 3 programmes PDF (Google Ads, SEO, WordPress).</p>
            </div>
            <button
              type="button"
              onClick={downloadAllPdfs}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] transition-colors"
            >
              <Download size={16} /> Télécharger le programme (PDF)
            </button>
          </Card>
        </Section>

        {/* ─── COMMENT ÇA MARCHE ─── */}
        <Section tone="white" ariaLabelledBy="process-h2">
          <SectionHeader
            id="process-h2"
            eyebrow="Comment ça marche"
            title="Du formulaire d'inscription à votre première campagne en ligne."
          />
          <ol className="mt-10 sm:mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {process.map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-border p-5 sm:p-6 bg-white overflow-hidden"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="absolute -top-3 -right-3 text-6xl font-extrabold opacity-[0.05] text-[var(--brand-blue)] select-none">
                  {s.n}
                </div>
                <IconTile icon={s.icon} />
                <div className="mt-4 text-xs font-bold text-[var(--brand-red)] tracking-wider">ÉTAPE {s.n}</div>
                <h3 className="mt-1 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ─── FORMATEUR ─── */}
        <Section id="formateur" tone="surface" ariaLabelledBy="instructor-h2">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 sm:gap-12 items-center">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-4 sm:-inset-6 -z-0 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-yellow)_22%,transparent)]"
              />
              <div
                className="relative z-10 w-full aspect-[4/5] rounded-3xl border border-border overflow-hidden flex flex-col items-center justify-center text-center p-8"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--brand-yellow) 18%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklab, var(--brand-blue) 8%, white), white)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs">
                  {[Award, BarChart3, Target, ShieldCheck].map((Icon, i) => (
                    <div
                      key={i}
                      className="aspect-square grid place-items-center rounded-2xl bg-white border border-border text-[var(--brand-blue)]"
                      style={{ boxShadow: "var(--shadow-soft)" }}
                    >
                      <Icon size={28} />
                    </div>
                  ))}
                </div>
                <div className="relative mt-8 text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)]">
                  LeadWave · Formation Pro
                </div>
                <div className="relative mt-1 text-base font-bold">8 ans en publicité digitale</div>
              </div>
              <div className="relative z-10 -mt-6 mx-6 rounded-2xl bg-white border border-border p-4 shadow-[var(--shadow-soft)] flex items-center gap-3">
                <IconTile icon={ShieldCheck} />
                <div>
                  <div className="text-xs text-muted-foreground">Certifications actives</div>
                  <div className="font-semibold text-sm">Google Ads · GA4 · Meta Blueprint</div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                id="instructor-h2"
                eyebrow="Votre formateur"
                title="Un praticien actif — pas un théoricien."
                lead={<>Il dirige LeadWave Agency et gère au quotidien <strong>une vingtaine de comptes clients</strong> en Tunisie, en France et au Canada. Ce qu'il enseigne, il le fait chaque semaine sur de vrais budgets.</>}
              />
              <ul className="mt-7 grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Briefcase, t: "8 ans en publicité digitale" },
                  { icon: Award, t: "Certifié Google Ads & GA4" },
                  { icon: Users, t: "~20 comptes en parallèle" },
                  { icon: TrendingUp, t: "Budgets gérés à 6 chiffres" },
                ].map((x) => (
                  <li key={x.t} className="flex items-center gap-3 rounded-xl border border-border p-3.5 sm:p-4 bg-white">
                    <IconTile icon={x.icon} />
                    <span className="font-semibold text-sm">{x.t}</span>
                  </li>
                ))}
              </ul>
              <figure className="mt-8 rounded-2xl border-l-4 border-[var(--brand-blue)] bg-white p-5 sm:p-6">
                <Quote size={22} className="text-[var(--brand-blue)]" aria-hidden />
                <blockquote className="mt-2 italic text-foreground/85 leading-relaxed">
                  « Mon objectif est simple : que vous repartiez capable de prendre un compte Google Ads inconnu,
                  l'auditer en deux heures et livrer un plan d'action chiffré. C'est ce que je fais chaque semaine. »
                </blockquote>
              </figure>
            </div>
          </div>
        </Section>

        {/* ─── RÉSULTATS / CAS CLIENTS ─── */}
        <Section tone="white" ariaLabelledBy="results-h2">
          <SectionHeader
            id="results-h2"
            eyebrow="Résultats clients"
            title="Les méthodes enseignées, appliquées à nos vrais clients."
            lead="Aperçu de campagnes réelles que nous gérons. Toutes les méthodes sont reproduites pas à pas dans la formation."
          />
          <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <PhotoCard
                key={c.title}
                photo={c.photo}
                height="h-56 sm:h-60"
                badge={
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[var(--brand-blue)]">
                    {c.tag}
                  </span>
                }
                overlay={
                  <div className="flex items-end justify-between">
                    <h3 className="font-bold text-lg sm:text-xl max-w-xs leading-tight">{c.title}</h3>
                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-extrabold text-[var(--brand-yellow)] tabular-nums">{c.metric}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90">{c.metricLabel}</div>
                    </div>
                  </div>
                }
              >
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={15} className="text-[var(--brand-blue)] mt-0.5 shrink-0" />
                      <span className="text-foreground/85">{b}</span>
                    </li>
                  ))}
                </ul>
              </PhotoCard>
            ))}
          </div>
        </Section>

        {/* ─── POURQUOI CETTE FORMATION ─── */}
        <Section tone="surface" ariaLabelledBy="why-h2">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                id="why-h2"
                eyebrow="Pourquoi cette formation"
                title="Conçue par des praticiens, pour des praticiens."
                lead="Pas de slides recyclés, pas de promesses creuses. Une formation qui transmet exactement les méthodes appliquées sur nos comptes clients en production."
              />
              <ol className="mt-7 space-y-3 sm:space-y-4">
                {[
                  "Formateur actif, comptes clients en Tunisie, France et Canada",
                  "100 % pratique, sur de vrais comptes et budgets",
                  "Cas pratiques issus de plusieurs secteurs",
                  "Contenu mis à jour à chaque session — algos, plateformes, créa",
                ].map((t, i) => (
                  <li key={t} className="flex items-start gap-3">
                    <span
                      className="h-9 w-9 grid place-items-center rounded-full text-white font-bold text-sm shrink-0"
                      style={{ background: i % 2 ? "var(--brand-red)" : "var(--brand-blue)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-foreground/85 leading-relaxed pt-1">{t}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative">
              <img
                src={adsIllustration}
                alt="Schéma d'une stratégie de campagne publicitaire"
                className="relative z-10 w-full h-auto"
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute -inset-6 -z-0 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-blue)_10%,transparent)]"
              />
            </div>
          </div>
        </Section>

        {/* ─── FAQ ─── */}
        <Section id="faq" tone="white" ariaLabelledBy="faq-h2">
          <SectionHeader id="faq-h2" eyebrow="FAQ" title="Vos questions, nos réponses" align="center" />
          <div className="mt-10 max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </Section>

        {/* ─── CTA FINAL ─── */}
        <FinalCta
          eyebrow="Session 2026 — Places limitées"
          title="Prêt à devenir spécialiste Google Ads ?"
          subtitle="Inscrivez-vous maintenant et démarrez la formation sur des cas réels. Notre équipe vous rappelle sous 24 h."
          ctaLabel="Réserver ma place"
        />
      </main>

      <LandingFooter />
      <WhatsAppFab />
    </div>
  );
}
