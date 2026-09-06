/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050505',
          card: '#080808',
          elevated: '#0C0C0C',
          muted: '#121212',
        },
        foreground: {
          DEFAULT: '#F5F5F5',
          secondary: '#A1A1A1',
          muted: '#666666',
          dark: '#333333',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E5E5E5',
          dark: '#71717A',
          subtle: 'rgba(255, 255, 255, 0.12)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glass: 'rgba(255, 255, 255, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
