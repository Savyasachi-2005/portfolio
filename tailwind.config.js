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
        // Theme variables
        theme: {
          bg: 'var(--theme-bg)',
          'bg-alt': 'var(--theme-bg-alt)',
          text: 'var(--theme-text)',
          'text-alt': 'var(--theme-text-alt)',
          accent: 'var(--theme-accent)',
          'accent-alt': 'var(--theme-accent-alt)',
          border: 'var(--theme-border)',
          'card-bg': 'var(--theme-card-bg)',
          'card-hover': 'var(--theme-card-hover)',
          'button-bg': 'var(--theme-button-bg)',
          'button-hover': 'var(--theme-button-hover)',
        },
        // Legacy colors - keep for backward compatibility
        'cyber-dark': '#0f172a',
        'cyber-darker': '#111827',
        'cyber-blue': '#38bdf8',
        'cyber-neon': '#00ffa3',
        'cyber-purple': '#a855f7',
        'pro-steel': '#1e293b',
        'pro-surface': '#162132',
        'pro-text': '#cbd5e1',
        'pro-text-soft': '#94a3b8',
        'pro-offwhite': '#f1f5f9'
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px var(--theme-accent)' },
          '100%': { boxShadow: '0 0 20px var(--theme-accent)' }
        }
      }
    },
  },
  plugins: [],
}
