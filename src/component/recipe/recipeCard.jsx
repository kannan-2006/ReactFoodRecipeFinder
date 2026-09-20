import React from "react";
import { Link } from "react-router";
const RecipeCard = ({ item }) => {
  const { id, publisher, title, image_url } = item;
  return (
    <li className="w-70 bg-white-100 rounded-xl list-none p-2 shadow-2xl">
      <img src={image_url} className="w-100 h-40 rounded-xl" />
      <p className="text-green-900 font-serif font-semibold">{publisher}</p>
      <h3 className="font-serif font-semibold">{title}</h3>
      <Link to={`/recipe-item/${id}`}>
        <button className="w-50 p-2 rounded-lg text-center text-white bg-black font-serif text-sm cursor-pointer">
          Recipe Details
        </button>
      </Link>
    </li>
  );
};

export default RecipeCard;
