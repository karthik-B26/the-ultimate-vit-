"use client";

import { GlassCard } from "@/components/glass-card";
import { currentUser } from "@/lib/mockData";

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Profile</h2>
      <GlassCard>
        <h3 className="text-xl font-medium">{currentUser.name}</h3>
        <p className="text-sm text-white/60">{currentUser.branch} · Year {currentUser.year}</p>
        <p className="mt-3 text-sm">{currentUser.bio}</p>
        <p className="mt-4 text-sm text-violet-300">Compatibility engine active · Teams joined: 2 · Skills tracked: 4</p>
      </GlassCard>
    </div>
  );
}
