import React from 'react'

const Banner = () => {
  return (
    <div>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-gray-800 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>E-Commerce App</button>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Booking App</button>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Social Media App</button>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Accounting App</button>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Personal Websites</button>
        <button className='mx-2 px-3 text-sm py-1 rounded-full border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Business Websites</button>
        <button className='mx-2  text-xl  border-2 border-neutral-700 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        ' style={{borderRadius:"100%",padding:"2px 10px"}}>+</button>
    </div>
  )
}

export default Banner