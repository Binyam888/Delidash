import React, { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const { getCartTotal, food_list, cartItem ,url,token } = useContext(StoreContext);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    streetName: "",
    phoneNumber: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    // console.log("userdata", userData);
    let orderItems = []; // creating an array to store all the food data that user has ordered
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item; // itrating each individual item , store the copy to itemInfo
        itemInfo["quantity"] = cartItem[item._id];
        // console.log("iteminfo",itemInfo)
        orderItems.push(itemInfo);
      }
    });

    let orderData = {   // storing all the data into a object to send to the server
      items: orderItems,
      address: userData,
      amount: getCartTotal(),
    };
    let newUrl = url                                     // "http://localhost:3000"
    const response = await axios.post(newUrl+"/api/order/place",orderData,{
      headers:{
        Authorization:`Bearer ${token} `
      }
    })
    console.log("response for order",response)
    if(response.data.success){
      const {success_url} = response.data
      console.log(success_url)
      window.location.replace(success_url)
    }else{
      toast.error("unexpected error occured")
    }
   
    // console.log("response for order" ,response)
  };

  return (
    <form
      onSubmit={handleSubmitOrder}
      action=""
      className="place-order m-[5%]  grid md:grid-cols-2  justify-center px-[20px]   gap-[80px] mt-[100px]"
    >
      <div className="place-order-left max-sm:w-[250px] max-sm:text-[14px]">
        <p className="title text-[30px] max-sm:text-[20px] font-bold mb-[20px]">
          Delivery Informaton
        </p>
        <div className="multi-feild flex gap-[10px]">
          <input
            onChange={onChangeHandler}
            type="text"
            name="firstName"
            value={userData.firstName}
            placeholder="First name"
            required
          />
          <input
            onChange={onChangeHandler}
            type="text"
            name="lastName"
            value={userData.lastName}
            placeholder="Last name"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          type="email"
          name="email"
          value={userData.email}
          placeholder="Email address"
          required
        />
        <input
          onChange={onChangeHandler}
          type="text"
          name="address"
          value={userData.address}
          placeholder="Address"
          required
        />

        <div className="multi-feild flex gap-[10px]">
          <input
            onChange={onChangeHandler}
            type="text"
            name="streetName"
            value={userData.streetName}
            placeholder="Sreet name"
            required
          />
          <input
            onChange={onChangeHandler}
            type="number"
            name="phoneNumber"
            value={userData.phoneNumber}
            placeholder="Phone"
            required
          />
        </div>
      </div>

      <div className="place-order-right ">
        <div className="cart-total flex flex-1 flex-col gap-[20px] ">
          <h1 className="font-semibold">Cart Totals</h1>
          <div className="cart-details-container ">
            <div className="cart-total-details ">
              <p>Subtotal</p>
              <p>{getCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details ">
              <p>Delivery Fee</p>
              <p>{"Free"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getCartTotal()}</b>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#ea5c1fc9] text-white  w-[max(15vw,200px)] py-[12px] px-[10px]  rounded-[4px]  text-[13px] mt-[30px] font-bold shadow-sm"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
