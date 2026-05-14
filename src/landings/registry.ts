import type { LandingDefinition } from "./types";
import { landing1Definition } from "./landing1/config";

/**
 * Code-defined landing pages.
 *
 * To add a new landing:
 *   1. Create `src/landings/<name>/page.tsx` exporting a `(props: LandingPageProps) => JSX.Element`.
 *   2. Create `src/landings/<name>/data.ts` (key, defaultSlug, defaultFields, title, ...).
 *   3. Create `src/landings/<name>/config.ts` exporting a `LandingDefinition`.
 *   4. Push it into `landingDefinitions` below.
 *
 * Each definition gets:
 *   - A row in the admin dashboard.
 *   - A dynamic React Router route at its `defaultSlug` (or the admin's override).
 *   - A `leads` collection scoped to its `key`.
 */
export const landingDefinitions: LandingDefinition[] = [landing1Definition];

export function getLandingDefinitionByKey(key: string): LandingDefinition | undefined {
  return landingDefinitions.find((l) => l.key === key);
}
