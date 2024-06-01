import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Swish from '../Assets/Swish Logo Primary PNG.png'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";

const Checkout = () => {
    const location = useLocation();
    // Import the summary of products data to the checkout section
    const {cartItems, totalPrice} = location.state || {cartItems: [], totalPrice: 0};
    
    //Form for address information to send products
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        {/* Left section of the main content */}
        <h1>CHEKOUT</h1>
        <div>
        {/* Choose how to pay */}
            <div>
                <h2>PAYMENT'S METOD</h2>
            </div>
            <hr />
            <div>
                <p><input type="checkbox"/>Swish</p>
                <img className='w-6' src={Swish} alt="" />
            </div>
            <hr />
            <div>
                <p><input type="checkbox"/>Bank</p>
                <div className='flex gap-2'>
                    <FaCcVisa />
                    <FaCcMastercard />
                    <SiAmericanexpress />
                </div>
            </div>
            <hr />
            <div>
                <p><input type="checkbox"/>PayPal</p>
                <FaCcPaypal />
            </div>
            <hr />
            <div>
                <p><input type="checkbox"/>Bill</p>
                <RiBillFill />
            </div>
        </div>
        <hr />
        {/* Adress fält */}
        <form onSubmit={handleSubmit}>
            <label for='name'> Full Name:
                <input type="text" id='name' value={name} onChange={(e)=>
                setName(e.target.value)} />
            </label>
            <label for='email'> Email:
                <input type="email" id='email' value={email} onChange={(e)=>
                setEmail(e.target.value)} />
            </label>
            <label for='adress'> Adress
                <div value={address} onChange={(e) => setAddress(e.target.value)}>
                <input type="text" id='adress' placeholder='COUNTRY'/>
                <input type="text" id='adress' placeholder='CITY '/>
                <input type="text" id='adress' placeholder='POST NUMBER'/>
                <input type="text" id='adress' placeholder='STREET AND HOUSE NUMBER '/>
                </div>
            </label>
            <button type='submit'>PAY</button>
        </form>

        {/* Right section*/}
        <div className='border p-4 rounded-md'>
                <h2 className='text-lg font-semibold mb-2'>Order Summary</h2>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className='flex justify-between mb-4'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.name} className='w-[50px]' />
                                    <p>{item.name}</p>
                                </div>
                                <p>{item.price}kr x {item.quantity} = {item.price * item.quantity}kr</p>
                            </div>
                        ))}
                        <div className='flex justify-between font-semibold'>
                            <p>Total Price:</p>
                            <p>{totalPrice.toFixed(2)}kr</p>
                        </div>
                    </div>
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>


    </div>
  )
}

export default Checkout