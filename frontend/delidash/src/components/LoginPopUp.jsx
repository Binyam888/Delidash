import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopUp = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-container absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid animate-fadeDem  ">
      <form
        action=""
        className="form-container place-self-center max-w-[330px] text-[#808080 flex flex-col bg-white gap-[25px] px-[30px] py-[20px]  rounded-md text-[14px] shadow-md"
      >
        <div className="heading flex justify-between align-middle items-center text-black ">
          <h1 className="text-[22px]">{currentState}</h1>
          <img
            onClick={() => setLogin((prev) => !prev)}
            src={assets.cross_icon}
            alt="delete"
            className="w-[16px] cursor-pointer"
          />
        </div>
        <div className="inputs py-[10px] text-[14px] gap-[20px] flex flex-col">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Name"
              className="ring-1   p-[10px] focus:outline-none ring-[#c9c9c9] rounded-[4px] w-full"
            />
          )}

          <input
            type="email"
            placeholder="Your e-mail"
            className="ring-1  p-[10px]  focus:outline-none ring-[#c9c9c9] rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="ring-1  p-[10px]  focus:outline-none ring-[#c9c9c9] rounded-md w-full"
          />
        </div>
        <div className="loginbutton">
          <button className="p-[10px] rounded-[4px] text-white bg-[#ea5c1feb] text-[15px] w-full">
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="terms-condition flex px-[5px] items-start mt-[-15px] gap-[8px] text-[13px]">
          <input type="checkbox" className="mt-[5px]" required/>
          <p className="text-[#949292] ">
            By continuing,i agree to the terms of use & Privacy policy
          </p>
        </div>
        <div className="create-login-text text-[#949292] ">
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer font-bold text-[#ea5c1fc9]  "
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Alredy have an account ?{" "}
              <span onClick={() => setCurrentState("Login")} className="text-[#ea5c1fc9] cursor-pointer font-bold">Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
