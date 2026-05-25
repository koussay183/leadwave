import { CheckCircle2, Phone } from "lucide-react";
import { Seo } from "@/components/site/Seo";

export default function MerciPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--brand-yellow) 18%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklab, var(--brand-blue) 8%, white), white)",
      }}
    >
      <Seo title="Merci — LeadWave" description="Votre demande a bien été reçue." />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative max-w-xl w-full text-center animate-fade-up">
        <div className="mx-auto h-20 w-20 grid place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-[var(--shadow-soft)]">
          <CheckCircle2 size={42} strokeWidth={2.2} />
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Merci, votre demande est bien reçue&nbsp;!
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Notre équipe vous contactera très bientôt — généralement sous 24&nbsp;h ouvrées.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+21628776754"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white hover:bg-[color-mix(in_oklab,var(--brand-blue)_88%,black)] transition-colors"
          >
            <Phone size={16} /> Appeler +216 28 776 754
          </a>
        </div>
      </div>
    </div>
  );
}
