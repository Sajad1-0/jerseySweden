import React, {useContext} from 'react'
import {JerseyContext} from '../Context/JerseyContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay'
const Product = () => {
    // Import all kits using use context
    const {allKits} = useContext(JerseyContext);
    console.log(allKits.flat());
    const {productId} = useParams();

    // showing chosen kit if the condition is true.
    const product = allKits.flat().find((e) => e.id === Number(productId))


  return (
    <div>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product