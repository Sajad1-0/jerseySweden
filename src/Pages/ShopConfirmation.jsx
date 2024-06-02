import React from 'react'
import { useLocation } from 'react-router-dom'

const ShopConfirmation = () => {

    const location = useLocation();

    const {cartItems, totalPrice, name, streetAndHouseNumber, postalCode, city, country} = location.state || {cartItems: [], totalPrice: 0,
         name: '', adress: ''};

  return (
    <div className='flex flex-col justify-center gap-8'>
        <div className='mt-8 w-[600]'>
            {/* Payment confirmation */}
            <div>
                <h1 className='text-xl font-bold text-center mb-4'>PAYMENT CONFIRMATION</h1>
            </div>
            <hr className='border border-stone-500'/>
            {/* Customer's Name */}
            <div className='mt-8'>
                <h2 className='font-semibold text-lg text-center'>Thank You {name}!</h2>
                <p className='font-medium text-md text-center mt-1'>Your payment has been confirmed. Here are the details of your purchase:</p>
            </div>
            {/* Products */}
            <div className='mb-4 mx-4'>
                <h3 className='text-lg font-medium mb-2'>Products:</h3>
                {cartItems.length > 0 ? (
                    <div className='flex flex-col gap-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex justify-between mb-2'>
                            <div className='flex items-center gap-2'>
                            <img src={item.image} alt={item.name} className='w-10 h-10' />
                            <p>{item.name}</p>
                        </div>
                        <p>{item.price}kr x {item.quantity} = {item.price * item.quantity}kr</p>
                    </div>
                    ))}
                </div>
                ) : (
                <p>No items in the cart.</p>
                )}
            </div>
            
                {/* Shipping section and total price */}
             <div className='flex justify-between gap-4 mx-4 my-4'>
                <h1>Total Price:</h1>
                <p>{totalPrice}kr</p>
            </div>
            <div className='flex justify-between gap-4 mx-4'>
                <h1>Shipping Adress:</h1>
                <div className='flex flex-col'>
                <p>{country}</p>
                <p>{city}</p>
                <p>{postalCode}</p>
                <p>{streetAndHouseNumber}</p>
                </div>
            </div>
                <p className='text-center mt-2'>Your order will be shipped to the adress provided.</p>
        </div>
    </div>
  )
}

export default ShopConfirmation;