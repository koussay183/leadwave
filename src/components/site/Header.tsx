import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/formations", label: "Nos Formations" },
  { to: "/publicite-media", label: "Publicité Média" },
  { to: "/contact", label: "Nous Contacter" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="LeadWave" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-medium text-foreground/80 hover:text-[var(--brand-blue)] transition-colors ${
                  isActive ? "text-[var(--brand-blue)] font-semibold" : ""
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-primary">Prendre RDV</Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="py-2 text-foreground/80" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>Prendre RDV</Link>
          </div>
        </div>
      )}
    </header>
  );
}
