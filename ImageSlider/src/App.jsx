import "./App.css";
// import ImageSlider from "./ImageSlider";

// import ImageSlider1 from "./ImageSlider1"
// import ImageSlider3 from "./ImageSlider3";
import ImageSlider4 from "./ImageSlider4";

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
      <ImageSlider4
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
