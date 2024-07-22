import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
function Navbar({ setLogin }) {
  const [mobile, setMobile] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleClick = () => {
    setMobile(true);
    setLogin(true);
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 80) {
  //       console.log("scroll activated");
  //       return setMobile(false);
  //     }
  //   };
  //   if (mobile) {
  //     setTimeout(() => {
  //       setTransition(true);
  //     }, 100);
  //   } else {
  //     setTransition(false);
  //   }

  //   window.addEventListener("scroll", handleScroll);
  // },[]);

  return (
    <header className="Navbar md:px-[30px] bg-slate-50 w-full h-[50px] flex shadow-md py-[30px] ">
      <nav className="flex md:justify-evenly w-full items-center justify-around">
        <Link to={"/"}>
          {" "}
          <img src={assets.logo} alt="" className="w-[90px]" />
        </Link>
        <ul className="flex gap-3 max-md:hidden cursor-pointer  hover:underline-offset-8  ">
          <Link to={"/"} className="hover:underline ">
            Home
          </Link>
          <a href="#explore-menu" className="hover:underline">
            Menu
          </a>
          <a href="#mobile-app" className="hover:underline">
            Mobile-app
          </a>
          <a href="#footer" className="hover:underline">
            Contact us
          </a>
        </ul>

        {/* Above md screeen */}
        <div className="logos flex gap-[20px] cursor-pointer items-center ">
          <img src={assets.search_icon} alt="" className="w-[20px] h-[20px]" />
          <Link to={"/cart"}>
            {" "}
            <img
              src={assets.basket_icon}
              alt=""
              className="w-[20px] h-[20px]"
            />
          </Link>
          <img src={assets.profile_icon} alt="" className="w-[20px] h-[20px]" />
          <button
            onClick={handleClick}
            className=" px-[15px] rounded-[50px] py-[5px] ring-2 ring-[#ea5c1fc9] hover:bg-slate-100"
          >
            {" "}
            sign-in
          </button>
        </div>

        {/* mobile-screen */}
        {/* <div>
          <button
            onClick={() => setMobile((prev) => !prev)}
            className="fixed z-30 right-5 top-3 md:hidden "
          >
            {mobile ? (
              <IoMenuSharp size={30} className=" " />
            ) : (
              <IoMenuSharp size={30} />
            )}
          </button>
        </div>

        {mobile && (
          <div
            className={` bg-white text-gray-500 animate-fadeDem fixed rounded-lg shadow-md shadow-neutral-600  ring-2 ring-inset ring-gray-200 top-0  ${
              transition ? `right-0` : `right-[-200px]`
            } transition-all duration-300 z-10 w-[300px] flex justify-center items-center   pt-[50px] pb-[20px] md:hidden overflow-hidden`}
          >
            <ul
              className={`flex gap-4 flex-col  justify-center text-center   mb-[30px] `}
            >
              <li className="">Home</li>
              <li>Menu</li>
              <li>Mobile-app</li>
              <li>Contact us</li>
            </ul>
          </div>
        )} */}
      </nav>
    </header>
  );
}

export default Navbar;
