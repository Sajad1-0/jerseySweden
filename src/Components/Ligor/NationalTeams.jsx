import React, { useContext }from 'react'
import { InternationalKits } from '../../Assets/Jersey-sweden/FootballKits'
import { Link } from 'react-router-dom'
import { TbShoppingBagPlus } from "react-icons/tb";
import { JerseyContext } from '../../Context/JerseyContext';


//Component for national teams
const NationalTeams = () => {
 
  const {addToCart, } = useContext(JerseyContext);
  
  return (
    <div>
        <ul
        className='flex flex-wrap items-center justify-center gap-2'
        >
            {InternationalKits.map((data, index) => (
                <li key={index}
                className='m-2 p-10 border-b  border-textColor rounded-lg
                hover:border-b-2 hover:border-hoverColor duration-200 cursor-pointer
                hover:scale-105 hover:shadow-2xl'
                >
                  <Link to={`/kits/2/product/${data.id}`}>
                    <img src={data.image} alt="National Kits" 
                    className='w-[200px] lg:w-[360px]'/>
                 </Link>
                 
                   
                   <p className='text-center font-semibold'>{data.name}</p>
                   <p className='text-center'>{data.price}kr</p>
                   <div className='flex justify-end'>
              <TbShoppingBagPlus onClick={() => addToCart(data.id)}
               className='text-4xl active:text-hoverColor'/>
            </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NationalTeams