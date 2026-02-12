"use client";

import { GlassCard } from "@/components/glass-card";
import { computeMatches } from "@/lib/matching";
import { currentUser, fakeStudents } from "@/lib/mockData";

const matches = computeMatches(currentUser, fakeStudents);

export default function TeamBuilderPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-semibold">Smart Team Builder</h2>
      <p className="text-sm text-white/60">Weighted scoring: skills 40%, interests 25%, availability 20%, goal 10%, diversity 5%.</p>
      <div className="grid gap-4 lg:grid-cols-2">
        {matches.map((m) => (
          <GlassCard key={m.user.id}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{m.user.name}</h3>
                <p className="text-xs text-white/60">{m.user.branch} · Year {m.user.year}</p>
              </div>
              <span className="rounded-full border border-violet-400/60 px-3 py-1 text-sm text-violet-300">{Math.round(m.score)}%</span>
            </div>
            <p className="mt-3 text-sm text-white/80">{m.explanation}</p>
            <button className="mt-4 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium hover:bg-violet-400">Instant DM</button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
