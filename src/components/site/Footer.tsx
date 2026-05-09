import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color-mix(in_oklab,var(--brand-blue)_8%,white)] border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="LeadWave" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            LeadWave est une agence de publicité digitale qui aide les entreprises BtoB à atteindre leurs objectifs
            de visibilité et de conversion en ligne.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-red)] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-full bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-red)] transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-[var(--brand-blue)]">Accueil</Link></li>
            <li><Link to="/formations" className="hover:text-[var(--brand-blue)]">Nos Formations</Link></li>
            <li><Link to="/publicite-media" className="hover:text-[var(--brand-blue)]">Publicité Média</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--brand-blue)]">Nous Contacter</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> Avenue Farhat Hached, Megrine Sidi Rezig, 2033, Tunisia</li>
            <li className="flex gap-2"><Phone size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> +216 28 776 710</li>
            <li className="flex gap-2"><Mail size={16} className="text-[var(--brand-red)] mt-0.5 shrink-0" /> info@leadwave.tn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} LeadWave. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
