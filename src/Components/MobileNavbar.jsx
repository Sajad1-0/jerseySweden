import {useState} from 'react'
import { RiMenuLine, RiMenuFoldLine  } from "react-icons/ri";
import {Link} from 'react-router-dom'
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


const MobileNavbar = () => {
    
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='md:hidden '>
        <div className='fixed top-4 left-4 z-50'>
        <button onClick={toggleMenu} className='text-2xl p-2'>
        {isOpen ? <RiMenuFoldLine/> : <RiMenuLine/>}</button>
        </div>

        {isOpen && (
            <div className='fixed inset-0 bg-primary bg-opacity-90 z-40
            flex flex-col items-center justify-center'>
            <ul className='text-2xl space-y-6 flex flex-col items-center'>
                {MenuLinks.map((data, index)=> (
                    <li key={index}>
                    <Link to={data.link}
                    onClick={toggleMenu}
                    className='font-semibold text-textColor hover:text-hoverColor
                  duration-200'> {data.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
        )}
        
    </div>
  )
}

export default MobileNavbar