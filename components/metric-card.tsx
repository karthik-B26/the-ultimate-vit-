import { GlassCard } from "@/components/glass-card";

export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <GlassCard>
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-violet-300">{hint}</p>
    </GlassCard>
  );
}
