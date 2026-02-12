import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(216 25% 20%)",
        input: "hsl(216 25% 20%)",
        ring: "hsl(255 80% 68%)",
        background: "hsl(227 31% 7%)",
        foreground: "hsl(210 20% 98%)"
      },
      backgroundImage: {
        "glass-gradient": "radial-gradient(circle at top left, rgba(127, 86, 217, 0.18), transparent 55%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(126, 91, 239, 0.3), 0 0 30px rgba(126, 91, 239, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
