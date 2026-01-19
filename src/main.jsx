import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './nav.jsx'
import Dropdown from './dropdown.jsx'
import { Features } from 'tailwindcss'
import Highlight from './highlight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Dropdown />
    <Highlight />
    <App />
  </StrictMode>,
)
