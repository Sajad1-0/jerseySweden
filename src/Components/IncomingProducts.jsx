import React from 'react'

const IncomingProducts = () => {
  return (
    <div className='flex flex-col items-center justify-center 
    gap-8 m-auto p-[100px] bg-stone-950 text-primary h-[443px]'>

        <h1 className='text-3xl md:text-5xl font-semibold text-center  '
        >Get Exclusive offers on Your Email</h1>

        <p className='text-xl text-center'>Subscribe to our website and stay updated</p>
        <div className='flex items-center justify-center'>
            <input type="email" placeholder='Your Email'
            className='rounded outline-0 text-md md:text-xl text-textColor p-2 
            focus:outline-2 focus:outline-hoverColor' />
            <button className='rounded-lg m-2 p-2 bg-red-500 text-sm font-semibold
            active:text-textColor'
            >Subscribe</button>
        </div>
    </div>
  )
}

export default IncomingProducts