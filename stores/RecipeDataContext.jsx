import { createContext, useState, useEffect } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipeLists, setRecipeLists] = useState([])
    const [recipe, setRecipe] = useState({
      id : 0,
      recipeName: "",
      imageUrl: "",
      shortDescription: "",
      instructions: [],
      ingredients: []
    });
    const [favourites, setFavourites] = useState([])
  return (
    <>
        <RecipeContext.Provider value={{recipeLists, setRecipeLists, recipe, setRecipe, favourites, setFavourites}}>
            {children}
        </RecipeContext.Provider>
    </>
  )
}

export {RecipeProvider, RecipeContext}