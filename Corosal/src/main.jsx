import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App url={'https://picsum.photos/v2/list'} page={"1"} limit={'4'}/>
  </>,
)
 