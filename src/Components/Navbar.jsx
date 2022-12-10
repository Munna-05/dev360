import React from 'react'

const Navbar = () => {
    const logo = '<DEV360/>'
    return (
        <div className='fixed w-3/4 mx-auto w-full '>
            <div className='flex mx-auto mt-1  mx-auto w-3/4 bg-neutral-700 text-white text-sm   h-5 rounded-tl-lg rounded-tr-lg'>
                <span className='h-2 w-2 mx-2 mt-1.5 bg-slate-200 rounded-full'></span>
                <span className='h-2 w-2  mt-1.5 bg-slate-200 rounded-full'></span>
                <span className='h-2 w-2 mx-2 mt-1.5 bg-slate-200 rounded-full'></span>
            </div>

            <div className='flex mx-auto w-3/4 text-sm justify-between border-b border-black  ' style={{background:"#e2e6e1"}}>

                <div className=' duration-200  cursor-pointer transition hover:bg-slate-900 hover:text-white px-3 font-bold'>{logo}</div>
                <div>
                    <span className='mx-3  cursor-pointer  hover:font-bold'>Our Works</span>
                    <span className='mx-3  cursor-pointer  hover:font-bold'>Our Process</span>
                    <span className='mx-3  cursor-pointer  hover:font-bold'>Meet the Team</span>
                    <span className='mx-3  cursor-pointer  hover:font-bold'>Works Status</span>
                </div>
                <div className='hover:font-bold px-3 cursor-pointer hover:bg-slate-900 hover:text-white'>Login</div>

            </div>
                

              
            
        </div>
    )
}

export default Navbar