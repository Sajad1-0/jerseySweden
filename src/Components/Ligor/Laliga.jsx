import React from 'react'
import  {LaligaKits}  from '../../Assets/Jersey-sweden/FootballKits'

// Component for la lagia kits
const LaLiga = () => {
  return (
    <div >
       <ul 
       className='flex flex-wrap items-center justify-center gap-2'>
        {LaligaKits.map((data, index)=> (
          <li key={index} className='m-2 p-10 border-b  border-textColor rounded-lg
          hover:border-b-2 hover:border-hoverColor duration-200 
          hover:scale-105 hover:shadow-2xl cursor-pointer'>
            <img src={data.image} alt="LaligaKits" 
             className='w-[200px] lg:w-[360px]'/>
            <p className='text-center font-semibold'>{data.name}</p>
            <p className='text-center'>{data.price}kr</p>
          </li>
        ))}

       </ul>
    </div>
  )
}

export default LaLiga