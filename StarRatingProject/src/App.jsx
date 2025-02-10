import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

function App() {
  const NoOfStars = 10;

  const [Hover, setHover] = useState(0);
  const [Rating, setRating] = useState(0);

  function HandleMouseHover(getCurrentIndex) {
   setHover(getCurrentIndex)
  }

  function HandleOnClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }

  function HandleMouseLeave() {
    setHover(Rating)
  }

  return (
    <>
      {" "}
      {[...Array(5)].map((_, index) => {
        index = index + 1;

        return (
          <FaStar
            className={index <= (Rating || Hover) ? "active" : "inactive"}
            key={index}
            size={40}
            onMouseLeave={() => HandleMouseLeave()}
            onMouseEnter={() => HandleMouseHover(index)}
            onClick={() => HandleOnClick(index)}
          ></FaStar>
        );
      })}
    </>
  );
}

export default App;
