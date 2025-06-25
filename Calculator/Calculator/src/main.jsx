import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New from './New.jsx'
import Calculator from "./Calculator"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
     */}
     {/* <New/> */}
     <Calculator/>
  </StrictMode>,
)
