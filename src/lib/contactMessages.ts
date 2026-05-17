import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { getDb } from "./firebase";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: Date | null;
  userAgent?: string;
  referrer?: string;
};

const COLLECTION = "contact_messages";

export async function saveContactMessage(payload: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): Promise<void> {
  const db = getDb();
  if (!db) {
    console.warn("[contactMessages] Firebase not configured — payload not persisted:", payload);
    return;
  }
  await addDoc(collection(db, COLLECTION), {
    name: payload.name,
    email: payload.email,
    company: payload.company ?? "",
    message: payload.message,
    createdAt: serverTimestamp(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  });
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const db = getDb();
  if (!db) return [];
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const v = d.data() as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      createdAt?: Timestamp;
      userAgent?: string;
      referrer?: string;
    };
    return {
      id: d.id,
      name: v.name ?? "",
      email: v.email ?? "",
      company: v.company ?? "",
      message: v.message ?? "",
      createdAt: v.createdAt?.toDate() ?? null,
      userAgent: v.userAgent,
      referrer: v.referrer,
    };
  });
}
