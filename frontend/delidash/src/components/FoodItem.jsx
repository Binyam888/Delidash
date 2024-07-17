import React from "react";
import { assets } from "../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item-container">
      <div className="food-iem w-[100%] m-auto shadow-sm shadow-[#00000015]">
        <dvi className="food-item-img-container">
          <img src={image} alt="" className="w-[100%] rounded-t-[15px] " />
        </dvi>
        <div className="food-item-info p-[20px]">
          <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
            <p className="text-[20px] font-medium">{name}</p>
            <img src={assets.rating_starts} alt="" className="w-[70px]" />
          </div>
          <p className="fooditem-description text-[#676767] text-[12px]">{description}</p>
          <p className="food-item-price text-red-400 text-[22px] font-medium my-[10px]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
