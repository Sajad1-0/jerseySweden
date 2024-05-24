import React from 'react'
import { InternationalKits } from '../../Assets/Jersey-sweden/FootballKits'
const NationalTeams = () => {
  return (
    <div>
        <ul>
            {InternationalKits.map((data, index) => (
                <li key={index}>
                   <img src={data.image} alt="National kits" /> 
                   <p>{data.name}</p>
                   <p>{data.price}kr</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NationalTeams