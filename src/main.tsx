import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/theme.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/useTheme'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react' // ← add

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* Vercel Analytics */}
    <Analytics />
    {/* Vercel Speed Insights */}
    <SpeedInsights />
  </StrictMode>,
)
