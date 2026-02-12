'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  ['Dashboard', '/dashboard'],
  ['Team Builder', '/team-builder'],
  ['Messages', '/messages'],
  ['Skills', '/skills'],
  ['Events', '/events'],
  ['Assistant', '/assistant'],
  ['Profile', '/profile']
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="glass sticky top-4 h-[calc(100vh-2rem)] w-56 rounded-2xl p-4">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-violet-200">VIT OS</h2>
      <nav className="space-y-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className={cn('block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10', pathname === href && 'bg-white/10 text-violet-200')}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
