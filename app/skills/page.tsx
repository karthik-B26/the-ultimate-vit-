"use client";

import { GlassCard } from "@/components/glass-card";

const roadmap = [
  "Day 1-3: Fundamentals + setup",
  "Day 4-7: Guided practice",
  "Week 2: Mini project",
  "Week 3: Advanced concepts",
  "Week 4: Portfolio project"
];

export default function SkillsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Skill Builder</h2>
      <GlassCard>
        <h3 className="font-medium">React Learning Path</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          {roadmap.map((s) => (
            <li key={s} className="rounded-lg border border-white/10 p-3">{s}</li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
