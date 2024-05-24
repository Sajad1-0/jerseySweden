import React from 'react'
import LaLiga from '../Components/Ligor/Laliga'
import PrimierLeague from '../Components/Ligor/PrimierLeague'
import SeriaA from '../Components/Ligor/SeriaA'
import OtherLeagues from '../Components/Ligor/OtherLeagues'
import NationalTeams from '../Components/Ligor/NationalTeams'
import {useParams} from 'react-router-dom'

const Kits = () => {
  const {id} = useParams();
  return (
    <div className='bg-primary flex items-center justify-center gap-10'>
      {(id === 1 || !id) && <LaLiga/>}
      {(id === 2 || !id )&& <PrimierLeague/>}
      {(id === 3 || !id ) && <SeriaA/>}
     {(id === 5 || !id)&& <OtherLeagues/>} 
     {(id === 4 || !id) && <NationalTeams/>}
    </div>
  )
}

export default Kits