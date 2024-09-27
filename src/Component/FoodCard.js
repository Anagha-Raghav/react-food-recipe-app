import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ foodDetail }) => {
  console.log(foodDetail);
  return (
    <div className="foodContainer">
      {foodDetail && foodDetail.length > 0 ? (
        foodDetail.map((item) => (
          <div className="foodImage">
            <img src={item.strMealThumb} />
            <p>{item.strMeal}</p>
            <Link to={`${item.idMeal}`}>
              <button>Recipe</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Please Enter Food Name</p>
      )}
    </div>
  );
};

export default FoodCard;
