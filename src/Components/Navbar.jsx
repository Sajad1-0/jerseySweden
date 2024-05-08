import React from 'react'
import { IoMdSearch } from 'react-icons/io'
//Menu links for the navigation menu
const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Kits',
    link: '/#kits',
  },
  {
    id: 3,
    name: 'Leagues',
    link: '/#leagues',
  },
  {
    id: 4,
    name: 'Contact',
    link: '/#contact',
  },
  {
    id: 5,
    name: 'About',
    link: '/#about',
  },
]


const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-textColor dark:text-primary
    duration-200 realtive z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center gap-4">
          {/* Logo and links section */}
          <div className='flex items-center gap-4'>
            <a href="#" className='text-textColor font-semibold tracking-wider 
            text-3xl uppercase hover:text-hoverColor duration-200'>
              Jersey Sweden</a>
              {/* Menu links */}
              <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((data, index)=> (
                  <li key={index}>
                    <a href={data.link}
                    className='inline-block font-semibold text-textColor hover:text-hoverColor
                    dark: text-primary duration-200'> {data.name}</a>
                  </li>
                ))}
              </ul>  
              </div>
          </div>
          {/* Navbar right section section */}
            <div className='flex justify-between items-center gap-4'>
              {/*serach bar section*/}
              <div className='realtive group hidden sm:block'>
                <input type="text" placeholder='Search' 
                className='search-bar' />

                <IoMdSearch className='text-xl text-textColor dark: text-primary'/>
              </div>

              {/*Dark Mode section*/}
              <div></div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;