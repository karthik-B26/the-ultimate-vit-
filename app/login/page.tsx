import { Card } from '@/components/ui/card';
import { AuthGate } from '@/components/features/auth-gate';

export default function LoginPage() {
  return (
    <div className="grid min-h-[80vh] place-items-center">
      <Card className="w-full max-w-md space-y-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to VIT OS</h1>
        <p className="text-sm text-white/70">Sign in to unlock your campus brain.</p>
        <AuthGate />
      </Card>
    </div>
  );
}
