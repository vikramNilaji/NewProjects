import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewApp from './NewApp.jsx'
import Random from "./Random.jsx"


createRoot(document.getElementById('root')).render(
  <>
    {/* <App />
    <NewApp/> */}


    {/* <Random/> */}
    <RandomColors/>

  </>
)
