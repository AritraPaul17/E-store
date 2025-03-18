import React from 'react'
import { Link } from 'react-router-dom'

import mobiles from '../images/mobiles.jpg'
import earbuds from '../images/earbuds.jpg'
import watch from '../images/watch.webp'
import camera from '../images/camera.jpg'
import mouse from '../images/mouse.jpg'
import processor from '../images/processor.webp'
import printer from '../images/printer.jpg'
import refrigerator from '../images/refrigerator.webp'
import tv from '../images/tv.jpg'

const Header = () => {
    return (
        <div className='w-full h-28 flex justify-center'>
            <div className='w-[90%] flex items-center justify-around gap-6 px-3 overflow-x-auto rounded-md' >


                <Link to={"/products/mobile"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={mobiles} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Mobiles</p>
                </Link>
                <Link to={"/products/laptop"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={watch} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Watch</p>
                </Link>
                <Link to={"/products/earbud"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={earbuds} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Earbud</p>
                </Link>
                <Link to={"/products/Printer"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={printer} alt='...' className='h-16 w-16 rounded-full' />
                    <p className='text-ellipsis'>Printer</p>
                </Link>
                <Link to={"/products/Camera"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={camera} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Camera</p>
                </Link>
                <Link to={"/products/Refrigerator"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={refrigerator} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Refrigerator</p>
                </Link>
                <Link to={"/products/TV"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={tv} alt='...' className='h-16 w-16 rounded-full' />
                    <p>TV</p>
                </Link>
                <Link to={"/products/Processor"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={processor} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Processor</p>
                </Link>
                <Link to={"/products/Mouse"} className='flex flex-col justify-center items-center cursor-pointer'>
                    <img src={mouse} alt='...' className='h-16 w-16 rounded-full' />
                    <p>Mouse</p>
                </Link>

            </div>

            <div>

            </div>
        </div>
    )
}

export default Header
