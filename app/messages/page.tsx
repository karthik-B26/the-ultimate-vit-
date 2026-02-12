'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function MessagesPage() {
  const [typing] = useState(true);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Direct Messaging</h1>
      <Card className="h-[65vh] space-y-3 overflow-y-auto">
        <div className="ml-auto w-fit rounded-xl bg-violet-600/40 px-3 py-2 text-sm">Hey, want to team up for Buildathon?</div>
        <div className="w-fit rounded-xl bg-white/10 px-3 py-2 text-sm">Yes! I can own frontend + UI motion.</div>
        <div className="text-xs text-white/60">Seen • Reactions: 🚀🔥</div>
        {typing && <div className="flex gap-1 text-sm text-white/60"><span className="animate-bounce">•</span><span className="animate-bounce [animation-delay:120ms]">•</span><span className="animate-bounce [animation-delay:240ms]">•</span> typing...</div>}
      </Card>
      <div className="flex gap-2">
        <Input placeholder="Type message / share event / share resource" />
        <Button>Send</Button>
      </div>
    </div>
  );
}
