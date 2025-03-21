import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getproductsroute } from '../utils/apis';

const HomeFeatured = () => {

    const [specialProducts,setSpecialProducts] = useState([]);

    const getProducts = async()=>{
        const url = getproductsroute;
        const allProductsData = await fetch(url);
        const allProducts = await allProductsData.json();
        const arr = allProducts.data.filter((product)=>{
            return product.featured === true
        })
        setSpecialProducts(arr);
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className='px-3 my-3'>
        <h1 className='mb-3 text-3xl font-bold'>Our Featured Products</h1>
      <div className='flex overflow-x-scroll min-h-max w-full gap-4 p-3'>
        {specialProducts?.map((product,ind)=>{
            return (
                <ProductCard key={ind} product={product}/>
            )
        })}
      </div>
    </div>
  )
}

export default HomeFeatured
