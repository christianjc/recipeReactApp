
import "./App.css";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "8f4b7e60";//process.env.REACT_APP_APP_ID;
  const APP_KEY = "1e75978c5c2123c04b25acb2c7a662ec";//process.env.REACT_APP_APP_KEY;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  // const example_req = `https://api.edamam.com/search?&q=${query}`;
  // const example_req1 = `https://api.edamam.com/search?&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const example_req2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(example_req2);
    const data = await response.json();
    setRecipes([]);
    setRecipes(data.hits)
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
