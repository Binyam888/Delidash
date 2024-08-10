import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import payment from "../payment.json";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { url } = useContext(StoreContext);
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  console.log(success, orderId);
  console.log("urllllll", url);
  const verifyOrder = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      console.log("payment response", response);
      if (response.data.success) {
        return navigate("/myorders");
      }
    } catch (error) {
      console.log(error);

      navigate("/");
      toast.error(error.message);
    }
  };
  useEffect(() => {
    verifyOrder();
  }, []);
  return (
    <div className="    w-[100%]  grid ">
      <div className="place-self-center  max-w-[330px] ">
        <Lottie animationData={payment} />
      </div>
      <h1 className="font-bold place-self-center text-[25px] md:text-[40px]">
        Payment on process
      </h1>
    </div>
  );
};

export default Verify;
