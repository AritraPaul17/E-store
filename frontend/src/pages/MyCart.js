import React, { useEffect, useState } from 'react'
import CartProduct from '../components/CartProduct';
import { useLocation } from 'react-router-dom';
import { getcartroute } from '../utils/apis';

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const loc = useLocation();

  const getCart = async () => {
    const url = `${getcartroute}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem('JWT')
      }
    })
    const response = await res.json();        
    setCarts(response.data);
  }

  useEffect(() => {    
    getCart();
  }, [])
  
  return (
    <div className='relative w-full'>

      <div className='w-full h-[610px] p-4 overflow-y-scroll'>
        {carts.length === 0 ? <div className='flex justify-center items-center h-full'>
            <h1 className='text-5xl font-bold'>Your cart is empty</h1>
          </div>
          :
          carts?.map((product, ind) => {
          return <>
            
            <CartProduct productId={product.productID} count={product.count} key={ind} carts={carts} setCarts={setCarts} />

          </>
        })          
        }
        
      </div>
    </div>
  )
}

export default MyCart
