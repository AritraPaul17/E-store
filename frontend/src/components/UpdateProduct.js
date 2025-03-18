import React, { useState } from 'react'
import productCategory from '../helpers/ProductCategory'
import UploadImageCloudinary from '../helpers/UploadImage'
import { toast } from 'react-toastify'

const UpdateProduct = ({onClose,product, getProducts}) => {

    const [data, setData] = useState({
        productName: product.productName,
        brandName: product.brandName,
        productCategory: product.productCategory,
        productImage: [...product.productImage],
        description: product.description,
        price: product.price,
        salePrice: product.salePrice
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        const response = await UploadImageCloudinary(file);
        setData((prev) => {
            return {
                ...prev,
                productImage: [...data.productImage, response.url]
            }
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const url = "http://localhost:5555/api/auth/updateproduct";

        const response = await fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                authToken:localStorage.getItem('JWT')
            },
            body: JSON.stringify({
                productId:product._id,
                productDetails:data
            }),
        })
        const res = await response.json();
        if(!res.success){
            toast.error(response.message);
            return
        }
        toast.success(res.message)
        getProducts();
    }

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-slate-300 flex justify-center items-center'>
            <div className='w-full md:w-[65%] h-full md:h-[80%] bg-white px-2 py-3 rounded-lg overflow-hidden'>

                <div className='flex justify-between items-center py-1 px-3 border-2 border-gray-400'>
                    <p className='text-lg'>Update Product</p>
                    <span onClick={onClose} className='cursor-pointer font-bold text-lg p-2 rounded-lg bg-red-600 text-white'>X</span>
                </div>

                {/* Upload form */}
                <form className='h-full p-4 grid gap-2 overflow-y-scroll' onSubmit={handleSubmit}>

                    {/* Product Name  */}
                    <label htmlFor='productName' className='text-lg font-semibold'>Product Name : </label>
                    <input type='text' placeholder='Enter Product Name' id='productName' required
                        className='p-2 rounded-md bg-slate-200'
                        name='productName'
                        value={data.productName}
                        onChange={handleChange}
                    />

                    {/* Brand Name */}
                    <label htmlFor='brandName' className='text-lg font-semibold'>Brand Name : </label>
                    <input type='text' placeholder='Enter Brand Name' id='brandName' required
                        className='p-2 rounded-md bg-slate-200'
                        name='brandName'
                        value={data.brandName}
                        onChange={handleChange}
                    />

                    {/* Product Category */}
                    <label htmlFor='productCategory' className='text-lg font-semibold'>Product Category : </label>
                    <select id='productCategory' className='p-1 border'
                        name='productCategory'
                        value={data.productCategory}
                        onChange={handleChange}
                    >
                        {
                            productCategory.map((data) => {
                                return <option key={data.id} value={data.value}>{data.category}</option>
                            })
                        }
                    </select>

                    {/* Product Image */}

                    <h3 className='text-lg font-semibold'>Product Image : </h3>
                    <label htmlFor='productImage' className='text-lg font-semibold'>
                        <div className='h-44 border bg-slate-300 flex flex-col items-center justify-center cursor-pointer'>
                            <p>Upload Product Image</p>
                            <input type='file' className='hidden' id='productImage' name='productImage'
                                onChange={handlePhotoUpload}
                            />
                        </div>
                    </label>
                    <div className='flex items-center gap-2'>
                        {data?.productImage[0] ? data.productImage.map((url, ind) => {
                            return <div key={ind}>
                                <img src={url} alt='...' width={100} height={100} />
                            </div>
                        })
                            : <p className='text-red-600'>*Please upload product images</p>}
                    </div>



                    {/* Description */}

                    <label htmlFor='description' className='text-lg font-semibold'>Description : </label>
                    <textarea placeholder='Enter product description' id='description' required
                        className='p-2 rounded-md bg-slate-200 h-36'
                        name='description'
                        value={data.description}
                        onChange={handleChange}
                    >
                    </textarea>
                    {/* Price */}

                    <label htmlFor='price' className='text-lg font-semibold'>Price : </label>
                    <input type='number' placeholder='Enter Price' id='price' required
                        className='p-2 rounded-md bg-slate-200'
                        name='price'
                        value={data.price}
                        onChange={handleChange}
                    />

                    {/* Sale Price */}

                    <label htmlFor='salePrice' className='text-lg font-semibold'>Sale Price : </label>
                    <input type='number' placeholder='Enter Sale Price' id='salePrice' required
                        className='p-2 rounded-md bg-slate-200'
                        name='salePrice'
                        value={data.salePrice}
                        onChange={handleChange}
                    />

                    <button type='submit' className='text-white bg-blue-700 mb-10 p-2 text-lg hover:bg-blue-800 font-mono font-semibold'>Update</button>

                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
