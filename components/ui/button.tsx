import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded-xl px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(139,92,246,.4)] disabled:opacity-50',
        'bg-gradient-to-r from-violet-500 to-cyan-500 text-white',
        className
      )}
      {...props}
    />
  );
}
