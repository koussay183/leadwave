import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/formations", label: "Nos Formations" },
  { to: "/publicite-media", label: "Publicité Média" },
  { to: "/contact", label: "Nous Contacter" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
          aria-label="LeadWave — Accueil"
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
        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-primary">
            Prendre RDV <ArrowRight size={14} />
          </Link>
        </div>
        <button
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
            <Link to="/contact" className="btn btn-primary mt-3" onClick={() => setOpen(false)}>
              Prendre RDV <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
