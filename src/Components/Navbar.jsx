import React from 'react'
import { FaCartShopping } from "react-icons/fa6"
import {Link } from 'react-router-dom'
import CartTotalQuantity from './CartTotalQuantity'


//Menu links for the navigation menu
const MenuLinks = [
  {
    id: 1,
    name: 'Kits',
    link: '/kits',
  },
  {
    id: 2,
    name: 'Leagues',
    link: '/leagues',
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact',
  },
]


const Navbar = () => {

  return (
    <div className='bg-primary duration-200 realtive z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center lg:gap-4">

          {/* Logo and links section */}
          <div className='flex items-center lg:gap-60'>
            
            <Link to="/" className='text-textColor font-semibold lg:tracking-wider 
            text-2xl lg:text-3xl uppercase hover:text-hoverColor duration-200
            ml-28 md:ml-0'>
              Jersey Sweden</Link>
              
              {/* Menu links */}
              <div >
              <ul  className='hidden md:flex items-center gap-10 md:px-10 lg:text-xl'>
                {MenuLinks.map((data, index)=> (
                  <li key={index}>
                    <Link to={data.link}
                    className='inline-block font-semibold text-textColor hover:text-hoverColor
                  duration-200'> {data.name}</Link>
                  </li>
                ))}
              </ul>  
              </div>
          </div>
          
          {/* Navbar right section section */}
            <div className='flex justify-between items-center gap-4'>

              {/* Order button section */}
              <button className='relative p-3'>
               <Link to= '/cart'>
                < FaCartShopping className='text-xl text-textColor hover:text-hoverColor'/> 
               </Link> 
                <div className='add-cart'><CartTotalQuantity/></div>
              </button>

              {/*login section*/}
              <div className='hidden md:block border-2 border-black border-solid rounded-3xl
                hover:border-sky-500 hover:text-hoverColor'>

               <Link to='/login'>
                <button className='w-20 h-10 font-semibold cursor:pointer
                  active:bg-buttonColor active:rounded-3xl'>Login </button>
                </Link>  
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;