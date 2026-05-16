import { useEffect } from "react";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  onClose?: () => void;
  title?: string;
  message?: string;
};

export function ThankYouOverlay({
  onClose,
  title = "Merci, votre demande est bien reçue !",
  message = "Notre équipe vous contactera très bientôt — généralement sous 24 h ouvrées.",
}: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="thankyou-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6 animate-fade-up"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--brand-yellow) 18%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklab, var(--brand-blue) 8%, white), white)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 h-10 w-10 grid place-items-center rounded-full bg-white border border-border text-foreground/70 hover:text-[var(--brand-blue)] transition-colors"
        >
          <X size={18} />
        </button>
      )}

      <div className="relative max-w-xl w-full text-center">
        <div className="mx-auto h-20 w-20 grid place-items-center rounded-full bg-emerald-100 text-emerald-700 shadow-[var(--shadow-soft)]">
          <CheckCircle2 size={42} strokeWidth={2.2} />
        </div>
        <h1
          id="thankyou-title"
          className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
        >
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {message}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white hover:bg-[color-mix(in_oklab,var(--brand-blue)_88%,black)] transition-colors"
          >
            Retour à l'accueil <ArrowRight size={16} />
          </Link>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklab,var(--brand-blue)_6%,white)] transition-colors"
            >
              Fermer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
