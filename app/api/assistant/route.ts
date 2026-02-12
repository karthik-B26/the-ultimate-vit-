import { NextRequest } from "next/server";

export const runtime = "edge";

async function askGemini(question: string, apiKey: string) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: `Answer as VIT campus assistant. Question: ${question}` }] }] })
  });
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response generated.";
}

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json({ answer: "Missing GEMINI_API_KEY. Returning local fallback.", citations: ["handbook.pdf#section-2.3"] });
  }

  const answer = await askGemini(question, apiKey);
  return Response.json({ answer, citations: ["handbook.pdf#section-2.3"] });
}
