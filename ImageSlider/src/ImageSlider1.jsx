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
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

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
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className=" arrow arrow-left"
        />

        {images && images.length
          ? images.map((imageItem, index) => {
              return (
                <img
                  key={imageItem.id}
                  src={imageItem.download_url}
                  alt={imageItem.download_url}
                  className={
                    currentSlide === index
                      ? "current-image"
                      : " hide-current-image"
                  }
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                />
              ))
            : null}
        </span>
      </div>
    );
  }
};

export default ImageSlider1; 
