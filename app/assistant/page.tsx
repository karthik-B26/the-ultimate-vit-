"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function AssistantPage() {
  const [question, setQuestion] = useState("What is the minimum attendance requirement?");
  const [answer, setAnswer] = useState("VIT generally requires 75% attendance to be eligible for end-semester assessments. Check handbook exceptions for medical leave.");

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">AI Campus Assistant</h2>
      <GlassCard>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="h-24 w-full rounded-lg border border-white/10 bg-black/30 p-3" />
        <button
          className="mt-3 rounded-lg bg-violet-500 px-4 py-2"
          onClick={() => setAnswer("Attendance policy: minimum 75%. Students below threshold may be debarred unless approved under re-attendance rules. [Handbook §2.3]")}
        >
          Ask with RAG
        </button>
        <p className="mt-4 text-sm text-white/85">{answer}</p>
      </GlassCard>
    </div>
  );
}
