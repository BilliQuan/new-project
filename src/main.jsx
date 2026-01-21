import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/layout/nav.jsx'
import Dropdown from './components/home/dropdown.jsx'
import { Features } from 'tailwindcss'
import Highlight from './components/home/highlight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Dropdown />
    <Highlight />
  </StrictMode>,
)
