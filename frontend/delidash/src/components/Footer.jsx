import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="foooter text-[#d9d9d9] bg-[#323232] flex flex-col gap-[20px] pt-[80px] px-[10%] mt-[100px]" id="footer">
      <div className="footer-content w-[100%] grid md:grid-cols-[2fr,1fr,1fr] gap-[80px]">
        <div className="footer-co-left " id="footer-contets">
          <img src={assets.logo} alt="" />
          <p className="max-sm:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            necessitatibus illo accusantium cumque veniam nesciunt aut
            repudiandae illum ullam culpa ratione dolorem alias amet magnam,
            doloribus quas? Aliquam, porro reiciendis?
          </p>
          <div className="footer-social-icons flex   ">
            <img src={assets.facebook_icon} alt=""   />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-co-center max-sm:mt-[-40px] " id="footer-contets">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-co-right max-sm:mt-[-40px] leading-tight" id="footer-contets">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-2323-233-2323</li>
            <li>contact@deldash.com</li>
          </ul>
        </div>
      </div>
      <hr  className="w-[100%] h-[2px] mt-[20px] bg-gray-400 border-none "/>
      <p className="footer-copyright max-sm:text-[12px]">
        Copyright 2024 Deldash.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
