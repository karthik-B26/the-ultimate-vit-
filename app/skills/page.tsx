'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const roadmap = [
  ['Day 1-3', 'Fundamentals + syntax drills', 25],
  ['Day 4-7', 'Guided practice & implementation', 40],
  ['Week 2', 'Mini project sprint', 55],
  ['Week 3', 'Advanced concepts and systems', 70],
  ['Week 4', 'Portfolio-ready project', 80]
];

export default function SkillsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Skill Builder</h1>
      <p className="text-sm text-white/70">Structured path for React. Includes placeholders for YouTube playlist/docs + markdown notes.</p>
      <div className="grid gap-3">
        {roadmap.map(([phase, detail, progress]) => (
          <Card key={phase}>
            <div className="mb-2 flex justify-between text-sm">
              <span>{phase}</span>
              <span>{progress}%</span>
            </div>
            <p className="mb-2 text-sm text-white/70">{detail}</p>
            <Progress value={Number(progress)} />
          </Card>
        ))}
      </div>
    </div>
  );
}
