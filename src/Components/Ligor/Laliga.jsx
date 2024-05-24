import React from 'react'
import  {LaligaKits}  from '../../Assets/Jersey-sweden/FootballKits'

// Component for la lagia kits
const LaLiga = () => {
  return (
    <div>
       <ul>
        {LaligaKits.map((data, index)=> (
          <li key={index}>
            <img src={data.image} alt="LaligaKits" />
            <p>{data.name}</p>
            <p>{data.price}kr</p>
          </li>
        ))}

       </ul>
    </div>
  )
}

export default LaLiga