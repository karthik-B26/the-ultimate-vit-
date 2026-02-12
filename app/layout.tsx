import './globals.css';
import { ReactNode } from 'react';
import { QueryProvider } from '@/components/query-provider';
import { Sidebar } from '@/components/layout/sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <QueryProvider>
          <div className="mx-auto flex min-h-screen max-w-7xl gap-4 p-4">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
