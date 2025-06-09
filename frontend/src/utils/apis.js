const port = "http://localhost:5555/api/auth";

export const productdetailsroute = `${port}/products/catagory/`;
export const getproductsroute = `${port}/getproducts`;
export const loginroute = `${port}/login`;
export const registerroute = `${port}/signup`;
export const getuserroute = `${port}/getuser`;
export const productsroute = `${port}/products/`;

//cart related
export const addcartroute = `${port}/addcart/`;
export const getcartroute = `${port}/getcart`;
export const deletecartroute = `${port}/deletecart`;

//admin related
export const adminuploadproductsroute = `${port}/uploadproducts`
export const adminupdateproductsroute = `${port}/updateproduct`
//order related
export const getordersroute = `${port}/getOrders`;
export const placeorderroute = `${port}/placeOrder`;
// export const getordersroute = `${port}/getOrders`;
