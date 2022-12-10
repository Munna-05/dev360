import React from 'react'
import Banner from './Banner'

export const FirstSection = () => {
  return (
    <div className='pt-36 pb-16 border-b-2 border-neutral-800'>
        <p className='text-6xl text-neutral-800 text-left font-bold mt-10 grid grid-cols-1' style={{lineHeight:'3.5rem'}}>We don't just build websites,
            we build world-class brands and
            sustainable businesses  
        </p>
        <span className='text-left text-neutral-800 font-normal text-2xl flex w-2/3 mt-5'>we are a full service design and development team who specialise in
            crafting simple,useful and beautiful solutions to modern problems.
        </span>
        <div className='flex mt-10'>
            <Banner/>
        </div>
    </div>
  )
}
