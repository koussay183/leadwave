import type { LandingDefinition } from "../types";
import Landing1Page from "./page";
import {
  landing1Key,
  landing1DefaultSlug,
  landing1Title,
  landing1Description,
  landing1SeoDescription,
  landing1DefaultFields,
} from "./data";

export const landing1Definition: LandingDefinition = {
  key: landing1Key,
  defaultSlug: landing1DefaultSlug,
  title: landing1Title,
  description: landing1Description,
  seoDescription: landing1SeoDescription,
  defaultFields: landing1DefaultFields,
  component: Landing1Page,
};
