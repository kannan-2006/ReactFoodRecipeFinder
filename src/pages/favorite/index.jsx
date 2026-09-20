import { useContext } from "react";
import RecipeCard from "../../component/recipe/recipeCard";
import { GlobalContext } from "../../context";
const FavoritePage = () => {
  const { favoriteRecipeList } = useContext(GlobalContext);
  return (
    <div>
      <ul className="flex flex-col justify-center flex-wrap gap-10 items-center my-3 p-2 md:flex-row">
        {favoriteRecipeList.length > 0 ? (
          favoriteRecipeList.map((eachItem) => (
            <RecipeCard key={eachItem.id} item={eachItem} />
          ))
        ) : (
          <h1 className="text-3xl text-orange-600 text-center font-black font-serif">
            Nothing is added yet...
          </h1>
        )}
      </ul>
    </div>
  );
};

export default FavoritePage;
