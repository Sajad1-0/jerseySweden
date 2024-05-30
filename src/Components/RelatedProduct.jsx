import React, {useContext, useEffect, useState} from 'react'
import { JerseyContext } from '../Context/JerseyContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const RelatedProduct = () => {
    // Import all kits using useContext
    const {allKits} = useContext(JerseyContext);
    
    const {productId} = useParams();

    const [relatedKits, setRelatedKits] = useState([]);

    useEffect( () => {
        if (allKits && productId) {

            const id = Number(productId);

            // Every kit has a related league 
            const relatedLeague = allKits.find( kit => kit.id === id)?.league;

            if(relatedLeague) {
                // Filter kits that belong to the same league as related kit
                const filterKits = allKits.filter(kit => kit.league === relatedLeague && kit.id === id);

                // Bring only first ten kits
                const firstTenKits = filterKits.slice(0, 10);
                setRelatedKits(firstTenKits);
            }
        }
    },[allKits, productId]);
  return (
    <div>
       <h1>Related Products!</h1>
       <hr />
       {/* Related products kits */}
       <div>
           <ul>
            {relatedKits.map((kit, index) => (
                <li key={index}>
                <Link to={`/product/${kit.id}`}>
                    <img src={kit.image} alt="" />
                </Link>
                <p>{kit.name}</p>
                <p>{kit.price}kr</p>
                </li>
                
            ))}
           </ul>
        </div>
    </div>
  )
}

export default RelatedProduct