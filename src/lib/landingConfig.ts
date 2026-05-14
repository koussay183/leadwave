import { doc, getDoc, getDocs, collection, setDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { getDb } from "./firebase";
import type { FormField, LandingOverride } from "@/landings/types";

const COLLECTION = "landingConfigs";

type Raw = {
  pathOverride?: string;
  fieldsOverride?: FormField[];
  updatedAt?: Timestamp;
};

function unwrap(raw: Raw): LandingOverride {
  return {
    pathOverride: raw.pathOverride,
    fieldsOverride: raw.fieldsOverride,
    updatedAt: raw.updatedAt?.toDate(),
  };
}

export async function getAllOverrides(): Promise<Record<string, LandingOverride>> {
  const db = getDb();
  if (!db) return {};
  const snap = await getDocs(collection(db, COLLECTION));
  const out: Record<string, LandingOverride> = {};
  snap.forEach((d) => { out[d.id] = unwrap(d.data() as Raw); });
  return out;
}

export async function getOverride(key: string): Promise<LandingOverride | null> {
  const db = getDb();
  if (!db) return null;
  const s = await getDoc(doc(db, COLLECTION, key));
  return s.exists() ? unwrap(s.data() as Raw) : null;
}

export async function saveOverride(key: string, override: Partial<LandingOverride>): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("Firebase n'est pas configuré.");
  const payload: Record<string, unknown> = { updatedAt: serverTimestamp() };
  if (override.pathOverride !== undefined) payload.pathOverride = override.pathOverride;
  if (override.fieldsOverride !== undefined) payload.fieldsOverride = override.fieldsOverride;
  await setDoc(doc(db, COLLECTION, key), payload, { merge: true });
}

export function normalizeSlug(input: string): string {
  let s = input.trim().toLowerCase();
  if (!s.startsWith("/")) s = "/" + s;
  s = s.replace(/\/+$/g, "");
  s = s.replace(/[^a-z0-9\-_/]/g, "-");
  return s || "/";
}
