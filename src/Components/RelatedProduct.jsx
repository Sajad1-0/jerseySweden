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
    <div className='flex flex-col items-center gap-4 '>
       <h1 className='text-xl font-semibold'>Related Products!</h1>
       <hr  className='w-[200px] border border-textColor'/>
       {/* Related products kits */}
       <div className='flex mt-4 gap-4'>
           <ul className='flex flex-wrap items-center justify-center gap-4 m-8'>
            {relatedKits.map((data, index) => (
                <li key={index} onClick={window.scrollTo(0,0)}
                className='border-b border-textColor rounded-md hover:scale-110 duration-300'>
                <Link to={`/kits/2/product/${data.id}`}>
                    <img src={data.image} alt={data.name} className='w-[150px] md:[550px] m-auto pb-4 duration-200' />
                </Link>
                <p className='w-[200px] text-center pb-4'>{data.name}</p>
                <p className='text-center pb-2'>{data.price}kr</p>
                </li>
                
            ))}
           </ul>
        </div>
    </div>
  )
}

export default RelatedProduct