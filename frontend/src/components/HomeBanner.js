import React from 'react'
import image1 from '../images/assets/img1.webp'
import image2 from '../images/assets/img2.webp'
import image3 from '../images/assets/img3.jpg'

const HomeBanner = () => {
    return (
        <div className='px-2 md:px-5 py-2  h-56 md:h-96 w-full flex gap-2'>
            <div className='w-[50%] h-full rounded-md overflow-hidden'>
                <img src={image1} alt='...' className='h-full w-full' />
            </div>

            <div className='flex flex-col gap-2 h-full w-[50%]'>
                <div className='w-full h-[50%] rounded-md overflow-hidden'>
                    <img src={image2} alt='...' className='h-full w-full' />
                </div>
                <div className='w-full h-[50%] rounded-md overflow-hidden'>
                    <img src={image3} alt='...' className='h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
