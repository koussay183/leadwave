import type { ComponentType } from "react";

export type FormFieldType = "text" | "email" | "tel" | "select" | "textarea";

export type FormFieldOption = { value: string; label: string };

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  options?: FormFieldOption[];
};

/** Props every landing page component receives at runtime. */
export type LandingPageProps = {
  /** Resolved slug (path) — may differ from defaultSlug if admin overrode it. */
  slug: string;
  /** Resolved form fields — may differ from defaultFields if admin overrode. */
  fields: FormField[];
};

/** Code-defined landing page (in `src/landings/*`). Source of truth for the component + defaults. */
export type LandingDefinition = {
  /** Stable identifier — never changes. Used as Firestore doc id + leads.landingKey. */
  key: string;
  /** Admin display title. */
  title: string;
  /** Short admin description. */
  description: string;
  /** SEO meta description (default — page may override its own). */
  seoDescription: string;
  /** Path/route used when no admin override exists, e.g. "/landing1". */
  defaultSlug: string;
  /** Form schema used when no admin override exists. */
  defaultFields: FormField[];
  /** React component, receives LandingPageProps. */
  component: ComponentType<LandingPageProps>;
};

/** Persisted overrides for a landing (Firestore doc, id = key). */
export type LandingOverride = {
  pathOverride?: string;
  fieldsOverride?: FormField[];
  updatedAt?: Date;
};

/** Definition merged with override — what the app actually renders. */
export type ResolvedLanding = LandingDefinition & {
  slug: string;
  fields: FormField[];
  hasPathOverride: boolean;
  hasFieldsOverride: boolean;
};
