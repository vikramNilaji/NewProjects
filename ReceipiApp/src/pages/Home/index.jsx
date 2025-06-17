import React from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../components/Recipe-Item";
import { useContext } from "react";

const index = () => {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) return <div> Loading.... Please wait..!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show .. Please search something
        </div>
      )}
    </div>
  );
};

export default index;
