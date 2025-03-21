import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../images/profile.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageToBase64 from '../imageConverter/imageToBase64'
import { toast } from 'react-toastify'
import { registerroute } from '../utils/apis';

const SignUp = () => {

    const navigate = useNavigate();

    const [error, setError] = useState({
        code: false,
        message: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value
        })
    }
    
    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        try {
            let base64 = await imageToBase64(file)
            setdata({
                ...data,
                profilePic: base64
            })
        } catch (err) {
            console.log(err)
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError({
            code: false,
            message: ""
        })
        if (data.confirmPassword !== data.password) {
            setError({
                code: true,
                message: "Confirm password is not matching."
            })
            toast.error("Sign Up unsuccessfull")
            return
        }
        let url = registerroute;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                profilePic: data.profilePic
            }),
        })
        const res = await response.json();
        if (!res.success) {
            setError({
                code: true,
                message: res.message
            })
            toast.error(res.message)
            return
        }
        localStorage.setItem("JWT", res.authToken);
        toast.success(res.message);
        setdata({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            profilePic: ""
        })

        navigate('/');
    }
    return (
        <div>
            <main className='h-[calc(100vh-110px)] bg-slate-200 flex justify-center items-center'>
                <div className='h-full md:max-h-min p-3 w-full md:max-w-md border rounded-lg bg-white shadow-md'>
                    <div className='h-32 '>
                        <div className='h-full w-32 rounded-full relative overflow-hidden block mx-auto'>
                            <img src={data.profilePic || profile} alt='...' className='h-full w-32 rounded-full' />
                            <label className='bg-slate-400 w-full h-[40%] absolute bottom-0 opacity-85 flex justify-center items-center cursor-pointer' htmlFor='fileInput'>Upload Pic</label>
                            <input type="file" className='hidden' id='fileInput' onChange={handlePhotoUpload} />
                        </div>
                    </div>
                    <form className='flex flex-col gap-3 w-full' onSubmit={handleSignUp}>

                        {/* ---Name--- */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' required
                                placeholder='Enter your Name...'
                                className='rounded-full px-3 py-2 text-base outline-none border-2 border-rose-500'
                                name="name"
                                id='name'
                                value={data.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/* ---Email--- */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='email'>Email Address:</label>
                            <input type='text' required
                                placeholder='Enter your email id...'
                                className='rounded-full px-3 py-2 text-base outline-none border-2 border-rose-500'
                                name="email"
                                id='email'
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* ---Password--- */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='password'>Password:</label>
                            <div className='flex items-center rounded-full pr-3 border-rose-500 border-2'>
                                <input type={showPassword ? "text" : "password"} required
                                    placeholder='Enter your password...'
                                    className=' rounded-full pl-3 py-2 text-base outline-none w-full'
                                    name="password"
                                    id='password'
                                    value={data.password}
                                    onChange={handleChange}
                                />
                                <div className='cursor-pointer text-lg' onClick={(e) => setShowPassword((prev) => !prev)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</div>
                            </div>
                        </div>
                        {/* ---Confirm Password--- */}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='confirmPassword'>Confirm Password:</label>
                            <div className='flex items-center rounded-full pr-3 border-rose-500 border-2'>
                                <input type={showConfirmPassword ? "text" : "password"} required
                                    placeholder='Confirm your password...'
                                    className='rounded-full pl-3 py-2 text-base outline-none w-full'
                                    name="confirmPassword"
                                    id='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleChange}
                                />
                                <div className='cursor-pointer text-lg' onClick={(e) => setShowConfirmPassword((prev) => !prev)}>{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</div>
                            </div>
                        </div>
                        
                        {/* ---error box--- */}
                        {error.code && <div className='text-red-600 px-2'>{`*${error.message}`}</div>}

                        {/* ---button--- */}
                        <div>
                            <button type='submit' className='block w-[70%] mx-auto px-3 py-2 bg-red-600 rounded-full text-white hover:scale-110 duration-300'>Sign Up</button>
                        </div>

                        <div className=''>Already have an account? <Link to='/login' className='text-red-600' >Log In</Link></div>

                    </form>
                </div>
            </main>
        </div>
    )
}

export default SignUp
