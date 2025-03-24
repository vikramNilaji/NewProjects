// import { useState } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

// function App() {
//   const NoOfStars = 10;
//   const [Hover, setHover] = useState(0);
//   const [Rating, setRating] = useState(0);
//   function HandleMouseHover(getCurrentIndex) {
//    setHover(getCurrentIndex)
//   }
//   function HandleOnClick(getCurrentIndex) {
//     setRating(getCurrentIndex)
//   }
//   function HandleMouseLeave() {
//     setHover(Rating)
//   }
//   return (
//     <>
//       {[...Array(5)].map((_, index) => {
//         index = index + 1;
//         return (
//           <FaStar
//             className={index <= (Rating || Hover) ? "active" : "inactive"}
//             key={index}
//             size={40}
//             onMouseLeave={() => HandleMouseLeave()}
//             onMouseEnter={() => HandleMouseHover(index)}
//             onClick={() => HandleOnClick(index)}
//           ></FaStar>
//         );
//       })}
//     </>
//   );
// }

// export default App;

const App = () => {
  const [rating, setRating] = useState(0);
  function ClickHandler(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function HoverHandler(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function LeaveHandler(currentIndex) {
    setRating(currentIndex)
  }

  return (
    <>
      {[...Array(5)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            key={index}
            size={50}
            onClick={() => ClickHandler(index)}
            onMouseEnter={() => HoverHandler(index)}
            onMouseLeave={()=>LeaveHandler(index)}
            className={index <= rating ? "active" : "inactive"}
          >
            {" "}
          </FaStar>
        );
      })}
    </>
  );
};

export default App;
