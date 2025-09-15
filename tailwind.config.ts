import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        zinc: {
          50: 'var(--zinc-50)',
          100: 'var(--zinc-100)',
          200: 'var(--zinc-200)',
          300: 'var(--zinc-300)',
          400: 'var(--zinc-400)',
          500: 'var(--zinc-500)',
          600: 'var(--zinc-600)',
          700: 'var(--zinc-700)',
          800: 'var(--zinc-800)',
          900: 'var(--zinc-900)',
          950: 'var(--zinc-950)',
        },
        green: {
          400: 'var(--green-400)',
          500: 'var(--green-500)',
          600: 'var(--green-600)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          dark: 'var(--muted-dark)',
        },
        nav: {
          bg: 'var(--nav-bg)',
          border: 'var(--nav-border)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
