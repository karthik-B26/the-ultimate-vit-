import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import fs from "node:fs";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
});

async function embed(text: string, key: string) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: { parts: [{ text }] } })
  });
  const data = await res.json();
  return data?.embedding?.values ?? [];
}

async function ingest() {
  const path = process.env.HANDBOOK_PATH ?? "./handbook-sample.txt";
  const text = fs.readFileSync(path, "utf8");
  const chunks = text.match(/.{1,700}/g) ?? [];
  const db = getFirestore(app);
  const key = process.env.GEMINI_API_KEY;

  if (!key) throw new Error("Missing GEMINI_API_KEY");

  for (const [index, chunk] of chunks.entries()) {
    const embedding = await embed(chunk, key);
    await addDoc(collection(db, "vectors"), {
      source: "academic-handbook",
      chunk,
      index,
      embedding
    });
  }

  console.log(`Ingested ${chunks.length} vector chunks.`);
}

ingest();
