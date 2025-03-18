import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({ product, category }) => {
    const [discount, setDiscount] = useState(0);
    const pricePercantage = () => {
        const discountedPrice = product.price - product.salePrice
        const percantege = Math.floor((discountedPrice / product.price) * 100);
        setDiscount(percantege)
    }

    useEffect(() => {
        pricePercantage();
    }, [])
    return (
        <Link to={`/products/category/${product._id}`} target='' className=' max-h-max pt-3 pb-2 md:p-3 w-56 min-h-max rounded-xl shadow-lg cursor-pointer'>
            <div className=' h-36 w-32 object-scale-down block mx-auto mb-1'>
                <img src={product?.productImage[0]} className='block mx-auto h-full' />
            </div>
            <div className='text-xl font-bold truncate  w-full'>
                {product?.productName}
            </div>
            <div className='flex gap-1 md:gap-2 items-center'>
                <div className=' text-base lg:text-lg line-through'>
                    ₹ {product?.price}/-
                </div>
                <div className='text-lg md:text-xl drop-shadow-2xl text-red-700 font-bold'>
                    - {discount}%
                </div>
            </div>
            <div className='text-2xl drop-shadow-2xl text-red-700'>
                ₹ {product?.salePrice}/-
            </div>
        </Link>
    )
}

export default ProductCard
