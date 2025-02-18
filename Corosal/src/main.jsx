import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App url={'https://placekittens.com/g/200/300'} limit={4} page={1} />
  </>,
)
