import "./App.css";
import ImageSlider from "./ImageSlider";
<<<<<<< Updated upstream
// import ImageSlider1 from "./ImageSlider1"
import ImageSlider3 from "./ImageSlider3";

function App() {
  return (
     <>
      {/* <ImageSlider
       url={"https://picsum.photos/v2/list/"}
        page={"1"}
    limit={"10"}
      /> */}

      
      {/* 
      <ImageSlider1  url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}/> */}

=======
import ImageSlider1 from "./ImageSlider1"

function App() {
  return (
    <>
       {/* <ImageSlider
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}
      />    */}

      <ImageSlider1  url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}/> 
>>>>>>> Stashed changes
      
      
      <ImageSlider3 url={"https://picsum.photos/v2/list/"} page={"1"} limit={"10"}/>
    </>
  );
}

export default App;
