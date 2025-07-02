import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { getproductsroute } from '../utils/apis';
import SpinnerLoader from '../helpers/SpinnerLoader';

const HomeSpecial = () => {

  const [specialProducts, setSpecialProducts] = useState([]);
  const [isFetchingDetails, setIsFetchingDetails] = useState(true);

  const getProducts = async () => {
    const url = getproductsroute;
    setIsFetchingDetails(true)
    const allProductsData = await fetch(url);
    const allProducts = await allProductsData.json();
    const arr = allProducts?.data?.filter((product) => {
      return product.special === true
    })
    setSpecialProducts(arr);
    setIsFetchingDetails(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className='px-3 my-3'>
      <h1 className='mb-3 text-3xl font-bold'>Our Special Products</h1>
      {/* flex md:justify-stretch justify-center flex-wrap gap-2 md:gap-5 */}
      {isFetchingDetails ? <SpinnerLoader /> :
        <div className='flex overflow-x-scroll min-h-max w-full gap-4 p-3'>
          {specialProducts?.map((product, ind) => {
            return (
              <ProductCard key={ind} product={product} />
            )
          })}
        </div>}
    </div>
  )
}

export default HomeSpecial
