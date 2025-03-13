import Data from './Data'
import { useState } from 'react'
import './App.css'

function App() {

  const [selectedId,setSelectedId]=useState([])
  const [SingleSelection,setSingleSelection]=useState(true)

  function HandleSelectionButton(){
    setSingleSelection(!SingleSelection)
  }

  function HandleSingleButton(currentId){
    setSelectedId(selectedId.includes (currentId) ? [] : [currentId])
    console.log(currentId)

  }

  function HandleMultiButton(currentId){

    if(selectedId.includes(currentId)){
      setSelectedId(selectedId.filter((id)=> id !== currentId))
    }

    else{

      setSelectedId( [...selectedId,currentId])
    }



  }
 

  return (
    <>
    <button onClick={HandleSelectionButton}    >{SingleSelection ?  "MultiSelection" : "SingleSelection"}</button>
      {Data.map((Items, id) =>
         (<div key={id}> <h3>{Items.id}</h3>
         <h3>{Items.Question} </h3> 
        <h3 onClick={ SingleSelection ? ()=> HandleSingleButton(Items.id) :  ()=> HandleMultiButton(Items.id)} >{selectedId.includes(Items.id) ? "-" : "+"}</h3>
        {selectedId.includes(Items.id) ? <h3>{Items.Answer}</h3>: null}  
        </div>))}
     
    </>
  )
}

export default App
