import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItem, food_list, removeFromCart, getCartTotal } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart m-[5%] ">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] text-[12px] text-gray-500">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="bg-[#e2e2e2] h-[1px] mb-[30px]" />
        {food_list.map((item, index) => {
          console.log("item before", item);
          if (cartItem[item._id] > 0) {
            console.log("item after", item);
            console.log("cariItem", cartItem[item._id]);
            return (
              <>
                <div className="cart-items-maped grid grid-cols-[1fr,1.5fr,1fr,1fr,1fr,0.5fr] text-[12px] my-[10px] items-center">
                  <img
                    src={item.image}
                    alt="item-img"
                    className="w-[50px] rounded-sm"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className=" bg-[#e2e2e2]  h-[1px] " />
              </>
            );
          }
        })}
        <div className="cart-bottom mt-[80px] flex justify-between md:gap-[100px] gap-[20px] max-md:flex-col-reverse ">
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
            <button className="bg-[#ea5c1fc9] text-white  w-[max(15vw,200px)] py-[12px] px-[10px]  rounded-[4px]  text-[13px] font-bold shadow-sm"
              onClick={()=>navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="cart-promocode flex-1 max-md:items-start">
            <div>
              <p className="text-[#555]">
                If you have a promo code , Enter it here
              </p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                <input
                  type="text"
                  placeholder="promocode"
                  className="bg-transparent border-none outline-none pl-[10px]"
                />
                <button className="w-[max(10vw,150px)] bg-black py-[12px] px-[5px] border-none text-white rounded-[4px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
