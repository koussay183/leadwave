import type { FormField } from "../types";

export const landing1Key = "landing1";
export const landing1DefaultSlug = "/landing1";

export const landing1Title = "Formation Google Ads — Génération de leads";

export const landing1SeoDescription =
  "Devenez spécialiste en génération de leads Google Ads. Formation 100% pratique sur de vrais comptes clients par l'agence LeadWave.";

export const landing1Description =
  "Landing page de la formation Google Ads orientée génération de leads. Inscription et demande de soumission.";

export const landing1DefaultFields: FormField[] = [
  { name: "fullName", label: "Prénom et nom", type: "text", placeholder: "Ex. Ahmed Ben Ali", required: true },
  { name: "email", label: "Adresse e-mail", type: "email", placeholder: "votre@email.com", required: true },
  { name: "phone", label: "Numéro de téléphone", type: "tel", placeholder: "+216 XX XXX XXX", required: true },
  {
    name: "profile",
    label: "Votre profil",
    type: "select",
    required: true,
    placeholder: "Sélectionnez votre profil",
    options: [
      { value: "marketer-freelance", label: "Marketeur / Freelance" },
      { value: "salarie", label: "Salarié en entreprise" },
      { value: "entrepreneur", label: "Entrepreneur" },
      { value: "etudiant", label: "Étudiant" },
      { value: "autre", label: "Autre" },
    ],
  },
];
