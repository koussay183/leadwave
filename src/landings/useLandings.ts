import { useCallback, useEffect, useState } from "react";
import { landingDefinitions } from "./registry";
import type { LandingOverride, ResolvedLanding } from "./types";
import { getAllOverrides } from "@/lib/landingConfig";

function resolve(overrides: Record<string, LandingOverride>): ResolvedLanding[] {
  return landingDefinitions.map((def) => {
    const o = overrides[def.key];
    return {
      ...def,
      slug: o?.pathOverride || def.defaultSlug,
      fields: o?.fieldsOverride && o.fieldsOverride.length > 0 ? o.fieldsOverride : def.defaultFields,
      hasPathOverride: Boolean(o?.pathOverride),
      hasFieldsOverride: Boolean(o?.fieldsOverride && o.fieldsOverride.length > 0),
    };
  });
}

export function useLandings() {
  const [landings, setLandings] = useState<ResolvedLanding[]>(() => resolve({}));
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const overrides = await getAllOverrides();
      setLandings(resolve(overrides));
    } catch (e) {
      console.error("[useLandings] failed to load overrides", e);
      setLandings(resolve({}));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void refresh(); }, [refresh]);

  return { landings, loading, refresh };
}
