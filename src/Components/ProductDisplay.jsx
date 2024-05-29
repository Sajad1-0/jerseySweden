import React from 'react'

const ProductDisplay = (props) => {

  const {product} = props;
  if (!product) return 
  
  return (
    <div>
      {/* Product display left */}
      <div>
        {/* Product Image */}
        <div>
          <img src={product.image} alt="" />
        </div>
      </div>

      {/* Product display right */}
      <div>
      <h1>{product.name}</h1>

      {/* Product price section */}
        <div>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay