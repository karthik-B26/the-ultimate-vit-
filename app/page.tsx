"use client";

import { MetricCard } from "@/components/metric-card";
import { GlassCard } from "@/components/glass-card";
import { currentUser, events, fakeStudents } from "@/lib/mockData";
import { useAppStore } from "@/store/useAppStore";

function DashboardClient() {
  const { unreadMessages, activeTeams } = useAppStore();
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm text-white/60">Welcome back, {currentUser.name}</p>
        <h2 className="text-3xl font-semibold">Campus Intelligence Dashboard</h2>
      </header>
      <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
        <MetricCard label="Active students" value={fakeStudents.length.toString()} hint="+12% this week" />
        <MetricCard label="Teams forming now" value={activeTeams.toString()} hint="8 looking for frontend" />
        <MetricCard label="Upcoming events" value={events.length.toString()} hint="2 closing soon" />
        <MetricCard label="Recommended skills" value="4" hint="Docker, GenAI, UI Motion" />
        <MetricCard label="Unread messages" value={unreadMessages.toString()} hint="Respond fast for invites" />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <h3 className="text-lg font-medium">Quick actions</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              "Find AI Hackathon Team",
              "Ask Campus Assistant",
              "Browse Skill Roadmaps",
              "Explore Events"
            ].map((action) => (
              <button key={action} className="rounded-xl border border-white/10 bg-white/5 p-3 text-left text-sm hover:border-violet-400">
                {action}
              </button>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-medium">Opportunity alerts</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>3 hackathons match your skills.</li>
            <li>Students like you are learning Docker.</li>
            <li>2 events need a frontend teammate.</li>
          </ul>
        </GlassCard>
      </section>
    </div>
  );
}

export default function Page() {
  return <DashboardClient />;
}
