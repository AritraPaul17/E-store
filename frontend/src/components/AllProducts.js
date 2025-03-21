import React, { useEffect, useState } from 'react'
import AdminProductCard from './AdminProductCard';
import { getproductsroute } from '../utils/apis';

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    const getProducts = async()=>{
        const url = getproductsroute;
        const allProductsData = await fetch(url);
        const allProducts = await allProductsData.json();
        setProducts([...allProducts.data]);
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div className=' bg-slate-200'>
        <div className=' flex flex-wrap items-center justify-around gap-2 p-3'>
            {
                products?.map((product,ind)=>{
                    return <AdminProductCard key={ind} getProducts={getProducts} product={product}/>
                })
            }
        </div>
      
    </div>
  )
}

export default AllProducts
