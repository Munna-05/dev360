import React from 'react'
import Banner from './Banner'
import './fontStyles.css'

export const FirstSection = () => {
    return (
        <div className='pt-36 pb-16 border-b-2 grid grid-cols-1 backgroundColor px-6  border-neutral-800'>
          
            <div className='flex '>
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-10 myFont'>We don't just build</span>
                <img className='w-20 h-20 munna mt-7 mx-3 rounded-lg brightness-110 shadow shadow-lg shadow-black' src="./munna.jpg" alt="" />
                <span className='myFontItalics md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-10'>websites,</span>

            </div>
            <div className='flex '>
                <img className='w-20 h-20 munna mx-3 rounded-lg brightness-110 shadow shadow-lg shadow-black' src="./ROBINJUSTIN.jpg" alt="" />
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-4 mx-3 myFont'>we build</span>
                <img className='w-20 h-20 munna mx-3 rounded-lg brightness-110 shadow shadow-lg shadow-black' src="./sabari.jpg" alt="" />
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-4 mx-3 myFontItalics'>world-class brands</span>


            </div>
            <div className='flex mt-2'>
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-4 mx-3 myFont'>and</span>
                <img className='w-20 h-20 munna mx-3 rounded-lg brightness-110 shadow shadow-lg shadow-black' src="./ROBINJUSTIN.jpg" alt="" />
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-4 mx-3 myFontItalics'>sustainable</span>
                <span className='md:text-6xl text-4xl text-neutral-800 text-left font-bold mt-4 mx-3 myFont'>businesses</span>
                <img className='w-20 h-20 munna mx-3 rounded-lg brightness-110 shadow shadow-lg shadow-black' src="./ROBINJUSTIN.jpg" alt="" />

            </div>


            <span className='text-left text-neutral-800 font-normal text-2xl flex w-2/3 mt-5'>we are a full service design and development team who specialise in
                crafting simple,useful and beautiful solutions to modern problems.
            </span>
            <div className='flex mt-10'>
                <Banner />
            </div>
        </div>
    )
}
