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
import { useTranslation } from "react-i18next";
import { Layout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { brandLogos } from "@/components/site/BrandLogos";
import { HeroIllustration } from "@/components/site/HeroIllustration";
import training from "@/assets/training-illustration.png";
import partner1 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.22 PM.jpeg";
import partner2 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.22 PM (1).jpeg";
import partner3 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.22 PM (2).jpeg";
import partner4 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.22 PM (3).jpeg";
import partner5 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.22 PM (4).jpeg";
import partner6 from "@/assets/WhatsApp Image 2026-05-16 at 7.45.29 PM.jpeg";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

export default function Index() {
  const { t } = useTranslation();

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
          telephone: "+216 27 945 870",
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

  const services = [
    {
      icon: Target,
      color: "var(--brand-blue)",
      title: t("home.services.google_title"),
      desc: t("home.services.google_desc"),
      cta: t("home.services.google_cta"),
      to: "/contact",
    },
    {
      icon: Share2,
      color: "var(--brand-red)",
      title: t("home.services.meta_title"),
      desc: t("home.services.meta_desc"),
      cta: t("home.services.meta_cta"),
      to: "/contact",
    },
    {
      icon: GraduationCap,
      color: "var(--brand-yellow)",
      title: t("home.services.formations_title"),
      desc: t("home.services.formations_desc"),
      cta: t("home.services.formations_cta"),
      to: "/formations",
    },
  ];

  const whyPoints = [
    t("home.why.point_1"),
    t("home.why.point_2"),
    t("home.why.point_3"),
    t("home.why.point_4"),
  ];

  const whyCards = [
    { icon: Target, label: t("home.why.card_targeting"), color: "var(--brand-blue)" },
    { icon: BarChart3, label: t("home.why.card_tracking"), color: "var(--brand-red)" },
    { icon: Megaphone, label: t("home.why.card_visibility"), color: "var(--brand-yellow)" },
    { icon: ShoppingBag, label: t("home.why.card_conversions"), color: "var(--brand-blue)" },
  ];

  const processSteps = [
    { n: "01", t: t("home.process.step1_title"), d: t("home.process.step1_desc") },
    { n: "02", t: t("home.process.step2_title"), d: t("home.process.step2_desc") },
    { n: "03", t: t("home.process.step3_title"), d: t("home.process.step3_desc") },
    { n: "04", t: t("home.process.step4_title"), d: t("home.process.step4_desc") },
  ];

  const formationsItems = [
    { i: Search, t: t("home.formations_promo.seo") },
    { i: Target, t: t("home.formations_promo.ads") },
    { i: Share2, t: t("home.formations_promo.social") },
    { i: Globe, t: t("home.formations_promo.cms") },
  ];

  const testimonials = [
    { q: t("home.testimonials.t1_quote"), n: t("home.testimonials.t1_name"), r: t("home.testimonials.t1_role"), c: "var(--brand-blue)" },
    { q: t("home.testimonials.t2_quote"), n: t("home.testimonials.t2_name"), r: t("home.testimonials.t2_role"), c: "var(--brand-red)" },
    { q: t("home.testimonials.t3_quote"), n: t("home.testimonials.t3_name"), r: t("home.testimonials.t3_role"), c: "var(--brand-yellow)" },
  ];

  const metrics = [
    { icon: Users, n: t("home.metrics.learners"), l: t("home.metrics.learners_label") },
    { icon: Award, n: t("home.metrics.clients"), l: t("home.metrics.clients_label") },
    { icon: TrendingUp, n: t("home.metrics.roi"), l: t("home.metrics.roi_label") },
    { icon: Target, n: t("home.metrics.cpl"), l: t("home.metrics.cpl_label") },
  ];

  const faqs = [
    { q: t("home.faq.q1"), a: t("home.faq.a1") },
    { q: t("home.faq.q2"), a: t("home.faq.a2") },
    { q: t("home.faq.q3"), a: t("home.faq.a3") },
    { q: t("home.faq.q4"), a: t("home.faq.a4") },
  ];

  const stats = [
    { n: "+150", l: t("home.stats.campaigns") },
    { n: "+50", l: t("home.stats.clients") },
    { n: "×4", l: t("home.stats.roi") },
    { n: "98%", l: t("home.stats.satisfaction") },
  ];

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

        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 grid lg:grid-cols-[1.15fr_1fr] gap-10 sm:gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)] border border-border">
              <Sparkles size={12} /> {t("home.hero.badge")}
            </span>
            <h1 id="home-h1" className="mt-4 sm:mt-5 text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              {t("home.hero.title_1")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--brand-blue)]">{t("home.hero.title_traffic")}</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-3 -z-0 rounded"
                  style={{ background: "color-mix(in oklab, var(--brand-yellow) 60%, transparent)" }}
                />
              </span>{" "}
              {t("home.hero.title_2")} <span className="text-[var(--brand-red)]">{t("home.hero.title_leads")}</span>.
            </h1>
            <p
              className="mt-6 text-lg text-muted-foreground max-w-xl"
              dangerouslySetInnerHTML={{ __html: t("home.hero.description") }}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                {t("home.hero.cta_audit")} <ArrowRight size={16} />
              </Link>
              <Link to="/formations" className="btn btn-outline">
                {t("home.hero.cta_formations")}
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
                <span className="text-muted-foreground font-medium">{t("home.hero.clients_label")}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--brand-yellow)]">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
                <span className="ml-1 text-muted-foreground font-medium">{t("home.hero.rating")}</span>
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
            {stats.map((s) => (
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
            {t("home.platforms.title")}
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
          <span className="chip">{t("home.services.chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.services.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("home.services.description")}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
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
            <span className="chip">{t("home.why.chip")}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.why.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.why.description")}</p>
            <ul className="mt-6 space-y-3">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--brand-blue)] mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary mt-8">
              {t("home.why.cta")} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whyCards.map((c) => (
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
          <span className="chip">{t("home.process.chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.process.title")}</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border p-6 bg-white relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-7xl font-extrabold opacity-[0.06] text-[var(--brand-blue)]">
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
            <span className="chip">{t("home.formations_promo.chip")}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.formations_promo.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.formations_promo.description")}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {formationsItems.map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-xl border border-border p-4 bg-card">
                  <span className="h-10 w-10 grid place-items-center rounded-lg bg-[color-mix(in_oklab,var(--brand-blue)_15%,white)] text-[var(--brand-blue)]">
                    <x.i size={18} />
                  </span>
                  <span className="font-semibold text-sm">{x.t}</span>
                </div>
              ))}
            </div>
            <Link to="/formations" className="btn btn-primary mt-8">
              {t("home.formations_promo.cta")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="chip">{t("home.testimonials.chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.testimonials.title")}</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.n}
              className="rounded-3xl border border-border bg-card p-7 flex flex-col"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote size={28} style={{ color: testimonial.c }} />
              <blockquote className="mt-4 text-foreground/85 leading-relaxed flex-1">"{testimonial.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center text-white font-bold text-sm"
                  style={{ background: testimonial.c }}
                >
                  {testimonial.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.n}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-20 border-y border-border" aria-labelledby="partners-h2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">{t("home.partners.chip", "Nos partenaires")}</span>
            <h2 id="partners-h2" className="mt-4 text-3xl sm:text-4xl font-bold">
              {t("home.partners.title", "Ils nous font confiance")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("home.partners.description", "Des marques et organisations qui collaborent avec LeadWave Agency.")}
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partners.map((src, i) => (
              <li
                key={i}
                className="flex items-center justify-center h-24 rounded-2xl border border-border bg-white p-4 hover:-translate-y-1 transition-transform"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={src}
                  alt={`Partenaire ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROOF METRICS */}
      <section className="bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((x) => (
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
          <span className="chip">{t("home.faq.chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("home.faq.title")}</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
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
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
            style={{ background: "var(--brand-yellow)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("home.newsletter.title")}</h2>
              <p className="mt-3 text-white/90 leading-relaxed max-w-md">{t("home.newsletter.description")}</p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label={t("home.newsletter.aria_label")}
            >
              <label className="sr-only" htmlFor="nl-email">Email</label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder={t("home.newsletter.placeholder")}
                className="flex-1 rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground bg-white outline-none focus:ring-2 focus:ring-[var(--brand-yellow)]"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-3 text-sm font-semibold text-[oklch(0.25_0.05_60)] hover:-translate-y-0.5 transition-transform">
                {t("home.newsletter.subscribe")}
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
