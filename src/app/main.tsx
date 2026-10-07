import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import '../styles/legal.css'
import '../styles/polish.css'
import '../styles/responsive.css'
import '../styles/hero-rotation.css'
import '../styles/refinement.css'
import '../styles/careers.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
