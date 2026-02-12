import fs from 'node:fs';
import pdfParse from 'pdf-parse';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { adminDb } from '@/lib/firebase/admin';

const chunkText = (text: string, size = 800) => {
  const chunks: string[] = [];
  for (let i = 0; i < text.length; i += size) chunks.push(text.slice(i, i + size));
  return chunks;
};

(async () => {
  const file = process.argv[2] || 'resources/handbook.pdf';
  const dataBuffer = fs.readFileSync(file);
  const parsed = await pdfParse(dataBuffer);
  const chunks = chunkText(parsed.text);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });

  for (let i = 0; i < chunks.length; i++) {
    const embeddingRes = await model.embedContent(chunks[i]);
    await adminDb.collection('vectors').add({
      text: chunks[i],
      embedding: embeddingRes.embedding.values,
      source: file,
      index: i
    });
  }

  console.log(`Ingested ${chunks.length} chunks to vectors collection.`);
})();
