import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ImageSlider3 = ({ url, limit=5, page=1 }) => {
  const [image, setImage] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Loading,setLoading]=useState(false)
  const FetchData = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const JsonData = await response.json();

      if(JsonData){
        setLoading(false)
        setImage(JsonData)
      }
    
    } catch (e) {
      setLoading(false)
      setErrorMsg(e.message);
    }
  };

  console.log(image)

  useEffect(()=>{
    FetchData(url)
  },[url])

  if(errorMsg){
    return (
    <h1>Error Occured :  {errorMsg} </h1>
    )
  }

 else if(Loading){
    return (<h1> Loading... Please wait..</h1>  )
  }

  else{
    return <div>
    {image && image.length ? image.map((ImageItem,index)=>{return( <img src={ImageItem.download_url} alt={ImageItem.download_url} key={ImageItem.id} />)}): null}


    </div>;

  }
   
};

export default ImageSlider3;
