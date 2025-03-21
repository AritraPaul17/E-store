import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../images/profile.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify'
import { UserContext } from '../context/UserContext';
import { loginroute } from '../utils/apis';

const Login = () => {

    const {dispatch} = useContext(UserContext)
    const navigate = useNavigate();

    const [error, setError] = useState({
        code: false,
        message: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setError({
            code: false,
            message: ""
        })
        let url = loginroute;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: data.password,
                email: data.email
            }),
        })
        const res = await response.json();
        if (!res.success) {
            setError({
                code: true,
                message: res.message
            })
            toast.error(res.message);
            return
        }
        localStorage.setItem("JWT", res.authToken);
        toast.success(res.message);
        setdata({
            email: "",
            password: ""
        })
        dispatch({type:"ADD_USER",payload:res.data})
        navigate('/');
    }
    
    return (
        <div>
            <main className='h-[calc(100vh-140px)] bg-slate-200 flex justify-center items-center'>
                <div className='h-full md:max-h-min p-3 w-full md:max-w-md border rounded-lg bg-white shadow-md'>
                    <div className='h-32 flex justify-center'>
                        <img src={profile} alt='...' className='h-full rounded-full' />
                    </div>
                    <form className='flex flex-col gap-3 w-full' onSubmit={handleLogin}>

                        {/* ---Email--- */}
                        <div className='flex flex-col gap-2'>
                            <label>Email Address:</label>
                            <input type='text' required
                                placeholder='Enter your email id...'
                                className='rounded-full px-3 py-2 text-base outline-none border-2 border-rose-500'
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* ---Password--- */}
                        <div className='flex flex-col gap-2'>
                            <label>Password:</label>
                            <div className='flex items-center rounded-full pr-3 border-rose-500 border-2'>
                                <input type={showPassword ? "text" : "password"} required
                                    placeholder='Enter your password...'
                                    className=' rounded-full px-3 py-2 text-base outline-none w-full '
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                />
                                <div className='cursor-pointer text-lg' onClick={(e) => setShowPassword((prev) => !prev)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</div>
                            </div>
                        </div>

                        <div className='text-red-600 text-right '>Forgotten Password?</div>

                        {/* ---error box--- */}
                        {error.code && <div className='text-red-600 px-2'>{`*${error.message}`}</div>}

                        {/* ---button--- */}
                        <div>
                            <button type='submit' className='block w-[70%] mx-auto px-3 py-2 bg-red-600 text-white rounded-full hover:scale-110 duration-300'>Login</button>
                        </div>

                        <div className=''>Don't have an account? <Link to="/signup" className='text-red-600' >Sign Up</Link></div>

                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login
