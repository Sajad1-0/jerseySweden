import React,{ createContext, useContext ,useEffect,useReducer } from 'react'
import { useLocalStorage } from '../Hook/useLocalStorage';

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
    const [cart, setCart] = useLocalStorage('cart', initialState);

    // sync local storage with state
    useEffect(() => {
        setCart(state);
    }, [state, setCart]);

    //Initial state from local storage
    useEffect(() => {
        dispatch({ type: 'LOAD_CART', payload: cart });
    }, []);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
        localStorage.removeItem('cart');
    }

    return (
        <CartContext.Provider value={{state, dispatch, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

