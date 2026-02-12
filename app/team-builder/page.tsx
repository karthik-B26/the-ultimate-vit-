'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getTopMatches } from '@/lib/algorithms/matching';
import { currentUser, peers } from '@/lib/queries/mock-data';

export default function TeamBuilderPage() {
  const matches = getTopMatches(currentUser, peers);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Team Builder</h1>
      <p className="text-sm text-white/70">AI compatibility engine (40/25/20/10/5 weighted score) returns top 10 teammates.</p>
      <div className="grid gap-3">
        {matches.map((match) => (
          <motion.div key={match.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -3 }}>
            <Card className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{match.name}</h3>
              <p className="text-sm text-white/70">{match.explanation}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full border border-violet-400 px-3 py-2 text-sm">{match.score}%</div>
              <Button>Instant DM</Button>
            </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
