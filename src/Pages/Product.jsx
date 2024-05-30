import React, {useContext, useEffect, useState} from 'react'
import {JerseyContext} from '../Context/JerseyContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay'
import ProductDescription from '../Components/ProductDescription'
import RelatedProduct from '../Components/RelatedProduct'

const Product = () => {
    // Import all kits using use context
    const {allKits} = useContext(JerseyContext);
   
    const {productId} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
      if (allKits && productId) {
        // Flatten the allkits array and find the product with the matching id
        const flatKits = allKits.flat();

        // Convert ProductID to Number
        const id = Number(productId);

        // Find the product with the matching id 
        const foundProduct = flatKits.find((kit) => kit.id === id);
        setProduct(foundProduct);
      }
    }, [allKits, productId]);

    if(!product) return <div>Loading....</div>

  return (
    <div>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProduct/>
    </div>
  )
}

export default Product