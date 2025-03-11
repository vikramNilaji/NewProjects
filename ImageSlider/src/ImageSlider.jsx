import { useState, useEffect } from "react";
import "./App.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?limit=${limit}&page=${page}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (er) {
      setErrorMsg(er.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, limit, page]);

  function handlePrevious() {
    setCurrentSlide();
  }

  function handleNext() {}

  console.log(image);

  if (loading) {
    return <div>Loading data... Please wait... </div>;
  }

  if (errorMsg !== null) {
    return <div> Error occurred {errorMsg}</div>;
  } else {
    return (
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrrow arrow-left"
        />

        {image && image.length
          ? image.map((imageItem) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="circle-image"
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicator">
          {image && image.length
            ? image.map((_, index) => (
                <button key={index} className="current-indicator"></button>
              ))
            : null}
        </span>
      </div>
    );
  }
}
