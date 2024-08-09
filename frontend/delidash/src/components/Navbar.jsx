import React, { useEffect, useState } from "react";
import delidash from "../../public/delidash.png"
import { IoLogOutOutline } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
function Navbar({ setLogin }) {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);
  const { token,setToken,getCartTotal,setCartItem } = useContext(StoreContext);

  const navigate = useNavigate()

  const handleClick = () => {
    setMobile(true);
    setLogin(true);
    setIsOpen(false)
    navigate("/")
  };

  const openPopUp = () => {
    setIsOpen((prev) => !prev);
  };

  const logout =()=>{
    localStorage.removeItem("token")
    setToken("")
    setCartItem({})
    navigate("/")
    toast.warning("User Logged out")
  }
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
    <header className="Navbar md:px-[30px] bg-slate-50 w-full h-[50px] flex  py-[40px] ">
      <nav className="flex md:justify-evenly w-full items-center justify-around">
        <Link to={"/"}>
          {" "}
          <img src={delidash} alt="" className="w-[100px]" />
        </Link>
        <ul className="flex gap-3 max-md:hidden cursor-pointer  hover:underline-offset-8 font-semibold  ">
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
          <div className="cart relative">
          <Link to={"/cart"}>
            {" "}
            <img
              src={assets.basket_icon}
              alt=""
              className="w-[20px] h-[20px]"

              
            />
            {/* if any item availble in cart it will show a dot on the cart icon */}
            { getCartTotal() > 0 && <div className="dot w-[8px] h-[8px] bg-[#ea811ff5] rounded-full absolute z-10 top-[-5px] right-[-5px]"></div> }
           
          </Link>
          </div>
         

          {/* Login codition */}
          {token ? (
            <div className="relative  ">
              <img
                onClick={openPopUp}
                src={assets.profile_icon}
                alt=""
                className="w-[20px] h-[20px]"
              />
              {isOpen && (
                <ul className=" flex flex-col absolute bg-[#ea811fe4] right-0   gap-[20px] z-10 w-[150px] py-[10px] text-[12px] px-[10px] mt-[10px] rounded-md shadow-md ">
                  <li className="Order">
                    <div className="flex items-center gap-1 justify-center" >
                    <Link to={"/"} className="flex items-center  gap-1">  <IoBagHandleSharp size={25} color="white" />
                      <p className="hover:text-[#ea521ff5] mt-2">Order</p>
                      </Link>
                    </div>
                  </li>
                  <hr className="" />
                  <li className="Logout">
                    <div className="flex items-center gap-1 justify-center " onClick={logout}>
                      <IoLogOutOutline size={25} color="white"  />
                      <p className="hover:text-[#ea521ff5]">Logout</p>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button
              onClick={handleClick}
              className=" px-[15px] rounded-[50px] py-[5px] ring-2 ring-[#ea5c1fc9] hover:bg-slate-100"
            >
              {" "}
              sign-in
            </button>
          )}
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
