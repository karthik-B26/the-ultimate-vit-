import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "The Ultimate VIT OS",
  description: "Unified student intelligence & collaboration platform for VIT"
};

const nav = [
  ["Dashboard", "/"],
  ["Team Builder", "/team-builder"],
  ["Chat", "/chat"],
  ["Skills", "/skills"],
  ["Events", "/events"],
  ["Assistant", "/assistant"],
  ["Profile", "/profile"]
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <main className="mx-auto flex min-h-screen max-w-7xl gap-6 p-6">
            <aside className="glass-card hidden w-64 p-4 lg:block">
              <h1 className="mb-6 text-lg font-semibold">VIT Campus OS</h1>
              <nav className="space-y-2 text-sm text-white/70">
                {nav.map(([name, href]) => (
                  <Link key={href} href={href} className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white">
                    {name}
                  </Link>
                ))}
              </nav>
            </aside>
            <section className="flex-1">{children}</section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
