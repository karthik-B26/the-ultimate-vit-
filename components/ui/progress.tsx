interface ProgressProps { value: number }
export function Progress({ value }: ProgressProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  );
}
