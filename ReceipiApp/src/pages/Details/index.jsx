import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    HandleAddFavouriteItem,
    favouriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        console.log(data);
        setRecipeDetailsData(data.data.recipe); // assuming the structure
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    getRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto  py-10 grid grid-cols-1 lg:gridcols-2 gap-10">
      {" "}
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            className="w-full h-full object-cover group-hover:scale-105 duration-300 "
          />
        </div>
        <h2 className=" text-3xl text-cyan-700 font-medium">
          {recipeDetailsData?.publisher}
        </h2>
        <h3 className="font-bold txt-2xl truncate text-black">
          {" "}
          Details: {recipeDetailsData?.title || "Loading..."}
        </h3>
        <button
          onClick={() => HandleAddFavouriteItem(recipeDetailsData)}
          className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3"
        >
          {recipeDetailsData &&
          favouriteList.findIndex(
            (item) => item.id === recipeDetailsData.id
          ) !== -1
            ? "Remove from Favourites"
            : "Add to Favourites"}
        </button>

        <div className="mt-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
            Ingredients
          </h3>
          <ul className="space-y-4">
            {recipeDetailsData?.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <span className="bg-red-500 text-white font-semibold px-3 py-1 rounded-full text-sm min-w-[60px] text-center">
                  {ingredient.quantity || "-"} {ingredient.unit}
                </span>
                <span className="text-gray-700 font-medium text-base">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
