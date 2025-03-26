import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import A from './A.jsx'
import B from './B.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <A/>
  <B/>
    <App />
  </>,
)
