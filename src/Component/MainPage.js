import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const MainPage = () => {
  const [mealData, setMealData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    getMeal();
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const getMeal = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await response.json();
    setMealData(data.meals);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>FOOD RECIPE APP</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter For Recipe"
            onChange={handleChange}
          />
          <button onClick={getMeal}>Search</button>
        </div>
        <div>
          <FoodCard foodDetail={mealData} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
