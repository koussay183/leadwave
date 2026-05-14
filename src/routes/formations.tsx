import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, CheckCircle2, Download, Sparkles, Users, Target, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import training from "@/assets/training-illustration.png";

export default function Formations() {
  const { t } = useTranslation();

  const features = [
    { i: Sparkles, t: t("formations.feat1"), c: "var(--brand-blue)" },
    { i: Target, t: t("formations.feat2"), c: "var(--brand-red)" },
    { i: Users, t: t("formations.feat3"), c: "var(--brand-yellow)" },
    { i: Lightbulb, t: t("formations.feat4"), c: "var(--brand-blue)" },
  ];

  const courses = [
    { tag: t("formations.seo_tag"), color: "var(--brand-blue)", title: t("formations.seo_title"), desc: t("formations.seo_desc") },
    { tag: t("formations.cms_tag"), color: "var(--brand-yellow)", title: t("formations.cms_title"), desc: t("formations.cms_desc") },
    { tag: t("formations.ads_tag"), color: "var(--brand-red)", title: t("formations.ads_title"), desc: t("formations.ads_desc") },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="blob bg-[var(--brand-yellow)] w-72 h-72 -top-10 right-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="chip">{t("formations.chip")}</span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              {t("formations.title_1")} <span className="text-[var(--brand-red)]">{t("formations.title_highlight1")}</span>{" "}
              {t("formations.title_2")} <span className="text-[var(--brand-blue)]">{t("formations.title_highlight2")}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t("formations.description")}</p>
            <Link to="/contact" className="btn btn-primary mt-8">{t("formations.cta")} <ArrowRight size={16} /></Link>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-yellow)_22%,transparent)]" />
            <img src={training} alt="Formations marketing digital" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="chip">{t("formations.first_steps_chip")}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("formations.first_steps_title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("formations.first_steps_desc1")}</p>
            <p className="mt-3 text-muted-foreground">{t("formations.first_steps_desc2")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((x) => (
              <div key={x.t} className="rounded-2xl border border-border p-6 bg-card">
                <span className="h-12 w-12 grid place-items-center rounded-xl" style={{ background: `color-mix(in oklab, ${x.c} 18%, white)`, color: x.c }}><x.i size={22} /></span>
                <div className="mt-4 font-semibold">{x.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color-mix(in_oklab,var(--brand-blue)_5%,white)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">{t("formations.courses_chip")}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("formations.courses_title")}</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="rounded-3xl bg-card border border-border overflow-hidden flex flex-col" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="h-32 relative" style={{ background: `linear-gradient(135deg, ${c.color}, color-mix(in oklab, ${c.color} 60%, white))` }}>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90">{c.tag}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <div className="flex flex-col gap-2 pt-2">
                    <Link to="/contact" className="btn btn-primary">{t("formations.enroll")}</Link>
                    <button className="btn btn-outline"><Download size={14} /> {t("formations.download_plan")}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="chip">{t("formations.trust_chip")}</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">{t("formations.trust_title")}</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {["Acme", "Globex", "Initech", "Umbrella", "Stark", "Wayne"].map((b) => (
            <div key={b} className="font-display font-bold text-xl text-muted-foreground">{b}</div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
