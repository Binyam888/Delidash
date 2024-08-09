import React from "react";

const Header = () => {
  return (
    <div className="outer sm:mx-[10%] mx-[3%] ">
      <div
        className="Header md:h-[38vw] h-[48vw]  bg my-[30px]  w-full bg-[url('header_img.png')]     rounded-md  "
        id="header"
      >
        <div className="dem bg-[#0000007b] w-full h-[48vw] md:h-[38vw] rounded-md"></div>
        <div className="header-content absolute flex flex-col gap-2 md:max-w-[50%] max-sm:max-w-[60%]   bottom-[30%] max-md:bottom-[30%]   left-[12vw] animate-fadeIn ">
          <h2 className="lg:text-[30px] text-[16px]  md:text-[24px] xl:text-[50px]  leading-tight ">
            Order your <br /> favourite food here
          </h2>
          <p className="text-white  md:text-[12px] lg:text-[12px] text-[10px] sm:text-[10px] max-md:hidden">
            Choose from a diverse menu featuring a delectable array of dishes
            carfted with the finest ingrediants and culinary
          </p>
          <button className="border-none max-sm:w-[8git 0px] max-sm:py-[7px] text-white px-[10px] py-[10px] font-bold bg-[#0000007b] xl:text-[13px] rounded-[50px] max-w-[100px] lg:w-[100px]
           shadow-md ring-2 ring-[#ea5c1fc9]   text-[10px]
           ">
            <a href="#category">View Menu</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
