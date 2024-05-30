import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import LaLiga from './Ligor/Laliga';
import PrimierLeague from './Ligor/PrimierLeague';
import SeriaA from './Ligor/SeriaA';
import OtherLeagues from './Ligor/OtherLeagues';
import NationalTeams from './Ligor/NationalTeams';

const allKits = [LaLiga, PrimierLeague, SeriaA, OtherLeagues, NationalTeams];

const RelatedProduct = () => {
    
    
    const {productId} = useParams();

    const [relatedKits, setRelatedKits] = useState([]);

    useEffect( () => {
        console.log("productId:", typeof productId);
        if (allKits && productId) {

            const id = Number(productId);
            console.log("id:", id);

            // Every kit has a related league 
            const relatedKits = allKits.find( data => data.id === id)?.league;
            console.log("relatedKits:", relatedKits);

            if(relatedKits) {

            
                // Filter kits that belong to the same league as related kit
                const filterKits = allKits.filter(data => data.id === relatedKits && data.id !== id);
                console.log("filterKits:", filterKits);
                // Bring only first ten kits
                const firstTenKits = filterKits.slice(0, 10);
                console.log("firstTenKits:", firstTenKits);

                setRelatedKits(firstTenKits);
            } else {
                setRelatedKits([]);
            }
        }
    },[productId]);
  return (
    <div>
       <h1>Related Products!</h1>
       <hr />
       {/* Related products kits */}
       <div>
           <ul>
            {relatedKits.map((data, index) => (
                <li key={index}>
                <Link to={`/product/${data.id}`}>
                    <img src={data.image} alt={data.name}  className=''/>
                </Link>
                <p>{data.name}</p>
                <p>{data.price}kr</p>
                </li>
                
            ))}
           </ul>
        </div>
    </div>
  )
}

export default RelatedProduct