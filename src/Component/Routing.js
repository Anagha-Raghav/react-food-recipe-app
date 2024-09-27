import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Recipe from "./Recipe";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<Recipe />} />
      </Routes>
    </div>
  );
};

export default Routing;
