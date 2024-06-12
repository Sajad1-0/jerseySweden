import React, { useState, useContext } from 'react'
import {useLocation} from 'react-router-dom'
import Swish from '../Assets/Swish Logo Primary PNG.png'
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { JerseyContext } from '../Context/JerseyContext';



const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { clearCart } = useContext(JerseyContext);
    const { cartItems = [], totalPrice = 0 } = location.state || {};
    
    
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [streetAndHouseNumber, setStreetAndHouseNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');


    
     // handle click for removing items from the cart 
     const handlePay = async () => {
        await clearCart()
    }
    // Submit function for form 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await handlePay();

        navigate('/confirmation', {
            state: {
                cartItems,
                totalPrice,
                name,
                address,
                country,
                city,
                postalCode,
                streetAndHouseNumber,

            }
        });

    };

    

  return (
    <div className='flex flex-col md:flex-row justify-between gap-8' >
        {/* Left section of the main content */}
        <div className='flex flex-col gap-8 md:w-1/2'>
        {/* Choose how to pay */}
            <div className='my-4 mx-8'>
                <h1 className='text-center md:text-start text-3xl font-bold mb-4'>CHEKOUT</h1>
                <hr className='border-1 border-stone-500'/>
                <h2 className='mt-8 text-center md:text-start text-xl font-semibold'>PAYMENT'S METOD</h2>
            </div>
            <div className='flex justify-between gap-8 mx-8'>
                <p className='text-lg font-semibold'>
                    < input type="checkbox" className='mr-4'/>Swish
                </p>
                <img className='w-6' src={Swish} alt="" />
            </div>
            <hr className='border-1 border-stone-500 mx-8'/>
            <div className='flex justify-between gap-8 mx-8'>
                    <p className='text-lg font-semibold'>
                        <input type="checkbox" className='mr-4'/>Bank
                    </p>
                <div className='flex gap-4'>
                    <FaCcVisa className='text-2xl'/>
                    <FaCcMastercard className='text-2xl'/>
                    <SiAmericanexpress className='text-xl' />
                </div>
            </div>
            <hr className='border-1 border-stone-500 mx-8'/>
            <div className='flex justify-between gap-8 mx-8'>
                <p className='texet-lg font-semibold'>
                    <input type="checkbox" className='mr-4'/>PayPal
                </p>
                <FaCcPaypal className='text-2xl'/>
            </div>
            <hr className='border-1 border-stone-500 mx-8'/>
            <div className='flex justify-between gap-8 mx-8'>
                <p className='text-lg font-semibold'>
                    <input type="checkbox" className='mr-4'/>Bill
                </p>
                <RiBillFill className='text-2xl'/>
            </div>
        
        <hr className='border-1 border-stone-500 mx-8'/>
        {/* Adress fält */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-10 mx-8'>
            <label for='name' className='text-lg font-semibold'> Full Name:
                <input type="text" id='name' value={name} onChange={(e)=>
                setName(e.target.value)} required
                className='lg:ml-4 p-2 w-[300px] border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                focus:shadow-md'/>
            </label>
            <label for='email' className='text-lg font-semibold'> Email:
                <input type="email" id='email' value={email} onChange={(e)=>
                setEmail(e.target.value)} required
                className='p-2 w-[300px] lg:ml-12 border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                focus:shadow-md'/>
            </label>
            <label for='adress' className='font-semibold'> 
                <p className='ml-4 my-10 text-2xl' value={address} onChange={(e) => setAddress(e.target.value)}>Adress</p>
                <div className='flex flex-col gap-8'>
                <input type="text" id='country' placeholder='COUNTRY' value={country} onChange={(e) => setCountry(e.target.value)} readquired
                 className='ml-4 p-2 w-[300px] lg:w-1/2 border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                 focus:shadow-md'/>
                <input type="text" id='city' placeholder='CITY ' value={city} onChange={(e) => setCity(e.target.value)} required
                 className='ml-4 p-2 w-[300px] lg:w-1/2  border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                 focus:shadow-md'/>
                <input type="text" id='postalCode' placeholder='POSTAL CODE' value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                 required className='ml-4 p-2 w-[300px] lg:w-1/2 border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                 focus:shadow-md'/>
                <input type="text" id='streetAndHouseNumber' placeholder='STREET AND HOUSE NUMBER ' value={streetAndHouseNumber} 
                onChange={(e) => setStreetAndHouseNumber(e.target.value)} required
                 className='ml-4 p-2 w-[300px] lg:w-1/2  border border-stone-500 rounded-lg outline-none focus:shadow-hoverColor
                 focus:shadow-md'/>
                </div>
            </label>
            <div className='flex'>
            <button type='submit'
            className='w-[200px] mb-10 mx-4 bg-hoverColor rounded-2xl py-2
            font-semibold hover:shadow-md hover:shadow-textColor active:text-primary'>
                PAY</button>
            </div>
        </form>
        </div>

        {/* Right section*/}
        <div className='p-4 rounded-md flex flex-col md:w-1/2'>
                <h2 className='text-xl font-semibold my-20'>Order Summary</h2>
                {cartItems.length > 0 ? (
                    <div className='flex flex-col gap-8 justify-between'>
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