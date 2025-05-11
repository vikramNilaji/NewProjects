import Menu from "./Menu.js"
import './App.css'
import TreeView from "./TreeView.jsx"
import ToggleExample from "./ToggleExample.jsx"

function App() {


  return (
    <>
     <TreeView Menu={Menu} />
     <ToggleExample/>
    </>
  )
}

export default App
