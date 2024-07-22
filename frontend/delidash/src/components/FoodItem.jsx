import React from "react";
import { assets } from "../assets/assets";

import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addTocart, removeFromCart, setCartItem } =
    useContext(StoreContext);
    
  return (
    <div className="food-item-container animate-fadeDem">
      <div className="food-iem w-[100%] m-auto shadow-md shadow-[#00000015]  rounded-[10px]">
        <dvi className="food-item-img-container relative ">
          <img src={image} alt="" className="w-[100%] rounded-t-[10px] " />
          {!cartItem[id] ? (
            <img
              src={assets.add_icon_white}
              alt=""
              className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%] "
              onClick={() => addTocart(id)}
            />
          ) : (
            <div className="food-item-counter absolute bottom-[15px] right-[15px] gap-[10px] flex p-[6px] rounded-[50px] bg-white items-center">
              <img
                onClick={() => removeFromCart(id) }
                src={assets.remove_icon_red}
                alt=""
                className="w-[30px]"
              />
              <p>{cartItem[id]}</p>
              <img
                // onClick={() => setItemCount((prev) => prev + 1)}
                onClick={() => addTocart(id)}
                src={assets.add_icon_green}
                alt=""
                className="w-[30px]"
              />
            </div>
          )}
        </dvi>
        <div className="food-item-info p-[20px]">
          <div className="food-item-name-rating flex lg:flex-col lg:items-start xl:flex-row justify-between xl:items-center items-center mb-[10px]">
            <p className="  md:text-[20px] font-medium">{name}</p>
            <img src={assets.rating_starts} alt="" className="md:w-[70px] w-[65px] " />
          </div>
          <p className="fooditem-description text-[#676767] text-[12px]  md:text-[12px] ">
            {description}
          </p>
          <p className="food-item-price text-red-400 md:text-[22px] text-[14px] font-medium my-[10px]">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
