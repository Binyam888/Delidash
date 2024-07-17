import React from "react";

const Header = () => {
  return (
    <div className="outer sm:mx-[10%]">
      
    
    <div
      className="Header sm:h-[34vw] h-[300px]  bg my-[30px]  w-full bg-[url('public/header_img.png')] sm:bg-contain bg-cover bg-no-repeat relative rounded-md "
      id="header"
    >
      <div className="header-content absolute flex flex-col gap-2 md:max-w-[50%] max-sm:max-w-[50%]  md:bottom-[30%] bottom-[10%] max-md:bottom-[20%]  left-[12vw] animate-fadeIn ">
        <h2 className="lg:text-[30px] text-[18px]  md:text-[24px] xl:text-[50px]  leading-tight">
          Order your <br /> favourite food here
        </h2>
        <p className="text-white  md:text-[12px] lg:text-[12px] text-[10px] sm:text-[10px]">
          Choose from a diverse menu featuring a delectable array of dishes
          carfted with the finest ingrediants and culinary
        </p>
        <button className="border-none  text-[#747474] px-[10px] py-[10px] font-medium bg-white xl:text-[13px] rounded-[50px] max-w-[100px] lg:w-[100px]  w-[75px] text-[10px]">
          View Menu
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
