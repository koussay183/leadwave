import type { SVGProps } from "react";

type Logo = {
  name: string;
  component: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const baseProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: 28,
  height: 28,
  "aria-hidden": true,
  focusable: false,
};

export const brandLogos: Logo[] = [
  {
    name: "Google Ads",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <path fill="#FBBC04" d="M5.94 22.5a3.94 3.94 0 0 1-3.42-5.91L9.27 4.92a3.94 3.94 0 1 1 6.83 3.94L9.36 20.52a3.93 3.93 0 0 1-3.42 1.98z"/>
        <path fill="#34A853" d="M18.06 22.5a3.94 3.94 0 0 1-3.42-1.98L7.9 8.86a3.94 3.94 0 1 1 6.82-3.94l6.74 11.67a3.94 3.94 0 0 1-3.4 5.91z"/>
        <circle cx="5.94" cy="18.56" r="3.94" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    name: "Meta",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <path fill="#0467DF" d="M12.005 4.5c-2.46 0-4.18 1.95-5.21 4.05-1.4 2.9-2.07 6.7-.74 9.27.84 1.62 2.32 2.18 3.86 2.18 1.66 0 2.86-.78 5.08-4.66.78-1.36 2.13-3.94 3.05-3.94.78 0 1.18.66 1.18 2.34 0 1.66-.32 3.34-1.1 5.36.46.22 1.06.34 1.62.34 2.92 0 4.26-3.06 4.26-6.5 0-4.74-2.46-8.44-6.18-8.44-2.36 0-4.18 1.4-5.62 3.34C11.225 5.7 10.385 4.5 8.985 4.5c-1.86 0-3.42 1.46-4.4 3.34-1.42 2.74-2.08 6.42-2.08 8.96 0 2.06.6 3.2 1.5 3.2 1.32 0 1.92-.74 3.04-3.04 1.94-3.98 2.74-7.8 5.96-7.8 2.6 0 3.32 2.84 3.32 5.86 0 1.46-.32 3.6-.78 5.04"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <defs>
          <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FED576"/>
            <stop offset="0.26" stopColor="#F47133"/>
            <stop offset="0.61" stopColor="#BC3081"/>
            <stop offset="1" stopColor="#4C63D2"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)"/>
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.8"/>
        <circle cx="17.2" cy="6.8" r="1.1" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path fill="#fff" d="M7.5 9.5h-3V19h3V9.5zM6 5a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 6 5zM19.5 13.7c0-2.7-1.45-4-3.4-4-1.58 0-2.28.86-2.67 1.46V9.5h-3V19h3v-5.2c0-1.4.6-2.2 1.7-2.2 1.07 0 1.6.77 1.6 2.2V19h2.77v-5.3z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <path fill="#000" d="M19.6 6.7a5.7 5.7 0 0 1-3.4-1.1 5.6 5.6 0 0 1-2-3.1H10.7v12.9c0 1.4-1 2.5-2.4 2.5a2.4 2.4 0 1 1 .8-4.7v-3.4a5.7 5.7 0 1 0 5 5.6V9.8a8.7 8.7 0 0 0 5.5 1.9V8.3a5.7 5.7 0 0 1-0-1.6z"/>
        <path fill="#25F4EE" d="M18.4 5.6a5.7 5.7 0 0 1-3.4-1.1 5.6 5.6 0 0 1-2-3.1H9.5v12.9c0 1.4-1 2.5-2.4 2.5a2.4 2.4 0 0 1-1.6-4.2 2.4 2.4 0 0 0-1.6 4.2c-1 .5-1.7 1.5-1.7 2.6a3 3 0 0 0 4.6 2.5 5.7 5.7 0 0 0 7-5.6V8.7a8.7 8.7 0 0 0 5.5 1.9V7.2a5.7 5.7 0 0 1-1-1.6z" opacity=".75"/>
        <path fill="#FE2C55" d="M19.6 6.7a5.7 5.7 0 0 1-1.2-1.1 5.6 5.6 0 0 1-2-3.1H14a5.7 5.7 0 0 0 5.6 4.2v-.0z" opacity=".75"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <rect x="1" y="5" width="22" height="14" rx="3.5" fill="#FF0000"/>
        <path d="M10 8.5v7l6-3.5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <rect x="14.5" y="2" width="5" height="20" rx="2.5" fill="#F9AB00"/>
        <rect x="9.5" y="8" width="5" height="14" rx="2.5" fill="#E37400"/>
        <circle cx="7" cy="19.5" r="2.5" fill="#E37400"/>
      </svg>
    ),
  },
  {
    name: "Google Tag Manager",
    component: (p) => (
      <svg {...baseProps} {...p}>
        <path fill="#246FDB" d="M12 1L1 12l11 11 4-4L9 12l7-7z"/>
        <path fill="#8AB4F8" d="M12 1l11 11-11 11-4-4 7-7-7-7z"/>
        <circle cx="12" cy="20" r="2" fill="#fff"/>
      </svg>
    ),
  },
];
