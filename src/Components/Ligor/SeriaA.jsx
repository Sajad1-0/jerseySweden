import React from 'react'
import { SeriaAKits } from '../../Assets/Jersey-sweden/FootballKits'
const SeriaA = () => {
  return (
    <div>
        <ul>
            {SeriaAKits.map((data, index) => (
                <li key={index}>
                   <img src={data.image} alt="SeriaA Kits" /> 
                   <p>{data.name}</p>
                   <p>{data.price}kr</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SeriaA