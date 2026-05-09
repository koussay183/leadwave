import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Target, BarChart3, Megaphone, GraduationCap, Search, ShoppingBag, Share2, Globe } from "lucide-react";
import hero from "@/assets/hero-illustration.png";
import training from "@/assets/training-illustration.png";

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="blob bg-[var(--brand-yellow)] w-72 h-72 -top-20 right-10" />
        <div className="blob bg-[var(--brand-red)] w-80 h-80 bottom-0 -left-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="chip">Publicité Digitale</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
              Publicité Digitale Efficace pour <span className="text-[var(--brand-red)]">Maximiser</span> votre <span className="text-[var(--brand-blue)]">ROI</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Générez des leads qualifiés grâce à notre expertise en publicité PPC (Google Ads) et sur les réseaux sociaux.
              Atteignez vos objectifs avec des stratégies ciblées et un ROI maximisé.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Prenez rendez-vous <ArrowRight size={16} />
              </Link>
              <Link to="/formations" className="btn btn-outline">Nos formations</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "+150", l: "Campagnes" },
                { n: "x4", l: "ROI moyen" },
                { n: "98%", l: "Satisfaction" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold text-[var(--brand-blue)]">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-blue)_18%,transparent)]" />
            <img src={hero} alt="Expert publicité digitale" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ABOUT / SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">À propos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Votre expert en publicité digitale et formation</h2>
          <p className="mt-4 text-muted-foreground">
            LeadWave est une agence spécialisée dans la publicité digitale, dédiée à la génération de leads.
            Nous offrons des solutions sur mesure aux entreprises BtoB ainsi que des formations de qualité.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Share2, color: "var(--brand-blue)", title: "Social Media Ads", desc: "Publicités Facebook, Instagram & LinkedIn pour attirer des leads qualifiés et renforcer votre marque.", cta: "Prendre rendez-vous", to: "/contact" },
            { icon: Target, color: "var(--brand-red)", title: "Google Ads", desc: "Campagnes PPC ciblées pour augmenter la visibilité et maximiser le ROI de vos actions marketing.", cta: "Prendre rendez-vous", to: "/contact" },
            { icon: GraduationCap, color: "var(--brand-yellow)", title: "Formation Digitale", desc: "Formations pratiques en marketing digital pour développer vos compétences efficacement.", cta: "Nos formations", to: "/formations" },
          ].map((s) => (
            <div key={s.title} className="group relative rounded-3xl bg-card p-8 border border-border hover:border-transparent transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-14 w-14 grid place-items-center rounded-2xl mb-6" style={{ background: `color-mix(in oklab, ${s.color} 18%, white)`, color: s.color }}>
                <s.icon size={26} />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link to={s.to} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-blue)] group-hover:gap-2 transition-all">
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
            <span className="chip">Top raisons</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Pourquoi investir dans la publicité digitale ?</h2>
            <p className="mt-4 text-muted-foreground">
              Investir dans la publicité digitale est essentiel pour maximiser vos investissements. Cela permet d'augmenter
              le chiffre d'affaires grâce à un ciblage précis et de renforcer la notoriété de votre marque.
            </p>
            <ul className="mt-6 space-y-3">
              {["Ciblage précis & audiences qualifiées", "Analyse en temps réel des performances", "Budget optimisé, ROI mesurable", "Adaptation rapide aux tendances du marché"].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 grid place-items-center rounded-full text-xs font-bold text-white" style={{ background: i % 2 ? "var(--brand-red)" : "var(--brand-blue)" }}>{i + 1}</span>
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, label: "Ciblage précis", color: "var(--brand-blue)" },
              { icon: BarChart3, label: "Analyse data", color: "var(--brand-red)" },
              { icon: Megaphone, label: "Visibilité", color: "var(--brand-yellow)" },
              { icon: ShoppingBag, label: "Conversions", color: "var(--brand-blue)" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl p-6 bg-white border border-border">
                <div className="h-12 w-12 rounded-xl grid place-items-center" style={{ background: `color-mix(in oklab, ${c.color} 20%, white)`, color: c.color }}>
                  <c.icon size={22} />
                </div>
                <div className="mt-4 font-semibold">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATIONS PROMO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-6 -z-10 rounded-[40%_60%_50%_50%/40%_40%_60%_60%] bg-[color-mix(in_oklab,var(--brand-yellow)_22%,transparent)]" />
          <img src={training} alt="Formations marketing digital" className="w-full h-auto" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="chip">Formations</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Transformez votre carrière grâce au digital.</h2>
          <p className="mt-4 text-muted-foreground">Développez des compétences essentielles pour réussir dans le marketing numérique grâce à nos formations spécialisées.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { i: Search, t: "Maîtrisez le SEO" },
              { i: Target, t: "Dominez le Media Buying" },
              { i: Share2, t: "Réseaux Sociaux" },
              { i: Globe, t: "Expertise CMS Web" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-3 rounded-xl border border-border p-4 bg-card">
                <span className="h-10 w-10 grid place-items-center rounded-lg bg-[color-mix(in_oklab,var(--brand-blue)_15%,white)] text-[var(--brand-blue)]"><x.i size={18} /></span>
                <span className="font-semibold text-sm">{x.t}</span>
              </div>
            ))}
          </div>
          <Link to="/formations" className="btn btn-primary mt-8">Découvrez nos formations <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-[color-mix(in_oklab,var(--brand-red)_4%,white)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="chip">Nos cours disponibles</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Découvrez nos nouveaux cours</h2>
            <p className="mt-3 text-muted-foreground">Lancez-vous dans l'apprentissage de compétences numériques essentielles.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { tag: "SEO", color: "var(--brand-blue)", title: "Référencement Naturel (SEO)", desc: "Optimisez n'importe quel site pour les moteurs de recherche avec des techniques on-page & off-page." },
              { tag: "CMS", color: "var(--brand-yellow)", title: "Gestion de Projets Web avec WordPress", desc: "Créez, gérez et optimisez des sites WordPress avec les meilleures pratiques modernes." },
              { tag: "PPC", color: "var(--brand-red)", title: "Google Ads — Génération de Leads", desc: "Concevez et gérez des campagnes Google Ads pour maximiser votre ROI marketing." },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl bg-card border border-border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="h-32 relative" style={{ background: `linear-gradient(135deg, ${c.color}, color-mix(in oklab, ${c.color} 60%, white))` }}>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90">{c.tag}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <Link to="/contact" className="btn btn-outline mt-6">Participez à la formation</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="chip">La confiance de nos clients</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Découvrez ceux qui nous font confiance</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {["Acme", "Globex", "Initech", "Umbrella", "Stark", "Wayne"].map((b) => (
            <div key={b} className="font-display font-bold text-xl text-muted-foreground">{b}</div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
          <div className="blob bg-[var(--brand-yellow)] w-60 h-60 -right-10 -top-10 opacity-40" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Abonnez-vous à notre newsletter</h3>
              <p className="mt-2 text-white/85">Recevez les dernières actualités, mises à jour de cours et contenus exclusifs.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Votre email" className="flex-1 rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground bg-white/95 outline-none" />
              <button className="btn btn-accent">S'abonner</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
