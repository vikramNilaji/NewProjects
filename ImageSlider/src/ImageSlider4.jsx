import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./App3.css"

const ImageSlider4 = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [Loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  function HandleNext() {

    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

  }

  function HandlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const FetchData = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const jsonData = await response.json();

      if (jsonData) {
        setLoading(false);
        setImages(jsonData);
      } else {
        setLoading(true);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
    console.log(images);
  };

  useEffect(() => {
    FetchData(url);
  }, [url]);

  if (Loading) {
    return <h1>Loading... Please wait......</h1>;
  }

  if (errorMsg) {
    return <h1>Error Occurred: {errorMsg}</h1>;
  } else {

    return (


      <div className="container1">

        <BsArrowLeftCircleFill style={{ height: "50px", weight: "50px" }} onClick={HandlePrev} className="arrow arrow-left1" />
        <BsArrowRightCircleFill onClick={HandleNext} className="arrow arrow-right1" />

        <span className="circle-indicator">

          {images &&
            images.length
            ? images.map((imageItem, index) => {
              return (
                <img
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  key={imageItem.id}
                  className={currentSlide === index ? "current-slide1" : "hide-current-slide1"}
                />
              );
            })
            : null}

          {images && images.length
            ? images.map((_, index) => {
              return <button onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "current-indicator1" : "inactive-indicator1"} key={index}></button>;
            })
            : null}
        </span>


      </div>

    )
  }
}


export default ImageSlider4
