import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/leadwave-agency", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/leadwave.agency", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/leadwave.agency", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="mt-20 sm:mt-24 bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="LeadWave" className="h-10 sm:h-12 w-auto" width="140" height="48" />
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            LeadWave est une agence de publicité digitale qui aide les entreprises BtoB à atteindre leurs objectifs
            de visibilité et de conversion en ligne.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 grid place-items-center rounded-full bg-white border border-border text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white hover:border-transparent transition-colors"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-[var(--brand-blue)]">Accueil</Link></li>
            <li><Link to="/formations" className="hover:text-[var(--brand-blue)]">Nos Formations</Link></li>
            <li><Link to="/publicite-media" className="hover:text-[var(--brand-blue)]">Publicité Média</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-blue)]">Nous Contacter</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">Contact</h2>
          <address className="not-italic space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <MapPin size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <span>Avenue Farhat Hached, Megrine Sidi Rezig, 2033, Tunisie</span>
            </div>
            <div className="flex gap-2">
              <Phone size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <a href="tel:+21628776710" className="hover:text-[var(--brand-blue)]">+216 28 776 710</a>
            </div>
            <div className="flex gap-2">
              <Mail size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <a href="mailto:info@leadwave.tn" className="hover:text-[var(--brand-blue)]">info@leadwave.tn</a>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} LeadWave Agency — Tous droits réservés.</span>
          <span>Conçu avec soin en Tunisie.</span>
        </div>
      </div>
    </footer>
  );
}
