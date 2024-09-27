import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState();
  const { mealid } = useParams();
  console.log(mealid);
  const getRecipe = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data.meals[0]);
  };
  if (recipe !== "") {
    getRecipe();
  }
  return (
    <div>
      {recipe && Object.keys(recipe) ? (
        <div className="recipeContainer">
          <img src={recipe.strMealThumb} />
          <div className="recipeDetails">
            <h1>Recipe Details</h1>
            <span>{recipe.strMeal}</span>
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recipe;
