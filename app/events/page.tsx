import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/queries/mock-data';

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Events + News</h1>
      <p className="text-sm text-white/70">Submission + admin approval workflow supported by events/news/submissions collections.</p>
      <div className="grid gap-3">
        {events.map((event) => (
          <Card key={event.id}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-sm text-white/70">{event.summary}</p>
                <p className="mt-1 text-xs text-cyan-300">AI teammate suggestion: pair with UIUX + ML student for this event.</p>
              </div>
              <Button>Bookmark</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
