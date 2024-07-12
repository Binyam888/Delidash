import React from "react";
import {assets} from '../assets/assets'
function Navbar() {
  return <div className="navbar flex justify-between align-middle items-center px-[4%] py-[8px]">
    <img className="logo  max-w-[80px]" src={assets.logo} alt="" />
    <img  className="profile-image w-[40px]" src={assets.profile_image} alt="" />
  </div>;
}

export default Navbar;
