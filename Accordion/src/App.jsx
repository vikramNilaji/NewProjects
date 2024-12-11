import Data from "./Data.js"
function App() {

  function HandleSingleButton(){
    return(
      

    )

  }
  
  return (
    <>
     <div>
      {Data.map((dataItems,index)=>(
        <div key={index}>
        <h1>{dataItems.Question}</h1>
        <h1 onClick={HandleSingleButton}>+</h1>
        </div>
       
      ))}
     </div>
    </>
  )
}

export default App
