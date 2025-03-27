import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import { IoLogOutOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Profile = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({})

    const { getuserDetails, dispatch } = useContext(UserContext)

    const getDetails = async () => {
        const userData = await getuserDetails();
        setData(userData);
    }

    useEffect(() => {
        getDetails()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("JWT");
        dispatch({ type: "REMOVE_USER" })
        navigate('/');
    }
    return (
        <>
            <div className='flex'>
                    <aside className='h-[calc(100vh-120px)] w-full md:w-80 bg-slate-300 pt-4 relative block'>
                        <div className='block mx-auto my-2 w-24 h-24 rounded-full'>
                            <img src={data.data?.profilePic } alt='...' className='h-full rounded-full' />
                        </div>
                        <div className='text-center'>
                            <p className='text-lg font-bold'>{data.data?.name}</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-lg font-bold'>{data.data?.email}</p>
                        </div>
                        <div className='p-2 flex flex-col gap-2'>
                            <Link to='/profile/myaccount' className='bg-white p-2 rounded-md cursor-pointer flex gap-6 items-center'>
                                <CgProfile className='text-lg' />
                                <p >My Account</p>
                            </Link>
                            <Link to='/profile/mycart' className='bg-white p-2 rounded-md cursor-pointer flex gap-6 items-center' >
                                <FaCartShopping className='text-lg' />
                                <p>My Cart</p>
                            </Link>
                            
                        </div>

                        {/* ---logout--- */}
                        <div className='absolute bottom-4 w-full flex flex-col gap-3 items-center justify-center'>
                            <Link to='/admin' className='w-[85%] bg-blue-700 text-white font-semibold text-lg p-2 text-center rounded-md' >Admin Page</Link>
                            <button className='bg-red-600 w-[85%] p-2 rounded-lg font-semibold text-white hover:bg-red-800 duration-500 flex items-center justify-center text-lg gap-2'
                                onClick={handleLogout}>Log Out <IoLogOutOutline className='text-xl' /></button>
                        </div>
                    </aside>
                <div className='w-0 md:w-[calc(100vw-320px)] overflow-hidden'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Profile
