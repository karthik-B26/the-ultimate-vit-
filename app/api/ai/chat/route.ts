import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { retrieveContext } from '@/lib/ai/rag';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const context = await retrieveContext(question);

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ answer: `Demo response: Attendance requirement is 75%.\nCitation: handbook.pdf p.14` });
  }

  const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = client.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `You are VIT campus assistant. Answer with citation lines.\nContext:\n${context}\nQuestion:${question}`;
  const result = await model.generateContent(prompt);
  return NextResponse.json({ answer: result.response.text() });
}
