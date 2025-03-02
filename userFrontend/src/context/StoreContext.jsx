import { createContext, useState } from "react";
import { food_list } from '../assets/assets'


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({})
    

    const addToCart=(itemId) => {
        if(!cartItems[itemId]){
            setCartItems({...cartItems, [itemId]:1})
        }
        else{
            setCartItems({...cartItems, [itemId]:cartItems[itemId]+1})
        }
    }
    
    const removeFromCart=(itemId) => {
        if(cartItems[itemId]>0){
            setCartItems({...cartItems, [itemId]:cartItems[itemId]-1})
        }
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;