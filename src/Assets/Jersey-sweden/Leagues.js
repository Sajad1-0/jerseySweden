import React from 'react'
import {useNavigate} from 'react-router-dom'


const LeaguesLogos = [
    {
        id: 1, 
        name: 'La Liga',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862544/Jersey-sweden/Logos/Spanish-La-Liga-Logo_knfb1q.png',
        
    },
    {
        id: 2, 
        name: 'Primier League',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862543/Jersey-sweden/Logos/Premier-League-Logo_rty5q3.png',
    },
    {
        id: 3,
        name: 'Serie A',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862541/Jersey-sweden/Logos/Italian-Serie-A-Logo_bc7xqt.png',
    },
    {
        id: 4,
        name: 'Natinal Teams',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862540/Jersey-sweden/Logos/FIFA-Logo-1977-1998_crytcp.png',
    },
    {
        id: 5,
        name: 'Other leagues',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1716726745/Jersey-sweden/Logos/obikfulmck6ekjkrfjvk.png',
    }
]


const Ligor = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='flex flex-wrap items-center justify-center gap-6 px-20'>
            {LeaguesLogos.map((data, index) => (
                <li key={index} className='m-4 p-12 border-b border-textColor rounded-lg
                hover:border-b hover:border-hoverColor duration-200 cursor-pointer hover:scale-105 hover:shadow-2xl'
                
                >
                <button onClick={() => navigate(`/kits/${data.id}`)}>
                   <img src= {data.image} alt='Logo for leagues'
                   className='w-[400px] md:w-[500px]'/>
                    <p className='text-center text-2xl font-semibold py-2'>
                        {data.name}</p>
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Ligor


