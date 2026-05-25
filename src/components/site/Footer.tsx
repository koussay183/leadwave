import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/leadwave-agency", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/leadwave.agency", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/leadwave.agency", icon: Instagram },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-20 sm:mt-24 bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="LeadWave" className="h-10 sm:h-12 w-auto" width="140" height="48" />
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            {t("footer.description")}
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
          <h2 className="text-sm font-semibold mb-4">{t("footer.navigation")}</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-[var(--brand-blue)]">{t("nav.home")}</Link></li>
            <li><Link to="/formations" className="hover:text-[var(--brand-blue)]">{t("nav.formations")}</Link></li>
            <li><Link to="/publicite-media" className="hover:text-[var(--brand-blue)]">{t("nav.media")}</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-blue)]">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-4">{t("footer.contact_title")}</h2>
          <address className="not-italic space-y-3 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <MapPin size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <span>{t("footer.address")}</span>
            </div>
            <div className="flex gap-2">
              <Phone size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <a href="tel:+21627945870" className="hover:text-[var(--brand-blue)]">+216 27 945 870</a>
            </div>
            <div className="flex gap-2">
              <Mail size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" />
              <a href="mailto:leadwavec@gmail.com" className="hover:text-[var(--brand-blue)]">leadwavec@gmail.com</a>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{t("footer.rights", { year: new Date().getFullYear() })}</span>
          <span>{t("footer.made_in")}</span>
        </div>
      </div>
    </footer>
  );
}
