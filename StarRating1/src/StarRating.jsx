import { FaStar } from "react-icons/fa";
import "./App.css"

import { useState } from "react";

const StarRating = ({ Numbers = 5 }) => {


 const[rating,setRating]=useState(0)
  const [rating, setRating] = useState(0)



  function OnclickHandle(currentIndex) {
    console.log(currentIndex);
    setRating(currentIndex)
  }

  function OnMouseEnterHandle(currentIndex) {
    console.log(currentIndex);
    setHover(currentIndex)
  }

  function OnMouseLeaveHandle() {
    setHover(rating)
  }

  return (
    <>
      {[...Array(Numbers)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={50}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => OnclickHandle(index)}
            onMouseEnter={() => OnMouseEnterHandle(index)}
            onMouseLeave={() => OnMouseLeaveHandle()}
          />
        );
      })}
    </>
  );
};

export default StarRating;
