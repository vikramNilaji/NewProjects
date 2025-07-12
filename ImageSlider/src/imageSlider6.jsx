import React, { useEffect, useState } from "react";
import "./ImageSlider6.css";
const ImageSlider6 = ({ url, page = 1, limit = 10 }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentSlide,setCurrentSlide]=useState(0)

  async function FetchingData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        console.log(data);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("error occurred");
      }
    } catch (e) {
      setLoading(false);
      // console.log(e.message)
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    FetchingData(url);
  }, [url]);

  function LeftSide(){
    setCurrentSlide(currentSlide===0? image.length-1:currentSlide-1)

  }
  function RightSide(){
    setCurrentSlide(currentSlide === image.length-1? 0: currentSlide+1 )

  }

  if (loading) {
    return "Loading... Please wait";
  } else if (errorMsg) {
    return <h1>Error occured..{errorMsg}</h1>;
  } else {
    return (
      <div className="ImageContainer">
        {image && image.length
          ? image.map((items, index) => {
              return (
                <div className="Images" key={index}>
                  {" "}
                  <img
                    src={items.download_url}
                    alt="images"
                    style={{ height: "300px", width: "300px" }}
                    className={currentSlide === index? "currentSlide":"hideCurrentSlide"  }
                  />
                </div>
              );
            })
          : null}{" "}
        {image.length
          ? image.map((_, index) => {
              return (
                <button onClick={()=> setCurrentSlide(index)} 
                // className={currentSlide === index? "currentSlide":"hideCurrentSlide"  }
                  className="Buttons"
                  style={{ backgroundColor: "red" }}
                  key={index}
                >
                  {index+1}
                </button>
              );
            })
          : null}
          <div>  
          <button onClick={LeftSide} className="Buttons">Left</button>
          <button onClick={RightSide} className="Buttons">Right</button>
           </div>

        
      </div>
    );
  }
};

export default ImageSlider6;
