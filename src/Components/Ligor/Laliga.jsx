import React from 'react'
import  {LaligaKits}  from '../../Assets/Jersey-sweden/FootballKits'

// Component for la lagia kits
const LaLiga = () => {
  return (
    <div>
       <ul 
       className='flex flex-wrap items-center justify-center gap-2'>
        {LaligaKits.map((data, index)=> (
          <li key={index} className='my-8 p-10 border-solid border-2'>
            <img src={data.image} alt="LaligaKits" 
             className='w-[200px] md:w-[360px] '/>
            <p className='text-center'>{data.name}</p>
            <p className='text-center'>{data.price}kr</p>
          </li>
        ))}

       </ul>
    </div>
  )
}

export default LaLiga