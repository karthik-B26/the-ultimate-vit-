"use client";

import { GlassCard } from "@/components/glass-card";
import { events } from "@/lib/mockData";

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Events + News</h2>
      <div className="grid gap-3">
        {events.map((event) => (
          <GlassCard key={event.id}>
            <h3 className="font-medium">{event.title}</h3>
            <p className="text-xs text-white/60">{event.date} · {event.tags.join(" • ")}</p>
            <p className="mt-2 text-sm">{event.summary}</p>
            <p className="mt-2 text-xs text-violet-300">AI teammate suggestion: invite 2 UI devs + 1 ML engineer.</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
