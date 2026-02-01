import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        'main-dark-red': 'var(--main-dark-red)',
        'main-light-red': 'var(--color-main-light-red)',
        'main-red': 'var(--color-main-red)',
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "im8-red": "hsl(var(--im8-red))",
        "im8-red-dark": "hsl(var(--im8-red-dark))",
        "im8-cream": "hsl(var(--im8-cream))",
        "im8-gold": "hsl(var(--im8-gold))",
        "im8-text": "hsl(var(--im8-text))",
        "im8-text-muted": "hsl(var(--im8-text-muted))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "im8": "0 4px 12px rgba(139, 21, 56, 0.15)",
        "im8-lg": "0 8px 24px rgba(139, 21, 56, 0.2)",
        "card-hover": "0 8px 16px rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        'aeonik': ['Aeonik', 'sans-serif'],
        'arizona': ['ABC Arizona Flare', 'Playfair Display', 'serif'],
        'architekt': ['NB Architekt', 'sans-serif'],
      },
      animation: {
        'gridScrollVertical': 'gridScrollVertical 20s linear infinite',
        'gridScrollHorizontal': 'gridScrollHorizontal 25s linear infinite',
        'gridGlowPulse': 'gridGlowPulse 12s ease-in-out infinite',
        'orbPulse': 'orbPulse 15s ease-in-out infinite',
        'osContentFadeIn': 'osContentFadeIn 420ms cubic-bezier(0.33, 1, 0.68, 1)',
        'osDetailFadeIn': 'osDetailFadeIn 280ms cubic-bezier(0.33, 1, 0.68, 1)',
      },
      keyframes: {
        gridScrollVertical: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(0, 80px, 0)' },
        },
        gridScrollHorizontal: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(80px, 0, 0)' },
        },
        gridGlowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.65' },
        },
        osContentFadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        osDetailFadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
