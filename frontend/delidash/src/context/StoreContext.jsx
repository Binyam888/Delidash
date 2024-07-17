import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider =({children})=>{
  

    const contextValue ={

    }

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;