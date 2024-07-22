import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function PlaceOrder() {
  const {getCartTotal} = useContext(StoreContext)
  return (
    <form action="" className="place-order m-[5%]  grid md:grid-cols-2  justify-center px-[20px]   gap-[80px] mt-[100px]">
      <div className="place-order-left max-sm:w-[250px] max-sm:text-[14px]">
        <p className="title text-[30px] max-sm:text-[20px] font-bold mb-[20px]">Delivery Informaton</p>
        <div className="multi-feild flex gap-[10px]">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Address" />
        
        <div className="multi-feild flex gap-[10px]">
          <input type="text" placeholder="Sreet name" />
          <input type="number" placeholder="Phone" />
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
