import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit=10, page=1 }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  async function FetchData(getUrl) {
    try {
      setLoading(true)
      let response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      let datas = await response.json();
      console.log(datas);

      if(datas){
        setImages(datas)
        setLoading(false)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    FetchData(url);
  }, [url,page,limit]);

  console.log(images)

if (loading){
  return <div> Loading... Please wait..</div>
}

else if(errorMsg){
  return <div> Caught Error : {errorMsg}</div>
}

else{
  return(

    <div> {images.images.length ? ( images.map((imageItem,index)=>{ return (  )}))}</div>
    
    
    
  //   <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
  //   {images && images.length ? (
  //     images.map((imageItem, index) => (
  //       <img
  //         key={imageItem.id}
  //         alt={imageItem.download_url}
  //         src={imageItem.download_url}
  //         style={{ width: "200px", height: "auto", border: "1px solid #ccc" }}
  //       />
  //     ))
  //   ) : null}
  </div>
  
)
}

}

export default ImageSlider