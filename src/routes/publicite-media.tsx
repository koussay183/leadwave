import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, LineChart, Rocket, Activity, FileBarChart, Settings2, ClipboardList } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ads from "@/assets/ads-illustration.png";

export default function PubliciteMedia() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  const steps = [
    { n: "01", icon: Activity, color: "var(--brand-blue)", t: t("media.step1_title"), d: t("media.step1_desc") },
    { n: "02", icon: Rocket, color: "var(--brand-yellow)", t: t("media.step2_title"), d: t("media.step2_desc") },
    { n: "03", icon: LineChart, color: "var(--brand-red)", t: t("media.step3_title"), d: t("media.step3_desc") },
  ];

  const solutions = [
    { i: ClipboardList, c: "var(--brand-blue)", t: t("media.sol1_title"), d: t("media.sol1_desc") },
    { i: Settings2, c: "var(--brand-yellow)", t: t("media.sol2_title"), d: t("media.sol2_desc") },
    { i: FileBarChart, c: "var(--brand-red)", t: t("media.sol3_title"), d: t("media.sol3_desc") },
  ];

  const faqs = [
    { q: t("media.faq1_q"), a: t("media.faq1_a") },
    { q: t("media.faq2_q"), a: t("media.faq2_a") },
    { q: t("media.faq3_q"), a: t("media.faq3_a") },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="blob bg-[var(--brand-red)] w-80 h-80 -top-10 -right-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="chip">{t("media.chip")}</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              {t("media.title_1")} <span className="text-[var(--brand-red)]">{t("media.title_leads")}</span>{" "}
              {t("media.title_2")} <span className="text-[var(--brand-blue)]">{t("media.title_sales")}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t("media.description")}</p>
            <Link to="/contact" className="btn btn-primary mt-8">{t("media.cta")} <ArrowRight size={16} /></Link>
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
          <span className="chip">{t("media.method_chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("media.method_title")}</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
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
            <span className="chip">{t("media.solutions_chip")}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("media.solutions_title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("media.solutions_desc")}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {solutions.map((s) => (
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
          <span className="chip">{t("media.faq_chip")}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("media.faq_title")}</h2>
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
          <h3 className="text-2xl sm:text-3xl font-bold">{t("media.cta_section_title")}</h3>
          <p className="mt-2 text-white/85">{t("media.cta_section_desc")}</p>
          <Link to="/contact" className="btn btn-accent mt-6">{t("media.cta_call")} <ArrowRight size={16} /></Link>
        </div>
      </section>
    </Layout>
  );
}
