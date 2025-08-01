import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import ApiExample from './ApiExample.jsx'
import PreventDefault from './PreventDefault.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginPage/> */}
    {/* <Login/> */}
    <ApiExample/>
    <PreventDefault/>
  </StrictMode>,
)
