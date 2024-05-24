import React from 'react'
import { PrimierLeagueKits } from '../../Assets/Jersey-sweden/FootballKits'


const PrimierLeague = () => {
  return (
    <div>
        <ul>
            {PrimierLeagueKits.map((data, index) => (
                <li key={index}>
                   <img src={data.image} alt="PrimierLeagueKits" /> 
                   <p>{data.name}</p>
                   <p>{data.price}kr</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PrimierLeague