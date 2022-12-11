import React from 'react'
import './fontStyles.css'
const BannerTwo = () => {
    return (
        <div>
            <div className='flex'>
                <button className='mx-2 px-3 mt-28  text-sm py-1 rounded-full border-2 border-gray-800 text-neutral-700 font-semibold
        hover:bg-neutral-700 hover:text-white
        '>Our Work</button>

            </div>
            <div className='flex mt-5'>
                <span className='myFont text-5xl font-bold text-neutral-800'>
                    We have <span className='mx-3 myFontItalics'>solutions</span>
                    <span className='mx-3'>for your</span>
                    <span className='mx-3 myFontItalics text-5xl'>problems</span>
                </span>
            </div>
        </div>
    )
}

export default BannerTwo