import React from 'react'
import { useLocation } from 'react-router-dom'

const ShopConfirmation = () => {

    const location = useLocation();

    const {cartItems, totalPrice, name, adress} = location.state || {cartItems: [], totalPrice: 0,
         name: '', adress: ''};

  return (
    <div>
        <div>
            {/* Payment confirmation */}
            <div>
                <h1>PAYMENT CONFIRMATION</h1>
            </div>
            {/* Customer's Name */}
            <div>
                <h2>Thank You {name}!</h2>
                <p>Your payment has been confirmed. Here are the details of your purchase:</p>
            </div>
            {/* Products */}
            <div className='mb-4'>
                <h3 className='text-lg font-semibold mb-2'>Products:</h3>
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
             <div>
                <h1>Total Price:</h1>
                <p>{totalPrice}</p>
            </div>
            <div>
                <h1>Shipping Adress:</h1>
                <p>{adress}</p>
            </div>
                <p>Your order will be shipped to the adress provided.</p>
        </div>
    </div>
  )
}

export default ShopConfirmation;