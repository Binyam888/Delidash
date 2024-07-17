import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { assets } from "../assets/assets";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  console.log(mobile);
  return (
    <header className="Navbar md:px-[30px] bg-slate-50 w-full h-[50px] flex shadow-md ">
      <nav className="flex md:justify-evenly w-full items-center justify-around">
        <img src={assets.logo} alt="" className="w-[90px]" />
        <ul className="flex gap-3 max-md:hidden cursor-pointer  hover:underline-offset-8  ">
          <li className="hover:underline ">Home</li>
          <li className="hover:underline">Menu</li>
          <li className="hover:underline">Mobile-app</li>
          <li className="hover:underline">Contact us</li>
        </ul>

        {/* Above md screeen */}
        <div className="logos flex gap-[20px] cursor-pointer ">
          <img src={assets.search_icon} alt="" className="w-[20px] h-[20px]" />
          <img src={assets.basket_icon} alt="" className="w-[20px] h-[20px]" />
          <img src={assets.profile_icon} alt="" className="w-[20px] h-[20px]" />
        </div>

        {/* mobile-screen */}
        <div>
          <button
            onClick={() => setMobile((prev) => !prev)}
            className="fixed z-10 right-5 top-3 md:hidden "
          >
            <IoMenuSharp size={30} />
          </button>
        </div>

        {mobile && (
          <div className=" bg-slate-500  fixed right-0 top-0  flex justify-center items-center w-full pt-[50px] pb-[20px] md:hidden">
            <ul className="flex gap-4 flex-col  justify-center text-center ">
              <li>Home</li>
              <li>Menu</li>
              <li>mobile-app</li>
              <li>contact us</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;