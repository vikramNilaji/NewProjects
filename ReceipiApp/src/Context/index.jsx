import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading,setLoading]=useState(false)
  const [recipeList,setRecipeList]=useState([])
  const [recipeDetailsData,setRecipeDetailsData]=useState(null)
  

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
      }
     
    } catch (error) {
      console.log(error.message);
      setLoading(false)
      setSearchParam('')
    }
  }

   console.log(loading,recipeList);
  return (
    <GlobalContext.Provider value={{ searchParam, loading,recipeList,setSearchParam,HandleSubmit,recipeDetailsData,setRecipeDetailsData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
