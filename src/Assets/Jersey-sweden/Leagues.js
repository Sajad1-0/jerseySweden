import React from 'react'
const LeaguesLogos = [
    {
        id: 1, 
        name: 'Ligue 1 Uber Eats',
        link: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862542/Jersey-sweden/Logos/Ligue-1-Logo_fvo2jl.png'
    },
    {
        id: 2, 
        name: 'La Liga',
        link: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862544/Jersey-sweden/Logos/Spanish-La-Liga-Logo_knfb1q.png'
    },
    {
        id: 3, 
        name: 'Primier League',
        link: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862543/Jersey-sweden/Logos/Premier-League-Logo_rty5q3.png'
    },
    {
        id: 4,
        name: 'Serie A',
        link: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862541/Jersey-sweden/Logos/Italian-Serie-A-Logo_bc7xqt.png'
    },
    {
        id: 5,
        name: 'Natinal Teams',
        link: 'https://res.cloudinary.com/dv9izlvzw/image/upload/v1715862540/Jersey-sweden/Logos/FIFA-Logo-1977-1998_crytcp.png' 
    }
]


const Leagues = () => {
  return (
    <div>
        <ul>
            {LeaguesLogos.map((data, index) => (
                <li key={index}>
                   <img src= {data.link}></img> {data.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Leagues


