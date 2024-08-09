import React from "react";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className="explore menu flex flex-col gap-[20px] mx-[10%] mb-[20px] mt-[50px]"
      
    >
      <h1 className=" text-[#262626] font-bold lg:text-[28px] text-[24px] mt-[-20px]"id="explore-menu">Explore our menu</h1>
      <p className="sm:max-w-[60%] text-[#808080] max-sm:mt-[-18px max-sm:text-[14px]">
        Choose from a diverse menu featuring a delectable dishes. our mission is
        to Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
      </p>
      <div
        className="explore-menu-list flex justify-between align-middle items-center gap-[30px] text-center my-[20px]  overflow-x-scroll hide-scrollbar"
        id="explore-menu-list"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              className=""
              key={index + 1}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "Top Dishes" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt="images"
                className={
                  category === item.menu_name
                    ? "border-[4px] border-red-400 rounded-[50%] min-w-[80px] w-[7.5vw]  p-[2px] transition-all  ease-in "
                    : "w-[7.5vw]  min-w-[80px] cursor-pointer rounded-[50%] transition-all duration-300 hover:scale-105"
                }
              />
              <p className="mt-[10px] text-[#747474] text-[16px] cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="m-y[10px] h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
