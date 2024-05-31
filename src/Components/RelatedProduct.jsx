import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { LaligaKits } from '../Assets/Jersey-sweden/FootballKits';
import { PrimierLeagueKits } from '../Assets/Jersey-sweden/FootballKits';
import { SeriaAKits } from '../Assets/Jersey-sweden/FootballKits';
import { otherLeaguesKits } from '../Assets/Jersey-sweden/FootballKits';
import { InternationalKits } from '../Assets/Jersey-sweden/FootballKits';


const allKits = [...LaligaKits, ...PrimierLeagueKits, ...SeriaAKits, ...otherLeaguesKits,
     ...InternationalKits];
    


const RelatedProduct = () => {
     const {productId} = useParams();
    

    const [relatedKits, setRelatedKits] = useState([])
       
   useEffect(() => {
    const currentKit = allKits.find(data => data.id === Number(productId));

    if (currentKit) {
        const relatedKits = allKits.filter(data => data.league === currentKit.league &&
            data.id !== currentKit.id).sort(() => 0.5 - Math.random()) // randomly sort the filtered kits
            .slice(0,5); // take the first 5 kits
            setRelatedKits(relatedKits);
    }
   }, [productId])

    
    

  return (
    <div>
       <h1>Related Products!</h1>
       <hr />
       {/* Related products kits */}
       <div>
           <ul>
            {relatedKits.map((data, index) => (
                <li key={index}>
                <Link to={`/kits/2/product/${data.id}`}>
                    <img src={data.image} alt={data.name}  className='p-2'/>
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