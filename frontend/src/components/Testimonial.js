import React from 'react'
import fastDelivary from '../images/testimonial/fast_delivary.avif'
import qualityProduct from '../images/testimonial/quality_product.avif'

const Testimonial = () => {
    return (
        <div className='w-full p-4 md:p-3 '>
            {/* box 1 */}
            <div className='w-full flex md:flex-row flex-col gap-1 md:gap-3 items-center md:justify-around pt-2 pb-2'>
                <div className='w-full md:w-1/2'>
                    <img src={fastDelivary} alt='fast delicary' className='w-full max-h-72 md:mx-auto md:w-[75%]' />
                </div>
                <div className='w-full md:w-1/2 text-justify'>
                    <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                </div>
            </div>

            {/* box 2 */}
            <div className='w-full flex md:flex-row flex-col gap-1 md:gap-3 items-center pt-2 pb-2'>
                <div className='w-full md:w-1/2'>
                    <img src={qualityProduct} alt='quality Product' className='w-full max-h-72 md:mx-auto md:w-[75%]' />
                </div>
                <div className='w-full md:w-1/2 text-justify'>
                    <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
                </div>
            </div>
        </div>

    )
}

export default Testimonial
