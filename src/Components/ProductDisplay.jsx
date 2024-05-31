import React, {useContext}from 'react'
import StarFull from '../Assets/Star-full.png'
import HalfStar from '../Assets/Star Half Full.png'
import {JerseyContext} from '../Context/JerseyContext'

const ProductDisplay = ({product}) => {

  // importing addTocart function from JerseyContext
  const {addToCart} = useContext(JerseyContext);
  // const {product} = props;
  if (!product) return <div>Product not found</div> 
  
  return (
    <div className='flex flex-wrap mx-0 my-8 
    lg:flex-nowrap duration-200 bg-primary'>
      {/* Product display left */}
      <div className='m-10'>
        {/* Product Image */}
        <div className='w-[400px] md:w-[600px]  md:mx-28 lg:mx-10'>
          <img src={product.image} alt="" className='border border-solid border-textColor rounded-[30px]
          shadow-2xl shadow-hoverColor'/>
        </div>
      </div>

      {/* Product display right */}
      <div className='flex flex-col m-10'>
       <h1 className=' font-bold text-xl '>{product.name}</h1>

      {/* Rating icons for images */}
        <div className=' flex w-6 items-center'>
          <img src={StarFull} alt="Full star icon" />
          <img src={StarFull} alt="Full Star icon" />
          <img src={StarFull} alt="Full star icon" />
          <img src={StarFull} alt="Full star icon" />
          <img src={HalfStar} alt="Half star icon" />
          <p>(500)</p>
        </div>

        {/* Product price section */}
        <div className='my-2'>
          <p className='font-bold'>{product.price}kr</p>
        </div>

        {/* Product description */}
        <div>
          <p>
          Introducing the pinnacle of football fashion: our Elite Series 
          Home Jersey. Inspired by the legacy of champions and crafted with
          the latest in sports technology, this shirt is more than just
          apparel—it's a statement of excellence.

          Engineered with lightweight, breathable fabric, the Elite Series
          Home Jersey ensures maximum comfort and performance, allowing you 
          to move with agility and precision on the field. Its 
          moisture-wicking properties keep you cool and dry even in the 
          most intense moments of the game.

          Designed in the iconic colors of our esteemed team, this
          jersey features intricate detailing and bold graphics that 
          command attention and instill fear in the hearts of opponents. 
          The team crest proudly emblazoned on the chest symbolizes years 
          of tradition, passion, and unwavering dedication.

          Whether you're battling for glory on the pitch or cheering from 
          the stands, the Elite Series Home Jersey elevates your game and 
          showcases your unwavering support for the team. Join the ranks of 
          legends and make your mark with this iconic piece of football 
          history.
          </p>
        </div>

        {/* Product size */}
        <div className='mt-4 '>
          <h1 className='font-bold text-lg'>Select Size:</h1>
          <div className='flex font-medium gap-4'>
            <div className='cursor-pointer px-4 py-2 border border-solid border-textColor 
            active:bg-textColor active:text-primary rounded-md'>S</div>
            <div className='cursor-pointer px-4 py-2 border border-solid border-textColor 
            active:bg-textColor active:text-primary rounded-md'>M</div>
            <div className='cursor-pointer px-4 py-2 border border-solid border-textColor 
            active:bg-textColor active:text-primary rounded-md'>L</div>
            <div className='cursor-pointer px-4 py-2 border border-solid border-textColor 
            active:bg-textColor active:text-primary rounded-md'>Xl</div>
            <div className='cursor-pointer px-4 py-2 border border-solid border-textColor 
            active:bg-textColor active:text-primary rounded-md'>XXl</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}
        className='w-[170px] my-4 mx-2 bg-hoverColor rounded-2xl py-4 px-8
        font-semibold hover:shadow-md hover:shadow-textColor active:text-primary'>
        ADD TO CART</button>
        <p className='mt-2 font-medium'>
          <span className='font-bold text-lg'>Category :</span> Football kits for everyone!</p>
      </div>
    </div>
  )
}

export default ProductDisplay