import { useState,useEffect} from "react";


export default function ImageSlider ( {url,limit=5,page=1}){
 const [image,setImage]=useState([])
 const[currentSlide,setCurrentSlide]=useState(0)
 const[errorMsg,setErrorMsg]=useState(null)
 const [loading,setLoading]=useState(false)

async function fetchImages(getUrl){
  try{
    setLoading(true)

    const response= await fetch(`${getUrl} ? page= ${page} limit= ${limit}`)
    const data=await response.json();
     if(data){
      setImage(data)
      setLoading(false)
     }
  }
 
  catch(er){
    setErrorMsg(er.message)
    setLoading(false) 

  }
}

useEffect(()=>{
  if(url !== "")  fetchImages(url)
},[url,limit,page]);
console.log(image);


if(loading) {

  return  <div>Loading data... Please wait...</div>
}

if (errorMsg !== null) {
  return <div> Error occurred { errorMsg }</div>
}

else {
return <div className="container"></div>


}

}