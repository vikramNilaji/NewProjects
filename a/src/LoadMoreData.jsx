import { useState } from "react"

const LoadMoreData=()=>{

  const [products,setProducts]=useState(null);
  const [loading,setLoading]=useState(false);
  const [count,setCount]=useState(0);

  const FetchData= async ()=>{

    try {
      
    const response= await fetch()
    const ImageData= await response.json()
      
    } catch (error) {
      
    }



  }

  return( <> </>)
}

export default LoadMoreData