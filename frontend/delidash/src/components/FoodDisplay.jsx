import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import SkeletonLoadingCard from "./SkeletonLoadingCard";
import CardContainer from "./CardContainer";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="Food-display mx-[10%] mt-[30px]">
      <h1 className="text-[24px] font-bold" id="category">{category}</h1>
      {food_list.length != 0 ? (
        <div className="food-diplay-list mt-[30px] gap-[20px]  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
          {food_list.map((item, index) => {
            if (category === "Top Dishes" || category === item.category) {
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
            }
          })}
        </div>
      ) : (
       <CardContainer/>
      )}
    </div>
  );
};

export default FoodDisplay;
