import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(139,92,246,.2)' },
          '50%': { boxShadow: '0 0 22px rgba(139,92,246,.65)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
