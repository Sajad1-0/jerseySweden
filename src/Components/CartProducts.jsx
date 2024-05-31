import React, {useContext} from 'react'
import { JerseyContext } from '../Context/JerseyContext'
import { CgRemove } from "react-icons/cg";
import { MdAddCircleOutline } from "react-icons/md";

const CartProducts = () => {
    // Import allKits, getCart removeFromCart from JerseyContext
    const {allKits, cartProducts, 
        removeFromCart, addToCart } = useContext(JerseyContext);

    // function for total price of different products
    const totalPrice = allKits.reduce((total, kit) => {
        const quantity = cartProducts[kit.id] || 0;
        return total + (quantity * kit.price);
    }, 0)


  return (
    <div className='md:mx-28 my-140'>
        {/* Main section for cart Products */}
        <div className='flex items-center gap-8 lg:gap-14 px-52 lg:px-28 text-xl font-semibold'>
            <p className='text-center'>Products</p>
        </div>
        <hr  className='h-1 bg-textColor border-none'/>
        {/* This shows if we have a product in cart page */}
        {allKits.map((e) => {
            if (cartProducts[e.id] > 0) {
     return (
        <div>
            {/* Cart product format */}
            <div className='flex items-center gap-8 lg:gap-14 px-5'>
                <img src={e.image} alt="" className='w-[150px] pt-4'/>
                <p className=''>{e.name}</p>
                <p>Price: {e.price}kr</p>
                {/* Button for product quantity */}
                <button className='text-center'>Quantity: {cartProducts[e.id]}</button>
                <p>Total Price: {e.price * cartProducts[e.id]}kr</p>
                <div className='flex items-center gap-8 pb-4'>
                <MdAddCircleOutline onClick={() => addToCart(e.id)} className='text-3xl cursor-pointer'/>
                <CgRemove onClick={()=> removeFromCart(e.id)}className='text-2xl cursor-pointer'/> 
                
                </div>
            </div>
            <hr className='border-b border-textColor'/>  
        </div>
                )
            }
        })}
        {/* Display the total price at the bottom */}
        <div className='flex justify-center md:justify-end p-4 '>
          <h2 className='text-md font-semibold '>Total Price: {totalPrice.toFixed(2)}kr</h2>
        </div>
    </div>
  )
}

export default CartProducts