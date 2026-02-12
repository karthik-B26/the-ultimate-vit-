import { adminDb } from '@/lib/firebase/admin';

export async function retrieveContext(question: string) {
  const snapshot = await adminDb.collection('vectors').limit(3).get();
  const chunks = snapshot.docs.map((doc) => doc.data().text as string);
  return chunks.length ? chunks.join('\n---\n') : `No handbook context found for: ${question}`;
}
