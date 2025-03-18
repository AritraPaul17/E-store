import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CartProduct = ({ productId, carts, setCarts}) => {

    const [countProduct, setCountProduct] = useState(1)
    const [product, setProduct] = useState({})
    const [discount, setDiscount] = useState(0);
    const [image, setImage] = useState("")

    let price = countProduct * product.salePrice;

    const getProductDetails = async () => {
        const url = `http://localhost:5555/api/auth/products/catagory/${productId}`
        const res = await fetch(url);
        const response = await res.json();
        setProduct(response.data)
        setImage(response.data.productImage[0])
        const discountedPrice = response.data?.price - response.data?.salePrice
        const percantege = Math.floor((discountedPrice / response.data?.price) * 100);
        setDiscount(percantege)
    }

    const removeItem = async()=>{
        const url = `http://localhost:5555/api/auth/deletecart`
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authToken: localStorage.getItem('JWT')
            },
            body: JSON.stringify({
                productId
            }),
          })
        response = await response.json();
        if(!response.success){
            toast.error(response.message)
            return
        }
        let data =[]
        carts.forEach((ele) => {
            if(ele.productID!==productId){
                data.push(ele);
            }
        });
        setCarts(data);                        
        toast.success("Item removed")
    }

    const placeOrder = async ()=>{
        const url = `http://localhost:5555/api/auth/placeOrder`
        let response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authToken: localStorage.getItem('JWT')
            },
            body: JSON.stringify({
                productId,
                title:product.productName,
                countProduct,
                price,
                date:Date.now()
            }),
          })
        response = await response.json();
        if(!response.success){
            toast.error(response.message)
            return
        }
        removeItem();
        toast.success(response.message)
        console.log(product.productName);
        console.log(countProduct);
        console.log(price);
        
    }

    useEffect(() => {
        getProductDetails();
    }, [carts])

    return (
        <div className='mb-3'>
            <div className='bg-white w-full p-3 rounded-lg flex justify-between items-center'>
                <div className=''>
                    <img src={image} alt='product' className='h-36 w-20 block m-auto' />
                </div>

                <div>
                    <h1 className='text-xl font-bold'>{product.productName}</h1>
                    <h3>{product.productCategory}</h3>

                </div>
                <div>
                    <div className='flex gap-2 items-center mb-2'>
                        <div className=' text-xl line-through'>
                            ₹ {product?.price}/-
                        </div>
                        <div className='text-xl drop-shadow-3xl text-red-700 font-bold'>
                            - {discount}%
                        </div>

                    </div>
                    <div className='text-2xl drop-shadow-34l text-red-700'>
                        ₹ {product?.salePrice}/-
                    </div>
                </div>

                {/* count */}

                <div className='flex justify-center items-center gap-3 h-12'>
                    <button className='font-bold text-3xl border bg-green-500 text-white flex justify-center items-center w-8 h-12' onClick={()=>{setCountProduct(countProduct+1)}}>+</button>
                    <h3 className='text-3xl'>{countProduct}</h3>
                    <button className='font-bold text-3xl border bg-green-500 text-white flex justify-center items-center h-12 w-8' onClick={()=>{countProduct!==1 ? setCountProduct(countProduct-1) : setCountProduct(1)}}>-</button>
                </div>

                <div >
                    <h1 className='font-bold text-2xl'>Total Price -</h1>
                    <p className='font-bold text-2xl'>{price} /-</p>
                </div>
            </div>


            {/* ------place order / remove item------ */}
            <div className='pt-2 pb-2 pl-4 pr-4 bg-slate-600 flex justify-between'>
                <button className='p-2 text-base bg-red-400 hover:bg-red-600 hover:text-white font-bold rounded-md duration-300 ease-in' onClick={removeItem}>Remove Item</button>
                <button className='p-2 text-bold bg-green-400 hover:bg-green-600 hover:text-white font-bold rounded-md duration-300 ease-in hover:scale-110' onClick={placeOrder}>Place Order</button>
            </div>
        </div>
    )
}

export default CartProduct
