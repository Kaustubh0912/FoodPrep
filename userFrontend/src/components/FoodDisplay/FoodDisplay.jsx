import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItemCard from "../FoodItemCard/FoodItemCard";
import Loader from "../Loader/Loader";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  const foodItems = Array.isArray(food_list) ? food_list : [];

  useEffect(() => {
    // Set loading to true when the component mounts
    setLoading(true);

    // Check if food_list is loaded
    if (food_list && food_list.length > 0) {
      setLoading(false); // Stop loading when data is available
    }
  }, [food_list]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {foodItems.map((food) => {
          if (category === "All" || category === food.category) {
            return (
              <FoodItemCard
                key={food._id}
                id={food._id}
                name={food.name}
                price={food.price}
                description={food.description}
                image={food.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
