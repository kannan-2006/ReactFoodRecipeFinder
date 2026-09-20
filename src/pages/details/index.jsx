import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context";

const DetailsPage = () => {
  const { id } = useParams();
  const {
    recipeDetails,
    setRecipeDetails,
    addItemsToFavoriteList,
    favoriteRecipeList,
  } = useContext(GlobalContext);
  useEffect(() => {
    const getData = async () => {
      const apiUrl = `https://forkify-api.jonas.io/api/v2/recipes/${id}`;
      const response = await fetch(apiUrl);
      const recipeDetailsData = await response.json();
      const { data } = recipeDetailsData;
      const { recipe } = data;
      if (recipe) {
        setRecipeDetails(recipe);
      }
    };
    getData();
  }, []);
  const isRecipeInFavoriteList = favoriteRecipeList.findIndex(
    (eachItem) => eachItem.id === recipeDetails.id,
  );
  return (
    <div className="grid p-3 gap-10 justify-center h-full overflow-auto lg:grid-cols-2">
      <div className="overflow-hidden">
        <img
          src={recipeDetails !== null ? recipeDetails.image_url : null}
          className="w-150 rounded-2xl  hover:scale-105  duration-300 lg:w-full"
        />
      </div>
      <div>
        <p className="text-green-900 font-serif font-semibold">
          {recipeDetails !== null ? recipeDetails.publisher : ""}
        </p>
        <h3 className="font-serif font-semibold text-2xl">
          {recipeDetails !== null ? recipeDetails.title : ""}
        </h3>
        <button
          className="w-50 p-2 rounded-lg text-center text-white bg-black font-serif text-sm cursor-pointer uppercase my-2"
          onClick={() => {
            addItemsToFavoriteList(recipeDetails);
          }}
        >
          {isRecipeInFavoriteList === -1
            ? "save as favorite"
            : "revome from favorite"}
        </button>
        <h2 className="font-bold font-serif text-3xl my-2 underline">
          Ingredients :
        </h2>
        <ul className="list-none">
          {recipeDetails !== null &&
            recipeDetails.ingredients.map((eachItem, index) => (
              <li key={index} className="my-3">
                <p className="font-semibold font-serif text-xl">
                  Quantity:{" "}
                  <span className="text-yellow-950">{eachItem.quantity}</span>
                </p>
                <p className="font-semibold font-serif text-xl">
                  Description:
                  <span className="text-yellow-950">
                    {eachItem.description}
                  </span>
                </p>
              </li>
            ))}
        </ul>
        <p className="text-orange-900 text-xl font-serif font-semibold">
          Cooking Time:{recipeDetails !== null && recipeDetails.cooking_time}
        </p>
        <p className="text-orange-900 text-xl font-serif font-semibold">
          Servings: {recipeDetails !== null && recipeDetails.servings}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
