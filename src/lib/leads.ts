import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { getDb } from "./firebase";

export type LeadRecord = {
  id: string;
  landingKey: string;
  landingSlug: string;
  data: Record<string, unknown>;
  createdAt: Date | null;
  userAgent?: string;
  referrer?: string;
};

const COLLECTION = "leads";

export async function saveLead(
  landingKey: string,
  landingSlug: string,
  data: Record<string, unknown>,
): Promise<void> {
  const db = getDb();
  if (!db) {
    console.warn("[leads] Firebase not configured — payload not persisted:", { landingKey, data });
    return;
  }
  await addDoc(collection(db, COLLECTION), {
    landingKey,
    landingSlug,
    data,
    createdAt: serverTimestamp(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  });
}

export async function getLeadsByKey(landingKey: string): Promise<LeadRecord[]> {
  const db = getDb();
  if (!db) return [];
  const q = query(
    collection(db, COLLECTION),
    where("landingKey", "==", landingKey),
    orderBy("createdAt", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const v = d.data() as {
      landingKey: string;
      landingSlug: string;
      data: Record<string, unknown>;
      createdAt?: Timestamp;
      userAgent?: string;
      referrer?: string;
    };
    return {
      id: d.id,
      landingKey: v.landingKey,
      landingSlug: v.landingSlug,
      data: v.data ?? {},
      createdAt: v.createdAt?.toDate() ?? null,
      userAgent: v.userAgent,
      referrer: v.referrer,
    };
  });
}
