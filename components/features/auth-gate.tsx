'use client';

import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth, googleProvider } from '@/lib/firebase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function AuthGate() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.push('/dashboard');
      setLoading(false);
    });
    return unsub;
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <Button onClick={() => signInWithPopup(auth, googleProvider)}>Continue with Google</Button>;
}
