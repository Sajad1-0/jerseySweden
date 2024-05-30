import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mx-4 mt-8'>
        {/* Description box navigator */}
        <div className='flex gap-8'>
            {/* Description navigation box */}
            <div className='flex items-center justify-center text-xl
            font-semibold border-r border-solid border-textColor pr-4
            my-4 cursor-pointer'>Description</div>
            <div className='flex items-center justify-center text-xl
            pr-4 my-4 cursor-pointer '>Reviews(500)</div>
        </div>
        <div className='flex flex-col gap-4 border border-solid border-textColor
        p-10 mb-4'>
            <p>
            Welcome to our football shirt paradise, where every stitch tells
            a story of passion, pride, and victory! Dive into our vast 
            collection and find the perfect jersey to represent your favorite 
            team on the field or in the stands. Crafted from high-quality 
            materials, our football shirts offer unbeatable comfort and 
            durability, ensuring you stay at the top of your game from 
            kickoff to final whistle. Whether you're a die-hard supporter or 
            a casual fan, we have a jersey for you. From iconic designs 
            adorned with team logos and colors to sleek, modern styles that 
            stand out from the crowd, our selection caters to every taste 
            and preference. Choose from replicas of your favorite players' 
            jerseys or personalize your shirt with your name and number for 
            that extra touch of authenticity. Whether you're cheering from 
            the sidelines or playing on the pitch, our football shirts are 
            more than just apparel; they're a symbol of unity, camaraderie, 
            and the beautiful game. So gear up, show your colors, and let 
            the world know where your loyalty lies with our premium football 
            shirts. Victory awaits 
            </p>
        </div>
    </div>
  )
}

export default ProductDescription