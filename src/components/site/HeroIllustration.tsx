/**
 * Minimal hero illustration — a single growth chart card.
 * Themed for a Google Ads / Meta Ads performance agency.
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 380"
      role="img"
      aria-label="Graphique de croissance illustrant l'augmentation des leads générés"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2C6E91" stopOpacity="0.28" />
          <stop offset="1" stopColor="#2C6E91" stopOpacity="0" />
        </linearGradient>
        <filter id="hero-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#2C6E91" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Soft brand accent behind the card */}
      <circle cx="370" cy="90" r="120" fill="#F2B544" opacity="0.18" />
      <circle cx="90" cy="310" r="80" fill="#2C6E91" opacity="0.08" />

      {/* Card */}
      <g filter="url(#hero-shadow)">
        <rect x="50" y="60" width="380" height="260" rx="22" fill="#FFFFFF" stroke="#E8EEF3" />

        {/* Header row */}
        <rect x="74" y="88" width="120" height="10" rx="3" fill="#0F2A3A" opacity="0.85" />
        <rect x="74" y="106" width="70" height="6" rx="2" fill="#8AA1B4" opacity="0.5" />

        {/* Big KPI */}
        <text
          x="74"
          y="170"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="40"
          fill="#2C6E91"
        >
          +1,284
        </text>
        <text
          x="74"
          y="194"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="12"
          fill="#6E8497"
        >
          leads générés ce mois
        </text>

        {/* Chart */}
        <g transform="translate(74 220)">
          {/* baseline */}
          <line x1="0" y1="80" x2="332" y2="80" stroke="#E1E9F0" />

          {/* Area */}
          <path
            d="M0 70 L60 56 L120 60 L180 38 L240 44 L300 18 L332 22 L332 80 L0 80 Z"
            fill="url(#hero-area)"
          />
          {/* Line */}
          <path
            d="M0 70 L60 56 L120 60 L180 38 L240 44 L300 18 L332 22"
            fill="none"
            stroke="#2C6E91"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* End data point */}
          <circle cx="332" cy="22" r="9" fill="#fff" stroke="#2C6E91" strokeWidth="3" />
          <circle cx="332" cy="22" r="3.5" fill="#D85059" />
        </g>
      </g>

      {/* Single floating chip — "ROI ×4" */}
      <g transform="translate(348 280)" filter="url(#hero-shadow)">
        <rect width="118" height="54" rx="16" fill="#FFFFFF" stroke="#E8EEF3" />
        <rect x="14" y="14" width="26" height="26" rx="8" fill="#FFF6E6" />
        <path
          d="M22 32 L28 22 L34 28 L40 18"
          stroke="#A86A1F"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          transform="translate(-4 -4)"
        />
        <text x="50" y="26" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fill="#6E8497">
          ROI moyen
        </text>
        <text
          x="50"
          y="44"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#A86A1F"
        >
          ×4
        </text>
      </g>
    </svg>
  );
}
