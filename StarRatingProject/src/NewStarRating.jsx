import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./App.css";
import { index } from "mathjs";

const NewStarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hover,setHover]=useState(0)

  function HandleClick(currentIndex) {
    setSelectedStar(currentIndex);
    // console.log(currentIndex);
    console.log(selectedStar);
  }
function HandleHover(currentIndex){
  setHover(currentIndex)
  console.log(currentIndex)
}

function HandleLeave(currentIndex){
  setHover(currentIndex)
  console.log(currentIndex)
}




  return (
    <div className="starContainer">
      {[...Array(5)].map((_, index) => {
        let NewIndex = index + 1;
        return (
          <div
            className={`Star ${
              NewIndex <= (selectedStar || hover) ? "active11" : "inactive11"
            }`}
            key={index} onMouseLeave={()=>HandleLeave(0)} onMouseEnter={()=>HandleHover(NewIndex)}
            onClick={() => HandleClick(NewIndex)}
            
          > 
            <FaStar />
          </div>
        );
      })}
      <h2> you rated <div className="active11">{hover || selectedStar}</div> rating</h2>
    </div>
  );
};

export default NewStarRating;
