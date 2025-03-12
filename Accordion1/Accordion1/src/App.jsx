import Data from './Data'
import './App.css'

function App() {
 

  return (
    <>
      {Data.map((Items, id) =>
         (<div key={id}> <h3>{Items.id}</h3>
        <h3>{Items.Question} </h3> 
        <h3>{Items.Answer}</h3>  
        </div>))}
     
    </>
  )
}

export default App
