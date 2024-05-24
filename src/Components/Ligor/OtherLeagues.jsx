import React from 'react'
import { otherLeaguesKits } from '../../Assets/Jersey-sweden/FootballKits'
const OtherLeagues = () => {
  return (
    <div>
        <ul>
            {otherLeaguesKits.map((data, index) => (
                <li key={index}>
                   <img src={data.image} alt="Other Leagues kits" /> 
                   <p>{data.name}</p>
                   <p>{data.price}kr</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default OtherLeagues