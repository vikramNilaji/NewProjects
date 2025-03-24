import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './a.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <A/>
    <App />
  </>,
)
