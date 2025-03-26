import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider1 = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const FetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const JsonData = await response.json();
      if (JsonData) {
        setImages(JsonData);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== 0) {
      FetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <h1>Content Loading... Please wait</h1>;
  } else if (errorMsg) {
    return <h1>Error Occured : {errorMsg}</h1>;
  } else {
    return (
      <div className="container">
        <h1>Hi</h1>

         <BsArrowLeftCircleFill/>
id
         {images.images.length ? images.map((imageItem , imageItem.id)=>{ return ( <img key={imageItem.download_url} src={imageItem.download_url}/>)}) : null}
    


    <BsArrowRightCircleFill/> 
      </div>
    );
  }
};

export default ImageSlider1;
