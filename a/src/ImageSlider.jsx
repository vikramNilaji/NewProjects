import { useState, useEffect } from "react";
import "./App6.css";

const ImageSlider = ({ url, page = 1, limit = 10 }) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      setErrorMsg(null);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const imageData = await response.json();

      if (imageData) {
        setImages(imageData);
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading... Please wait...</div>;
  } else if (errorMsg) {
    return <div>Got Error: {errorMsg}</div>;
  } else {
    return (
      <div className="container">
        {images && images.length ? (
          images.map((imageItem, index) => {
            return (
              <img
                key={index}
                src={imageItem.download_url}
                alt={`Image ${index + 1}`}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "hide-current-image"
                }
              />
            );
          })
        ) : (
          <div>No Images Found</div>
        )}
        <div className={} >
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    className={
                      currentSlide === index
                        ? "circle-indicators"
                        : "inactive-indicator"
                    }
                  ></button>
                );
              })
            : null}
        </div>
      </div>
    );
  }
};

export default ImageSlider;
