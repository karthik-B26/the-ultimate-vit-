'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AssistantPage() {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState('Ask about attendance, CGPA, hostel or fees deadlines.');

  const ask = async () => {
    const res = await fetch('/api/ai/chat', { method: 'POST', body: JSON.stringify({ question: q }) });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Campus Assistant (RAG)</h1>
      <Card>
        <p className="whitespace-pre-wrap text-sm text-white/85">{answer}</p>
      </Card>
      <div className="flex gap-2">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="What is minimum attendance requirement?" />
        <Button onClick={ask}>Ask</Button>
      </div>
    </div>
  );
}
