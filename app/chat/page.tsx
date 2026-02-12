"use client";

import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function ChatPage() {
  const [input, setInput] = useState("");
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Direct Messaging</h2>
      <GlassCard className="h-[560px] flex flex-col">
        <div className="space-y-2 text-sm">
          <p><strong>Priya:</strong> Want to team up for HackStorm?</p>
          <p><strong>You:</strong> Yes. I can handle frontend + Firebase.</p>
          <p className="text-violet-300">Priya is typing<span className="animate-pulse">...</span></p>
        </div>
        <div className="mt-auto flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-lg border border-white/10 bg-white/5 p-2" placeholder="Message..." />
          <button className="rounded-lg bg-violet-500 px-4">Send</button>
        </div>
      </GlassCard>
    </div>
  );
}
