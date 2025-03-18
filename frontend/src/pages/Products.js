import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { category } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [paramCategory, setParamCategory] = useState("");

  const searchProducts = async () => {
    const cat = category.substring(0, 1).toUpperCase() + category.substring(1);
    setParamCategory(cat)
    const url = `http://localhost:5555/api/auth/products/${cat}`;
    const res = await fetch(url);
    const response = await res.json();
    setAllProducts([...response]);
  }

  useEffect(() => {
    searchProducts();
  }, [])
  return (
    <div className='h-[calc(100vh-120px)]'>
      <div className='flex h-full  w-full'>

        {/* <div className='bg-slate-300 h-full w-80'>
          
        </div> */}

        <div className='p-3 h-full w-full overflow-y-scroll flex gap-4 flex-wrap '>
          {allProducts ? allProducts.map((product,ind) => {
            return <ProductCard key={ind} product={product} category={paramCategory}/>
          })
            : <h1>Product is not found</h1>}
        </div>

      </div>

    </div>
  )
}

export default Products
