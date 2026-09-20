import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeCard from "../../component/recipe/recipeCard";

const HomePage = () => {
  const { recipeResult, loading } = useContext(GlobalContext);
  return (
    <div>
      {loading && (
        <h3 className="text-3xl text-red-600 text-center font-black font-serif">
          Loading... Please Wait
        </h3>
      )}
    <ul className="flex flex-col justify-center flex-wrap gap-10 items-center my-3 p-2 md:flex-row">
        {recipeResult.length > 0 ? (
          recipeResult.map((eachItem) => (
            <RecipeCard key={eachItem.id} item={eachItem} />
          ))
        ) : (
          <h1 className="text-3xl text-orange-600 text-center font-black font-serif">
            Nothing to show please search something...
          </h1>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
