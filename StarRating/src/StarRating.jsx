import React from "react";
import {FaStar} from "react-icons/fa"
import { useState } from "react";
import "./styles.css"

const StarRating = ({ NoOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
     setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(NoOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover||rating) ? 'active' : 'inactive  '}
            onClick={() => handleClick(index)} 
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
