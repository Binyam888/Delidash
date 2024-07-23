import { createContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);
  const [username, setUsername] = useState("");

  const url = "http://localhost:3000";

  const fechData = async () => {
    let getUrl = url;
    const response = await axios.get(getUrl + "/api/food/list");
    setFood_list(response.data.data);
    console.log(response);
  };
  // feching the cart details for current user
  const getCartData = async (token) => {
    try {
      let newwUrl = url;
      const response = await axios.get(newwUrl + "/api/cart/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("getCartData", response);
      setCartItem(response.data.cart);
    } catch (error) {
      console.log("getCartError", error);
    }
  };


  useEffect(() => {
    fechData();

    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getCartData(localStorage.getItem("token"));
    }
  }, []);

  //add to cart function
  const addTocart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        console.log(token);
        const response = await axios.post(
          url + "/api/cart/add",
          { itemId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("token", response);
      } catch (error) {
        console.log("erooooor", error);
      }
    }
  };

  // remove from cart function
  const removeFromCart = async(itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    await axios.post(url+"/api/cart/remove",{itemId},{headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }})
  };

  // to get the total amout in the cart
  const getCartTotal = () => {
    let cartTotal = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((data) => data._id === item);
        cartTotal = cartTotal + itemInfo.price * cartItem[item];
      }
    }
    return Number(cartTotal.toFixed(2));
  };

  // storing to the context value
  const contextValue = {
    food_list,
    addTocart,
    removeFromCart,
    setCartItem,
    cartItem,
    getCartTotal,
    url,
    token,
    setToken,
    getCartData
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
