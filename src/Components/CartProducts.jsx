import React, {useContext} from 'react'
import { JerseyContext } from '../Context/JerseyContext'
import { CgRemove } from "react-icons/cg";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const CartProducts = () => {
    // Import allKits, getCart removeFromCart from JerseyContext
    const {allKits, cartProducts, 
        removeFromCart, addToCart } = useContext(JerseyContext);

    // function for total price of different products
    const totalPrice = allKits.reduce((total, kit) => {
        const quantity = cartProducts[kit.id] || 0;
        return total + (quantity * kit.price);
    }, 0)

    //Filter all kits to get only products that are in the cart
    const cartItems = allKits.filter(kit => cartProducts[kit.id] > 0);


  return (
    <div className='md:mx-28 my-140'>
        {/* Main section for cart Products */}
        <div className='flex items-center gap-8 lg:gap-14 px-52 lg:px-28 text-xl font-semibold'>
            <p className='text-center'>Products</p>
        </div>
        <hr  className='h-1 bg-textColor border-none'/>
        {/* This shows if we have a product in cart page */}
        {cartItems.map((e) => {
            if (cartProducts[e.id] > 0) {
                return <div>
                    
                {/* Cart product format */}
                <div className='flex flex-col md:flex-row duration-200
                     items-center justify-between gap-8 lg:gap-14 px-5'>
                    <Link to={`/kits/2/product/${e.id}`} >
                    <img src={e.image} alt="" className='w-[150px] pt-4'/>
                    </Link>
                    <p className='font-medium'>{e.name}</p>
                     <p className='font-medium'>Price: {e.price}kr</p>
                     {/* Button for product quantity */}
                    <button className='text-center w-8 h-8 border-2 border-stone-500 bg-primary
                    font-medium'
                    >{cartProducts[e.id]}</button>
                    <p className='font-medium'>Total Price: {e.price * cartProducts[e.id]}kr</p>
                    <div className='flex items-center gap-8 pb-4'>
                    <MdAddCircleOutline onClick={() => addToCart(e.id)} className='text-3xl cursor-pointer'/>
                    <CgRemove onClick={()=> removeFromCart(e.id)}className='text-2xl cursor-pointer'/> 
                
                    </div>
                 </div>
                    <hr className='border-b border-textColor'/>  
                </div>
               
            }
            return null;
         })}

            {/* Summary section */}
            <div className='md:mx-28 my-140'>
                <div className='flex items-center gap-8 lg:gap-14 px-52 lg:px-0 text-xl font-semibold
                mt-8'>
                    <h1>Summary</h1>
                </div>
                {/* Display the total price at the bottom */}
                <div className='flex justify-between  p-4 '>
                    <h2 className='text-md font-semibold mt-1 '>Total Price:</h2>
                    <p className='text-md font-semibold mt-1'>{totalPrice.toFixed(2)}kr</p>
                </div>
                <hr className='border border-stone-500 mb-4'/>
                {/* Shipping section */}
                <div className='flex justify-between p-4'>
                    <h2 className='text-md font-semibold'>Shipping fee</h2>
                    <p className='text-md font-semibold'>Free</p>
                </div>
                <hr className='border border-stone-500 mb-12'/>
                {/* Button to go to payment section */}
                <div>
                    <button className='w-[170px] my-4 bg-hoverColor rounded-2xl py-4 px-8
                    font-semibold hover:shadow-md hover:shadow-textColor active:text-primary'>TO CHECKOUT</button>
                </div>
            </div>
    </div>
  )
}

export default CartProducts