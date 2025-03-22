// import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import "./App.css";

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
  const [number, setNumber] = useState(0);

  function HoverButton(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function ClickButton(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function LeaveRating(){
    setNumber(0)
    console.log(rating)
   
  }

  return (
    <>
      {[...Array(5)].map((_, index) => {
        index=index+1
        return <FaStar key={index} size={50}
        onClick={()=>ClickButton(index)}  onMouseEnter={()=>HoverButton(index)} style={{color: `${index <= rating || number ? "red" :"black"}` }}></FaStar>;
      })}
    </>
  );
};

export default App;
