import { useState } from 'react'
import LoadMoreData from './LoadMoreData'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <LoadMoreData/>
    </>
  )
}

export default App
