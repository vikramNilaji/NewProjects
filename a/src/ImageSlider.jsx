import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./App6.css";

const ImageSlider = ({ url, limit = 10, page = 1 }) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  function RightHandle() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function LeftHandle() {
    setCurrentSlide(currentSlide === 0 ? images.length : currentSlide - 1);
  }

  const FetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const ImageData = await response.json();

      if (ImageData) {
        setLoading(false);
        setImages(ImageData);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  };
  console.log(images);

  useEffect(() => {
    FetchData(url);
  }, [url, page, limit]);

  if (loading) {
    return <div> Loading.... Please wait</div>;
  } else if (errorMsg) {
    return <div> Error Occurred : {errorMsg} </div>;
  } else {
    return (
      <>
        <div className="container">
          {images && images.length
            ? images.map((imageitems, index) => {
                return (
                  <div>
                    <img
                      key={index + 1}
                      src={imageitems.download_url}
                      alt={imageitems.download_url}
                      className={
                        currentSlide === index
                          ? "active-images"
                          : "inactive-images"
                      }
                    />
                  </div>
                );
              })
            : null}

          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button key={index} onClick={() => setCurrentSlide(index)}>
                    {" "}
                  </button>
                );
              })
            : null}
        </div>
        <BsArrowLeftCircleFill onClick={LeftHandle} className="arrow-circle" />
        <BsArrowRightCircleFill
          onClick={RightHandle}
          className="arrow-circle"
        />
      </>
    );
  }
};

export default ImageSlider;

// import { useState, useEffect } from "react";
// import "./App6.css";
// import {BsArrowLeftCircleFill,BsArrowRightCircleFill}  from "react-icons/bs"

// const ImageSlider = ({ url, page = 1, limit = 10 }) => {
//   const [images, setImages] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const fetchData = async (getUrl) => {
//     try {
//       setLoading(true);
//       setErrorMsg(null);

//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const imageData = await response.json();

//       if (imageData) {
//         setImages(imageData);
//       }
//     } catch (error) {
//       setErrorMsg(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   function LeftHandle() {
//     setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
//     console.log(currentSlide+1)
//   }

//   function RightHandle() {
//     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
//     console.log(currentSlide+1)
//   }

//   useEffect(() => {
//     fetchData(url);
//   }, [url, page, limit]);

//   if (loading) {
//     return <div>Loading... Please wait...</div>;
//   } else if (errorMsg) {
//     return <div>Got Error: {errorMsg}</div>;
//   } else {
//     return (
//       <div className="container">

//         {images && images.length ? (
//           images.map((imageItem, index) => {
//             return (
//               <img
//                 key={index}
//                 src={imageItem.download_url}
//                 alt={`Image ${index + 1}`}
//                 className={
//                   currentSlide === index
//                     ? "current-image"
//                     : "hide-current-image"
//                 }
//               />
//             );
//           })
//         ) : (
//           <div>No Images Found</div>
//         )}
//         <div>

//         <BsArrowLeftCircleFill onClick={LeftHandle}/>     <BsArrowRightCircleFill onClick={RightHandle}/>
//           {images && images.length
//             ? images.map((_, index) => {
//                 return (
//                   <button onClick={()=>setCurrentSlide(index)}
//                     className={
//                       currentSlide === index
//                         ? "circle-indicators"
//                         : "inactive-indicator"
//                     }
//                   ></button>
//                 );
//               })
//             : null}
//         </div>
//       </div>
//     );
//   }
// };

// export default ImageSlider;

// import { useState } from "react";
// import { useEffect } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// const ImageSlider = ({ url, page = 1, limit = 10 }) => {
//   const [images, setImages] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const FetchData = async (getUrl) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const ImageData = await response.json();
//       if (ImageData) {
//         setImages(ImageData);
//               }
//     } catch (error) {
//       setLoading(false);
//       setErrorMsg(error.message);
//     }

//   };

//   useEffect(() => {
//     FetchData(url);
//   }, [url, limit, page]);

//   if (loading) {
//     return <div> Loading... Please Wait...</div>;
//   } else if (errorMsg) {
//     return <div> Error Occurred : {errorMsg}</div>;
//   } else {
//     return (
//       <>
//         <BsArrowLeftCircleFill />

//         {images && images.length > 0 ? (
//   images.map((ImageItem, index) => (
//     <img
//       src={ImageItem.download_url}
//       alt={ImageItem.download_url}
//       key={index}
//     />
//   ))
// ) : (
//   <div>No images available</div>
// )}

//         <BsArrowRightCircleFill />
//       </>
//     );
//   }
// };

// export default ImageSlider;

// import { useState, useEffect } from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// const ImageSlider = ({ url, page = 1, limit = 10 }) => {
//   const [images, setImages] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const FetchData = async (getUrl) => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
//       const ImageData = await response.json();
//       if (ImageData) {
//         setImages(ImageData); // Update state with the fetched data
//       }
//     } catch (error) {
//       setErrorMsg(error.message);
//     } finally {
//       setLoading(false); // Set loading to false after data is fetched or an error occurs
//     }
//   };

//   useEffect(() => {
//     FetchData(url);
//   }, [url, limit, page]);

//   if (loading) {
//     return <div>Loading... Please Wait...</div>;
//   } else if (errorMsg) {
//     return <div>Error Occurred: {errorMsg}</div>;
//   } else {
//     return (
//       <div>
//         <BsArrowLeftCircleFill />

//         {/* Render images only if images exist and have content */}
//         {images && images.length > 0 ? (
//           images.map((ImageItem, index) => (
//             <img
//               key={index}
//               src={ImageItem.download_url}
//               alt={`Image ${index + 1}`}
//             />
//           ))
//         ) : (
//           <div>No images available</div> // Fallback message if no images are available
//         )}

//         <BsArrowRightCircleFill />
//       </div>
//     );
//   }
// };

// export default ImageSlider;
