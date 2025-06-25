import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Accordion from './Accordion.jsx'
// import Accordion1 from './Accordion1.jsx'
import NewAccordion from './NewAccordion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Accordion/> */}
    {/* <Accordion1/> */}
    <NewAccordion/>
  </StrictMode>,
)
