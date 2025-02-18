<<<<<<< Updated upstream
import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

const  App=({url} ,limit = 5, page = 2) =>{
  const [count, setCount] = useState(0);

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(
        ` ${getUrl} ? page=${page} & limit=${limit}`
      );
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(flase);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }


useEffect(
  () => {
    if (url !== "") fetchImages(url);
  },
  [url]
);

console.log(images);

if (loading) {
  <div>Loading data ! Pleas wait</div>;
}

if (errorMsg === null) {
  <div>
    error occurred ! {errorMsg}
  </div>;
}

return (<div className="container"></div>);

}
=======
import "./App.css";

function App() {
  return ( <>
           Hi

  </>
)}

>>>>>>> Stashed changes
export default App;
