import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

export function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/formations", label: t("nav.formations") },
    { to: "/publicite-media", label: t("nav.media") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] rounded"
          aria-label={t("nav.home_label")}
        >
          <img src={logo} alt="LeadWave" className="h-9 sm:h-10 w-auto" width="140" height="40" />
        </Link>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors focus-visible:outline-none focus-visible:underline ${
                  isActive ? "text-[var(--brand-blue)] font-semibold" : "text-foreground/75 hover:text-[var(--brand-blue)]"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
            {(["fr", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => { i18n.changeLanguage(lang); localStorage.setItem("lang", lang); }}
                className={`px-3 py-1 rounded-full transition-colors ${
                  i18n.language === lang
                    ? "bg-[var(--brand-blue)] text-white shadow-sm"
                    : "text-foreground/60 hover:text-[var(--brand-blue)]"
                }`}
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            {t("nav.cta")} <ArrowRight size={14} />
          </Link>
        </div>
        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t("nav.close_menu") : t("nav.open_menu")}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3 rounded-lg text-sm ${isActive ? "bg-[color-mix(in_oklab,var(--brand-blue)_10%,white)] text-[var(--brand-blue)] font-semibold" : "text-foreground/85 hover:bg-muted"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center rounded-full border border-border bg-muted/40 p-0.5 text-xs font-semibold">
                {(["fr", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { i18n.changeLanguage(lang); localStorage.setItem("lang", lang); }}
                    className={`px-3 py-1.5 rounded-full transition-colors ${
                      i18n.language === lang
                        ? "bg-[var(--brand-blue)] text-white shadow-sm"
                        : "text-foreground/60 hover:text-[var(--brand-blue)]"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary flex-1 justify-center" onClick={() => setOpen(false)}>
                {t("nav.cta")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
