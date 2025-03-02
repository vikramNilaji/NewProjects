import { useState, useEffect } from "react";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [Images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState();

    async function fetchImages(getUrl) {
    if (!getUrl) return;

    try {
      setLoading(true);
      setErrorMsg(null);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setImages(data);
      setCurrentSlide(0); // Reset slide index when new images load
    } catch (e) {
      setErrorMsg(e.message); 
    } finally {
      setLoading(false);
    }
  }
    console.log(Images)

  useEffect(() => {
    fetchImages(url);
  }, [url, page, limit]);

  return <div className="Contanier"> </div>;
};

export default ImageSlider;

// import { useEffect, useState } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// // import "./styles.css";

// export default function App({ url, limit = 5, page = 1 }) {
//   const [images, setImages] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [loading, setLoading] = useState(false);

//   async function fetchImages(getUrl) {
//     if (!getUrl) return;

//     try {
//       setLoading(true);
//       setErrorMsg(null);

//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setImages(data);
//       setCurrentSlide(0); // Reset slide index when new images load
//     } catch (e) {
//       setErrorMsg(e.message); 
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handlePrevious() {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   }

//   function handleNext() {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   }

//   console.log(images)

//   useEffect(() => {
//     fetchImages(url);
//   }, [url, page, limit]);

//   if (loading) return <div>Loading data! Please wait...</div>;
//   if (errorMsg) return <div>Error occurred! {errorMsg}</div>;
//   if (!images.length) return <div>No images available</div>;

//   return (
//     <div className="container">
//       <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

//       <img
//         key={images[currentSlide]?.id}
//         alt="slide"
//         src={images[currentSlide]?.download_url}
//         className="current-image"
//       />

//       <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

//       <span className="circle-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </span>
//     </div>
//   );
// }
