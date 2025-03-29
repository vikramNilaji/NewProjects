import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App3.css"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

const ImageSlider3 = ({ url, limit = 5, page = 1 }) => {
  const [image, setImage] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [currentSlide,setCurrentSlide]=useState(0)
  const FetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const JsonData = await response.json();

      if (JsonData) {
        setLoading(false);
        setImage(JsonData);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  };

  console.log(image);

  function handlePrevious(){

    setCurrentSlide(currentSlide=== 0 ? image.length-1 : currentSlide-1)


  }

  function handleNext(){
    setCurrentSlide(currentSlide=== image.length-1? 0 : currentSlide+1)


  }

  useEffect(() => {
    FetchData(url);
  }, [url]);

  if (errorMsg) {
    return <h1>Error Occured : {errorMsg} </h1>;
  } else if (Loading) {
    return <h1> Loading... Please wait..</h1>;
  } else {
    return (
      <div className="container1">
        <h1>HI</h1>    {image && image.length
          ? image.map((ImageItem, index) => {
              return (
                <img
                  src={ImageItem.download_url}
                  alt={ImageItem.download_url}
                  key={ImageItem.id}
                  className={currentSlide === index ? 'current-slide1' : '  hide-current-slide1' }
                />
              );
            })
          : null}

<h1><BsArrowLeftCircleFill onClick={handlePrevious}  className="arrow arrow-left1"/></h1>
<h1><BsArrowRightCircleFill onClick={handleNext}  className="arrow arrow-right1"/></h1>

{image.length ? 
  image.map((_, index) => (
    <button key={index}
    className={
      currentSlide === index
        ? "current-indicator1"
        : "current-indicator1 inactive-indicator1"
    } onClick={() => setCurrentSlide(index)}>
    
    </button>
  )) 
: null}
  
      </div>
    );
  }
};

export default ImageSlider3;
