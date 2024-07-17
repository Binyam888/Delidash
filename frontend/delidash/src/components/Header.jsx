import React from "react";

const Header = () => {
  return (
    <div
      className="Header h-[34vw] mx-[10%] my-[30px] w-full bg-[url('public/header_img.png')] bg-contain bg-no-repeat "
      id="header"
    >
      <div className="header-content absolute flex flex-col gap-2 max-w-[33%] md:bottom-[30%] bottom-[10%]  left-[12vw] animate-fadeIn ">
        <h2 className="md:text-[60px] text-[4.5vw] leading-tight">
          Order your <br /> favourite food here
        </h2>
        <p className="text-white  md:text-[16px]">
          Choose from a diverse menu featuring a delectable array of dishes
          carfted with the finest ingrediants and culinary
        </p>
        <button className="border-none  text-[#747474] px-[10px] py-[10px] font-medium bg-white text-[13px] rounded-[50px] max-w-[100px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
