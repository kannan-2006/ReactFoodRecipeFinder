import React, { useContext } from "react";
import { Link } from "react-router";
import { GlobalContext } from "../../context";
const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  const handleInput = (event) => {
    setSearchParams(event.target.value);
  };
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center my-3 px-3">
      <Link to="/">
        <h3 className="text-xl font-mono text-teal-500 p-2 font-semibold cursor-pointer">
          FoodRecipe
        </h3>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the recipe name"
          value={searchParams}
          onChange={handleInput}
          className="border-thin w-70 rounded-full h-10 bg-gray-200 border-none p-3 my-2 capitalize shadow-md outline-none md:w-120"
        />
      </form>
      <ul className="flex items-center gap-6 my-3">
        <Link to="/">
          <li className="bg-teal-200 p-2 rounded-xl font-semibold shadow-md font-mono">
            Home
          </li>
        </Link>
        <Link to="/favorite">
          <li className="bg-teal-200 p-2 rounded-xl font-semibold text-red-500 font-mono shadow-md">
            Favorites
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
