import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import { ToastContainer } from "react-toastify";
import food from "./food.json";
import Spinner from "./components/Spinner";

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      console.log(loading);
      console.log("changed");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  console.log("outside", loading);

  return (
    <>
      {login ? <LoginPopUp setLogin={setLogin} /> : <></>}
      {loading ? (
        <div className="    w-[100%] h-[100vh] grid ">
          {" "}
          <div className="place-self-center  max-w-[330px] ">
            {" "}
            <Lottie animationData={food} />
          </div>{" "}
        </div>
      ) : (
        <div>
          <ToastContainer />
          <Navbar setLogin={setLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
