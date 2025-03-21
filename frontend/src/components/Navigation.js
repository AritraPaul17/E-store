import React, { } from 'react'
import { Link } from 'react-router-dom'
//importing image
import logo from '../images/logo.avif'
// importing icons from react icons
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {

    return (
        <nav className='h-16 shadow-xl shadow-black-500/50'>
            <div className='h-full container flex items-center justify-between' >

                <div className='cursor-pointer'>
                    <Link><img src={logo} alt='Logo' className=' w-36' /></Link>
                </div>

                <div className='flex justify-between items-center w-full max-w-md border rounded-full'>
                    <input type='search' placeholder='Search product here.....' className='w-full h-full outline-none pl-3 pr-2' />
                    <div className='p-2 bg-red-500 text-xl min-w-[40px] flex items-center justify-center rounded-r-full cursor-pointer text-white'>
                        <IoSearchSharp />
                    </div>
                </div>

                <div className='ml-2 flex gap-5 items-center'>
                    {/* ----profile---- */}
                    <div className=' cursor-pointer'>
                        <Link to={localStorage.getItem('JWT')?'/profile':'/login'} className='text-3xl' title='Your Profile'><CgProfile /></Link>
                    </div>
                    
                    {/* ---Login--- */}
                    {
                        localStorage.getItem("JWT") ? "":
                            <div className='cursor-pointer'>
                                <Link to="/login" className='px-3 py-2 text-sm bg-green-500 rounded-full text-white'>Login</Link>
                            </div>                           
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navigation
