import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider1 = () => {
  const [loading, setLoading] = useState(true);
  const [newError, setNewError] = useState("");
  const [newData, setNewData] = useState([]);
  const [selectedPic,setSelectedPic]=useState(0)

  async function FetchData() {
    try {
      setLoading(true);
      let response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=10`
      );
      let JsonData = await response.json();
      if (JsonData) {
        setLoading(false);
        setNewData(JsonData);
      } else {
        setLoading(false);
        console.log("Error");
        setNewError("Error Occured");
      }
      console.log(JsonData);
    } catch (error) {
      setLoading(false)
      console.log(error.message);
       setNewError(`${error.message}`);
    }
  }

  function MoveLeft() {
    setSelectedPic(selectedPic === 0 ? newData.length-1: selectedPic-1  )
  }

  function MoveRight() {
    setSelectedPic(selectedPic === newData.length-1 ? 0: selectedPic+1)
  }
  function ButtonSelector(currentIndex){
    setSelectedPic(currentIndex)
  }

  useEffect(() => {
    FetchData();
  }, []);

  if (loading) {
    return <div> Loading... Please wait</div>;
  }

  if (newError) {
    return <div> Error Occurred {newError}</div>;
  } else {
    return (
      <div>
        <div className="Container">
          {newData && newData.length
            ? newData.map((items, index) => {
                return (
                  <div key={index} className="Images">
                    {" "}
                    <img
                      src={items.download_url}
                      alt={items.download_url}
                      className={selectedPic === index? "EnablePic":"DisablePic" }
                    />
                  </div>
                );
              })
            : null}
        </div>
        <div className="NosContainer">
          {newData && newData.length
            ? newData.map((_, index) => {
                return (
                  
                    <button onClick={()=>ButtonSelector(index)} key={index} className= {`${selectedPic === index? "EnableIndicator" : "DisableIndicator"}`}>{index+1} </button>
                  
                );
              })
            : null}
        </div>
        <div className="Buttons">
          <button onClick={MoveLeft}> Left</button>
          <button onClick={MoveRight}> Right</button>
        </div>
      </div>
    );
  }
};

export default ImageSlider1;
