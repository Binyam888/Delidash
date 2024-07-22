import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});
  const addTocart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getCartTotal = () => {
    let cartTotal = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((data) => data._id === item);
        cartTotal = cartTotal + (itemInfo.price * cartItem[item]);
      }
    }
    return Number(cartTotal.toFixed(2));
  };

 
  const contextValue = {
    food_list,
    addTocart,
    removeFromCart,
    setCartItem,
    cartItem,
    getCartTotal,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
