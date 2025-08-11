/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif']
      },
      colors: {
        'cyber-dark': '#0f172a',
        'cyber-darker': '#111827',
        'cyber-blue': '#38bdf8',
        'cyber-neon': '#00ffa3',
  'cyber-purple': '#a855f7',
  // Professional muted additions
  'pro-steel': '#1e293b', // slate-800
  'pro-surface': '#162132', // slightly lighter than dark for cards
  'pro-text': '#cbd5e1', // slate-300 for body text
  'pro-text-soft': '#94a3b8', // slate-400 subdued
  'pro-offwhite': '#f1f5f9' // very light for subtle dividers / accents
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}
