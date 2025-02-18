
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App( {url,limit}) {


  const [count,setCount]=useState(0)

 const [images.setImages]=useState([])
 const [currentSlide,setCurrentSlide]=useState(0)
 const[errorMsg,setErrorMsg]=useState(null)

 async function fetchImages(getUrl){

  try{

    const response =await
  }
 }



  return (
    <>


    <h1>{count}</h1>

    <button onClick={Increment}>Click Here</button>
    
    </>
  )
}

export default App
