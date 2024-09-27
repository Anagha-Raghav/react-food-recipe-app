import React from "react";

const FoodCard = ({ foodDetail }) => {
  console.log(foodDetail);
  return (
    <div className="foodContainer">
      {foodDetail && foodDetail.length>0 ? (
        foodDetail.map((item) => (
          <div className="foodImage">
            <img src={item.strMealThumb} />
            <p>{item.strMeal}</p>
            <button>Recipe</button>
          </div>
        ))
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
};

export default FoodCard;
