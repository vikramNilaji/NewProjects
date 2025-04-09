import React from 'react'
import { useState } from 'react'

const LoadMoreData = () => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(false)
    const [count,setCount]=useState(0)

    async function FetchProducts(){

    }

    const FetchProducts=async()=>{

        try {
            
        } catch (error) {
            console.log(error)
        }

    }


  return (
    <div className='container'>LoadMoreData</div>
  )
}

export default LoadMoreData