import React from 'react'
import RecipeItem from '../../components/Recipe-Item'
import { GlobalContext } from '../../Context'
import { useContext } from 'react'

const favourites= () => {
   const { favouriteList } = useContext(GlobalContext);
  return (
  <div>
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      
       {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing is added in favourites
        </div>
      )}
    </div>
  
    </div>
  )
}

export default favourites
