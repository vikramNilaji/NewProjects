import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);


const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading,setLoading]=useState(false)
  const [recipeList,setRecipeList]=useState([])
  const [recipeDetailsData,setRecipeDetailsData]=useState(null)
  const [favouriteList,setFavouriteList]=useState([])
  const navigate=useNavigate()
  

  async function HandleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );  

      const data = await response.json();
      if(data?.data?.recipes){
        setRecipeList(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
        navigate('/')
      }
     
    } catch (error) {
      console.log(error.message);
      setLoading(false)
      setSearchParam('')
    }
  }
  function HandleAddFavouriteItem(getCurrentItem){
    console.log(getCurrentItem)
    let copyFavouriteList=[...favouriteList]
    const index=copyFavouriteList.findIndex(item=>item.id === getCurrentItem.id)
    if(index === -1){
      copyFavouriteList.push(getCurrentItem)
      }
    else{
      copyFavouriteList.splice(index)
    }
    setFavouriteList(copyFavouriteList)
  }

   console.log(loading,recipeList,favouriteList);
  return (
    <GlobalContext.Provider value={{ searchParam, loading,recipeList,setSearchParam,HandleSubmit,recipeDetailsData,setRecipeDetailsData,HandleAddFavouriteItem,favouriteList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
