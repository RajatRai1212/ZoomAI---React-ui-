import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-9 text-[white]">
            <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>ZoomAi</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav}>
                {
                    !nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu  size={20}/>
                }
                
            </div>
            {/* Mobile menu */}
            <div className={!nav ?' fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 ease-in duration-500':'fixed hidden'} >
            <ul className='pt-20  uppercase' >
                <li className='p-4 border-b border-gray-800'>Home</li>
                <li className='p-4 border-b border-gray-800'>Company</li>
                <li className='p-4 border-b border-gray-800'>Resources</li>
                <li className='p-4 border-b border-gray-800'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar