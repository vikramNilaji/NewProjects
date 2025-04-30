
// import Accordion from "./Accordion"
// import Color from "./Color";
import Calculator from "../Calculator";
import Calculator11 from "./Calculator11";
import Acco from "./Acco"
import ImageSlider from "./ImageSlider";
import LoadMoreData from "./LoadMoreData";
import Tree from "./Tree";
import Sidemenu from "./Sidemenu";

function App() {
 
  return (
    <>
     {/* <Accordion/>
     <Color/> */}
     {/* <Calculator/> */}
     {/* <Calculator11/> */}
     {/* <Acco/> */}
     {/* <ImageSlider 
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"10"}/> */}
        {/* <LoadMoreData/> */}
        <Tree Sidemenu={Sidemenu}/>
    </>
  );
}

export default App;
