import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react' // ← add

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Vercel Analytics */}
    <Analytics />
    {/* Vercel Speed Insights */}
    <SpeedInsights />
  </StrictMode>,
)
