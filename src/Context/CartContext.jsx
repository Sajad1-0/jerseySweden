import React,{ createContext, useContext ,useReducer } from 'react'

// Create the context for cart 
const CartContext = createContext();

// Define the initial state
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
            };
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    };
}

// Create the provider
export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

