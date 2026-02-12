import { Card } from '@/components/ui/card';

export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <p className="text-sm text-white/75">Editable profile fields: bio, skills, interests, availability, goals.</p>
        <p className="mt-2 text-sm text-cyan-300">Teams joined: 2 • Skill progress tracked • Compatibility visible to peers.</p>
      </Card>
    </div>
  );
}
