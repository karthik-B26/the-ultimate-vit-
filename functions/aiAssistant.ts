export async function answerCampusQuestion(question: string, contextChunks: string[]) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return { answer: "Set GEMINI_API_KEY to enable AI answer.", citations: [] };

  const prompt = `You are campus OS assistant. Use context strictly.\nContext:\n${contextChunks.join("\n---\n")}\nQuestion:${question}`;
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  const data = await res.json();
  return { answer: data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No answer.", citations: ["vectors/chunk-1"] };
}
