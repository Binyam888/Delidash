import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="Food-display mx-[10%] mt-[30px]">
      <h1 className="text-[24px] font-bold">Top dishes near you</h1>
      <div className="food-diplay-list mt-[30px] gap-[30px]  grid grid-cols-4 ">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index + 1}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
