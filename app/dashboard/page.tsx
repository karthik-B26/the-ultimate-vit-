import { Card } from '@/components/ui/card';
import { StatCard } from '@/components/features/stat-card';

const stats = [
  ['Active Students', '1,284'],
  ['Teams Forming', '74'],
  ['Upcoming Events', '12'],
  ['Recommended Skills', '5'],
  ['Unread Messages', '3']
];

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Campus Brain Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-5">
        {stats.map(([label, value]) => (
          <StatCard key={label} label={label} value={value} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="mb-2 text-lg font-semibold">Quick Actions</h2>
          <ul className="space-y-1 text-sm text-white/75">
            <li>• Find teammates for your next hackathon</li>
            <li>• Ask AI assistant about attendance rules</li>
            <li>• Browse weekly skill roadmap</li>
            <li>• Discover high-fit upcoming events</li>
          </ul>
        </Card>
        <Card>
          <h2 className="mb-2 text-lg font-semibold">Smart Recommendations</h2>
          <p className="text-sm text-white/75">Students like you are learning Docker and building GenAI web apps. 3 hackathons match your profile this week.</p>
        </Card>
      </div>
    </div>
  );
}
