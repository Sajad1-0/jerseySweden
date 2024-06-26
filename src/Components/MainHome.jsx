import React from 'react'
import Background from '../Assets/Background-image.jpg'
import {useNavigate} from 'react-router-dom'

const MainHome = () => {
    const navigate = useNavigate();

    //Navigate to kits page by clicking on button
    const goToKitsPage= () => {
        navigate('/kits');
    }

  return (
    < div className='h-screen w-full relative flex flex-col items-center'>
        {/* Image for home page */}
            <img src={Background} alt="Background for home page" 
            className='w-full h-full object-cover'/>

        {/* content section for home page */}
        <div className='flex flex-col items-center z-10 w-1/2 gap-4 absolute
        top-20 mx-auto '>
            <h1 className='uppercase font-semibold text-md md:text-lg 
            lg:text-3xl lg:font-bold text-primary text-center'
            >Explore the best football jerseys</h1>

            <p className='text-sm md:text-md md:font-semibold text-primary text-center
            '
            > Today, we proudly deliver high-quality football jerseys at incredibly low prices. You can find your favorite team's 
            jersey with us at the best price. At Jersey Sweden, we always strive for better service for our customers.
            </p>

            {/* Button to navigate to kits */}
            <div>
                <button onClick={() => goToKitsPage()}
                className='inline-block bg-buttonColor rounded-2xl tracking-wide py-2 px-2.5
                font-semibold md:py-2.5 md:px-8 md:tracking-wider text-textColor 
                hover:tracking-widest hover:bg-primary hover:text-hoverColor
                active:text-textColor active:bg-buttonColor'
                >EXPLORE</button>
            </div>
        </div>

    </div>
  )
}

export default MainHome