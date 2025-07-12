import "./App.css";
// import ImageSlider from "./ImageSlider";

// import ImageSlider1 from "./ImageSlider1"
import ImageSlider3 from "./ImageSlider3";
import ImageSlider6 from "./ImageSlider6";
import Navbar from "./Navbar";

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

      {/* <ImageSlider3
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <ImageSlider4
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <Navbar/> */}
      <ImageSlider6 url={"https://picsum.photos/v2/list/"} page={"1"} limit={"10"}/>
    </>
  );
}

export default App;
