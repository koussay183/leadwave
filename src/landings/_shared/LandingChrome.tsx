import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";

/**
 * Sticky landing-page header — minimal nav, single CTA.
 * Pass `anchors` as inline-nav items (#hash links). Pass `ctaHref` to override the form anchor.
 */
export function LandingHeader({
  anchors = [],
  ctaHref = "#inscription",
  ctaShort = "S'inscrire",
  ctaLong = "Je veux rejoindre",
  showPhone = true,
}: {
  anchors?: { href: string; label: string }[];
  ctaHref?: string;
  ctaShort?: string;
  ctaLong?: string;
  showPhone?: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded"
          aria-label="Retour à l'accueil LeadWave"
        >
          <img src={logo} alt="LeadWave" className="h-8 sm:h-9 w-auto" width="120" height="36" />
        </Link>
        {anchors.length > 0 && (
          <nav aria-label="Sections de la page" className="hidden lg:flex items-center gap-7 text-sm">
            {anchors.map((a) => (
              <a key={a.href} href={a.href} className="text-foreground/75 hover:text-[var(--brand-blue)] transition-colors">
                {a.label}
              </a>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3 sm:gap-4">
          {showPhone && (
            <a
              href="tel:+21628776710"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-[var(--brand-blue)]"
            >
              <Phone size={14} /> +216 28 776 710
            </a>
          )}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[var(--brand-blue)] px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[color-mix(in_oklab,var(--brand-blue)_88%,black)] transition-colors"
          >
            <span className="hidden sm:inline">{ctaLong}</span>
            <span className="sm:hidden">{ctaShort}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

/**
 * Brand-blue final CTA block — solid background, high-contrast yellow button.
 */
export function FinalCta({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "#inscription",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-14 text-white" style={{ background: "var(--brand-blue)" }}>
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20" style={{ background: "var(--brand-yellow)" }} />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-8 items-center">
          <div>
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-3 text-white/90 max-w-xl text-sm sm:text-base leading-relaxed">{subtitle}</p>}
          </div>
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-yellow)] px-6 py-3.5 text-sm font-semibold text-[oklch(0.25_0.05_60)] hover:-translate-y-0.5 transition-transform shadow-[var(--shadow-soft)]"
          >
            {ctaLabel} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Standard landing-page footer.
 */
export function LandingFooter() {
  return (
    <footer className="bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="LeadWave Agency" className="h-9 sm:h-10 w-auto" width="120" height="40" />
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            LeadWave Agency — Agence spécialisée en performance numérique : Google Ads, Meta Ads et formations PPC.
          </p>
        </div>
        <address className="not-italic text-sm text-muted-foreground space-y-2.5">
          <div className="flex gap-2"><MapPin size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> Avenue Farhat Hached, Megrine Sidi Rezig, 2033 — Tunisie</div>
          <div className="flex gap-2"><Phone size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> <a href="tel:+21628776710" className="hover:text-[var(--brand-blue)]">+216 28 776 710</a></div>
          <div className="flex gap-2"><Mail size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> <a href="mailto:info@leadwave.tn" className="hover:text-[var(--brand-blue)]">info@leadwave.tn</a></div>
        </address>
        <div className="text-sm">
          <div className="font-semibold mb-2">Liens utiles</div>
          <ul className="text-muted-foreground space-y-1.5">
            <li><Link to="/" className="hover:text-[var(--brand-blue)]">Accueil LeadWave</Link></li>
            <li><Link to="/formations" className="hover:text-[var(--brand-blue)]">Toutes nos formations</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-blue)]">Nous contacter</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} LeadWave Agency — Tous droits réservés.</span>
          <span>Conçu avec soin en Tunisie.</span>
        </div>
      </div>
    </footer>
  );
}
