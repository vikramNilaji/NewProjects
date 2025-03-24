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

import { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);
<<<<<<< HEAD
  function ClickHandler(currentIndex) {
=======
  const [number, setNumber] = useState(0);

  function HoverButton(currentIndex) {
>>>>>>> 38906aec547cbb89b91b9cc305783841bf697355
    setRating(currentIndex);
    console.log(currentIndex);
  }

<<<<<<< HEAD
  function HoverHandler(currentIndex) {
=======
  function ClickButton(currentIndex) {
>>>>>>> 38906aec547cbb89b91b9cc305783841bf697355
    setRating(currentIndex);
    console.log(currentIndex);
  }

<<<<<<< HEAD
  function LeaveHandler(currentIndex) {
    setRating(currentIndex)
=======
  function LeaveRating(){
    setNumber(0)
    console.log(rating)
   
>>>>>>> 38906aec547cbb89b91b9cc305783841bf697355
  }

  return (
    <>
      {[...Array(5)].map((_, index) => {
<<<<<<< HEAD
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
=======
        index=index+1
        return <FaStar key={index} size={50}
        onClick={()=>ClickButton(index)}  onMouseEnter={()=>HoverButton(index)} style={{color: `${index <= rating || number ? "red" :"black"}` }}></FaStar>;
>>>>>>> 38906aec547cbb89b91b9cc305783841bf697355
      })}
    </>
  );
};

export default App;
