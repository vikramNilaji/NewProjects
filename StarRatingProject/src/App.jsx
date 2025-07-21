import { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);

  function HoverButton(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function ClickButton(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }



    return (
      <>
        {[...Array(5)].map((_, index) => {
          index = index + 1;
        

              return (
            <FaStar
              key={index}
              size={50}
              onClick={() => ClickButton(index)}
              onMouseEnter={() => HoverButton(index)}
              style={{
                color: `${index <= rating || number ? "red" : "black"}`,
              }}
            ></FaStar>
             }
        
      </>)
    
  }


export default App;

