import React from 'react'
import IncomingProducts from '../Components/IncomingProducts'
import { SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from 'react-router-dom';
import SendingEmail from '../Components/SendingEmail';

const Contact = () => {
  return (
    <div className='bg-primary flex flex-wrap flex-col h-full'>
     <div className='flex flex-wrap justify-center gap-4'>
       <div className='mx-4 p-2 w-full md:w-[600px]'>
         {/* social Media icons */}
         <h1 className='text-lg font-semibold text-center text-center py-4 xl:w-[400px]'
         >Make sure to visite our social Medies for more service and incoming kits</h1>

         <ul className='flex m-2 justify-center xl:justify-start'>
         <p className='text-md font-semibold'>Follow us on:</p>
           <li className='flex mx-2 px-4'>
            <Link to="https://www.instagram.com/fs.jerseys/">
              <SlSocialInstagram className='mr-2 text-2xl hover:text-hoverColor duration-200'/>
              </Link>
            <Link to="https://www.instagram.com/fs.jerseys/">
              <PiTiktokLogo className='ml-2 text-2xl hover:text-hoverColor duration-200'/>
              </Link>
              </li>

          </ul>

          {/* link to Email and phone number */}
          <ul className='flex my-4 mx-2 justify-center xl:justify-start'>
           <p className='text-md font-semibold'>Or Contact us at:</p>
            <li className='flex mx-2 px-4'>
              <Link to='mailto:someone@example.com'>
              <MdOutlineMail className='mx-2 text-2xl hover:text-hoverColor duration-200' /> 
              </Link>
              <Link to='tel:+467xxxxxxx'>
              <IoIosPhonePortrait  className='mx-2 text-2xl hover:text-hoverColor duration-200' />
              </Link>
            </li>
          </ul> 
       </div>
       <div >
        {/* form for sending email to owners */}
        <SendingEmail/>
       </div>
     </div>
      <div>
        {/* Subscribe section for incoming products */}
     <IncomingProducts/> 
      </div>
    </div>
  )
}

export default Contact