import { FaStar } from "react-icons/fa";
import "./StarRating.css";
import { useState } from "react";

const StarRating = () => {
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(0);

  function StarButton(CurrentIndex) {
    setSelected(CurrentIndex);
    console.log(CurrentIndex);
  }

  function MouseEnter(HoverIndex) {
    setHover(HoverIndex);
  }

  function MouseLeave(HoverIndex) {
    setHover(HoverIndex);
  }

  return (
    <div className="container">
      {[...Array(5)].map((_, index) => {
        let NewIndex = index + 1;
        return (
          <div
            key={index}
            onMouseLeave={() => MouseLeave(0)}
            onMouseEnter={() => MouseEnter(NewIndex)}
            onClick={() => StarButton(NewIndex)}
            className={`stars ${
              NewIndex <= (hover || selected) ? "active"   : null
            }`}
          >
            <FaStar />{"*"}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
