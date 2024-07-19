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

  const removeFromCart =(itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
   useEffect(()=>{
     console.log(cartItem);
   },[cartItem])
  const contextValue = {
    food_list,
    addTocart,
    removeFromCart,
    setCartItem,
    cartItem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
