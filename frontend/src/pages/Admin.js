import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import AllProducts from '../components/AllProducts'

const Admin = () => {

    const [showUploadProduct,setShowUploadProduct] = useState(false)

  return (
    <div>
      <div>

        <div className='flex justify-between items-center border-1 border-black p-3'>
            <p>Add Product</p>
            <div className=' hover:bg-green-500 border-green-500 border-1 font-semibold hover:text-white text-md duration-500 rounded-md p-2 cursor-pointer' onClick={()=>setShowUploadProduct(true)}>Upload Product</div>
        </div>

      </div>

      {showUploadProduct && <UploadProduct onClose={()=>setShowUploadProduct(false)}/>}


      {/* show product */}
      <AllProducts/>
    </div>
  )
}

export default Admin
