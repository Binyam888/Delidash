import React from "react";

const Header = () => {
  return (
    <div className="outer sm:mx-[10%] mx-[3%]">
      <div
        className="Header md:h-[38vw] h-[48vw]  bg my-[30px]  w-full bg-[url('header_img.png')] bg-contain  bg-no-repeat relative rounded-md "
        id="header"
      >
        <div className="header-content absolute flex flex-col gap-2 md:max-w-[50%] max-sm:max-w-[60%]   bottom-[30%] max-md:bottom-[40%]  left-[12vw] animate-fadeIn ">
          <h2 className="lg:text-[30px] text-[16px]  md:text-[24px] xl:text-[50px]  leading-tight">
            Order your <br /> favourite food here
          </h2>
          <p className="text-white  md:text-[12px] lg:text-[12px] text-[10px] sm:text-[10px] max-md:hidden">
            Choose from a diverse menu featuring a delectable array of dishes
            carfted with the finest ingrediants and culinary
          </p>
          <button className="border-none max-sm:w-[70px] max-sm:py-[7px] text-[#747474] px-[10px] py-[10px] font-medium bg-white xl:text-[13px] rounded-[50px] max-w-[100px] lg:w-[100px]   text-[10px]">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
