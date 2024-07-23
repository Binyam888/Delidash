import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setLogin }) => {
  const { url, setToken, getCartData } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    try {
      if (currentState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }
      try {
        const response = await axios.post(newUrl, userData);
        if (response.data.token) {
          console.log("response", response);
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          getCartData(localStorage.getItem("token"));
          setLogin(false);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        const messsage = error.response.data.message;
        alert(messsage);
      }
      setCurrentState("Login");
    } catch (error) {
      console.log("errror", error);
    }
  };
  return (
    <div className="login-container absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid animate-fadeDem  ">
      <form
        onSubmit={handleSubmit}
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
              name="name"
              required
              value={userData.name}
              onChange={onChangeHandler}
              className="ring-1   p-[10px] focus:outline-none ring-[#c9c9c9] rounded-[4px] w-full"
            />
          )}

          <input
            type="email"
            placeholder="Your e-mail"
            name="email"
            value={userData.email}
            onChange={onChangeHandler}
            required
            className="ring-1  p-[10px]  focus:outline-none ring-[#c9c9c9] rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={onChangeHandler}
            required
            className="ring-1  p-[10px]  focus:outline-none ring-[#c9c9c9] rounded-md w-full"
          />
        </div>
        <div className="loginbutton">
          <button
            className="p-[10px] rounded-[4px] text-white bg-[#ea5c1feb] text-[15px] w-full"
            type="submit"
          >
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="terms-condition flex px-[5px] items-start mt-[-15px] gap-[8px] text-[13px]">
          <input type="checkbox" className="mt-[5px]" required />
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
              <span
                onClick={() => setCurrentState("Login")}
                className="text-[#ea5c1fc9] cursor-pointer font-bold"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
