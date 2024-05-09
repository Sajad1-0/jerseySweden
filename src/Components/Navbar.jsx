import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from "react-icons/fa6"
import Login from '../Pages/Login'
//Menu links for the navigation menu
const MenuLinks = [
  {
    id: 1,
    name: 'Kits',
    link: '/#kits',
  },
  {
    id: 2,
    name: 'Leagues',
    link: '/#leagues',
  },
  {
    id: 3,
    name: 'Contact',
    link: '/#contact',
  },
  {
    id: 4,
    name: 'About',
    link: '/#about',
  },
]


const Navbar = () => {
  return (
    <div className='bg-primary duration-200 realtive z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center gap-4">
          {/* Logo and links section */}
          <div className='flex items-center gap-4'>
            <a href="/#" className='text-textColor font-semibold tracking-wider 
            text-3xl uppercase hover:text-hoverColor duration-200'>
              Jersey Sweden</a>
              {/* Menu links */}
              <div className='hidden lg:block'>
              <ul className='flex items-center gap-10 px-20'>
                {MenuLinks.map((data, index)=> (
                  <li key={index}>
                    <a href={data.link}
                    className='inline-block font-semibold text-textColor hover:text-hoverColor
                  duration-200'> {data.name}</a>
                  </li>
                ))}
              </ul>  
              </div>
          </div>
          {/* Navbar right section section */}
            <div className='flex justify-between items-center gap-4'>

              {/*serach bar section*/}
              <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search' 
                className='search-bar' />

                <IoMdSearch className='text-xl text-textColor group-hover:text-hoverColor
                absolute top-1/2 -translate-y-1/2 right-3 
                duration-300'/>
              </div>
              {/* Order button section */}
              <button className='relative p-3'>
                < FaCartShopping className='text-xl text-textColor hover:text-hoverColor'/>
                <div className='add-cart'>4</div>
              </button>

              {/*login section*/}
              <div>
                <Login />
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;