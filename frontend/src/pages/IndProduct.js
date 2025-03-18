import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const IndProduct = () => {
    const [countProduct, setCountProduct] = useState(1)
    const [product, setProduct] = useState({})
    const [discount, setDiscount] = useState(0);
    const [image,setImage] = useState("")
    const [images,setImages] = useState([])

    const { id } = useParams();

    const navigate = useNavigate();

    const handleCart = async()=>{
        const url = `http://localhost:5555/api/auth/addcart/${id}`
        
        if(!localStorage.getItem("JWT")){
            navigate('/login');
            return;
        }
        
        const res = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authToken:localStorage.getItem('JWT')
            },
            body: JSON.stringify({
                productID: id
            }),
        })
        const response = await res.json();
        if(response.success)
            toast.success(response.message);
        else
            toast.error(response.message);
    }

    const productdetails = async () => {
        const url = `http://localhost:5555/api/auth/products/catagory/${id}`
        const res = await fetch(url);
        const response = await res.json();
        setProduct(response.data)
        setImage(response.data.productImage[0])
        setImages(response.data.productImage)
        const discountedPrice = response.data?.price - response.data?.salePrice
        const percantege = Math.floor((discountedPrice / response.data?.price) * 100);
        setDiscount(percantege)
    }

    const handleChangePhoto = (imgURL)=>{
        setImage(imgURL)
    }

    useEffect(() => {
        productdetails()
    }, [])

    return (
        <div className='w-full h-[calc(100vh-120px)] overflow-scroll flex flex-col md:flex-row p-3 item-center'>
                {/* box 1 */}
                <div className='h-full md:h-full w-full md:w-1/2 md:mr-4 mb-4 md:mb-0'>
                    <div className='h-4/6'>
                    {/* w-40 h-80 block m-auto */}
                        <img src={image} alt='image 1' className='min-h-[100px] max-h-[220px] md:max-h-[80%] max-w-72 mb-4 block mx-auto lg:max-w-80'/>
                    </div>
                    <div className='flex justify-evenly'>
                        {
                            images?.map((el,ind)=>{
                                return(
                                   <div key={ind} className='w-[20%] aspect-square cursor-pointer '>
                                     <img src={el} alt='...'  className='w-full h-full' onClick={()=>handleChangePhoto(el)}/>
                                     </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* box 2 */}
                <div className='w-full md:w-1/2 h-full'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl mb-4 font-bold'>{product.productName}</h1>
                    <div className='flex gap-2 items-center mb-2'>
                        <div className=' text-2xl line-through'>
                            ₹ {product?.price}/-
                        </div>
                        <div className='text-2xl md:text-4xl drop-shadow-3xl text-red-700'>
                            {discount}% Discount
                        </div>
                    </div>
                    <div className='text-4xl drop-shadow-34l text-red-700'>
                        ₹ {product?.salePrice}/-
                    </div>
                    {/* cart */}
                        
                        <div className='pt-3'>
                            <button className='bg-red-600 text-xl text-white font-semibold p-2 rounded-md'
                            onClick={handleCart}
                            >Add to cart</button>
                        </div>

                    <div className='pr-4 pt-3'>
                        <h1 className='text-xl font-bold mt-2'>Desciption :</h1>
                        <p className='text-lg'>
                            {product?.description}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default IndProduct
