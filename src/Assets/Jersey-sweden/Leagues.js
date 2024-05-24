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
        name: 'other leagues',
        image: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1716558930/otherleagues_ulpanz.png',
    }
]


const Ligor = () => {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='flex items-center gap-10 px-20'>
            {LeaguesLogos.map((data, index) => (
                <li key={index}>
                <button onClick={() => navigate(`/kits/${data.id}`)}>
                   <img src= {data.image} alt='Logo for leagues'/>
                    <p>{data.name}</p>
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Ligor


