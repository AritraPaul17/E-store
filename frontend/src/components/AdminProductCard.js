import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import UpdateProduct from './UpdateProduct';

const AdminProduct = ({ product,getProducts }) => {
    const [showUpdateProductPage, setShowUpdateProductPage] = useState(false)

    return (
        <div>
            <div className=' bg-white p-1 h-52 w-52'>
                <img src={product.productImage[0]} alt='...' className='h-32 w-32 block mx-auto' />
                <p className='text-base font-semibold'>{product.productName}</p>
                <p className='font-semibold'>Price:{product.salePrice}/-</p>
                <div className='flex justify-end'>
                    <FaEdit className='cursor-pointer' onClick={() => setShowUpdateProductPage(true)} />
                </div>
            </div>


            {showUpdateProductPage && <UpdateProduct product={product} getProducts={getProducts} onClose={() => setShowUpdateProductPage(false)} />}
        </div>
    )
}

export default AdminProduct
