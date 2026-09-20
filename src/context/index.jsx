import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipeResult, setRecipeResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favoriteRecipeList, setFavoriterRecipeList] = useState([]);

  const navigate = useNavigate();

  const addItemsToFavoriteList = (getCurrentItem) => {
    const cpyOfList = [...favoriteRecipeList];
    const index = cpyOfList.findIndex(
      (eachItem) => eachItem.id === getCurrentItem.id,
    );

    if (index === -1) {
      cpyOfList.push(getCurrentItem);
    } else {
      cpyOfList.splice(index, 1);
    }
    setFavoriterRecipeList(cpyOfList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setRecipeResult([]);
    try {
      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchParams}`,
      );
      const recipeData = await response.json();
      const { data } = recipeData;
      const { recipes } = data;
      if (recipes) {
        setRecipeResult(recipes);
        setSearchParams("");
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParams("");
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        recipeResult,
        loading,
        recipeDetails,
        setRecipeDetails,
        addItemsToFavoriteList,
        favoriteRecipeList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
