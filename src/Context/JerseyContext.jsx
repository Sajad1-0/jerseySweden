import React, {createContext, useState} from 'react'
import  {LaligaKits, PrimierLeagueKits, 
SeriaAKits,  otherLeaguesKits, InternationalKits} from '../Assets/Jersey-sweden/FootballKits'  


const allKits = [...LaligaKits, ...PrimierLeagueKits, ...SeriaAKits, ...otherLeaguesKits,
    ...InternationalKits]

// creating a context 
const JerseyContext = createContext(null);

// cart function for adding kits to cart
const getCart = () => {
    let cart = {};

    for (let index = 0; index < allKits.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

// Creating a function for context provider
const JerseyContextProvider = (props) => {

    const [cartProducts, setCartProducts] = useState(getCart());
    // function for adding kits to cart 
    const addToCart = (productId) => {
        setCartProducts((prev) => ({...prev, [productId]: prev[productId] + 1 }))
        console.log(cartProducts);
    }
    // function for removing kits from cart
    const removeFromCart = (productId) => {
        setCartProducts((prev) => ({...prev, [productId]: prev[productId] - 1 }))
    }

    // create a context value that holds all kits
    const contextValue = {allKits, cartProducts, addToCart, removeFromCart };

    

    return (
        <JerseyContext.Provider value={contextValue} >
            {props.children}
        </JerseyContext.Provider>
    )
}
// Export it to index.js
export {JerseyContextProvider, JerseyContext}