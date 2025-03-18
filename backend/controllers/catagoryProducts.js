const ProductModel = require("../config/models/ProductModel");

const catagoryProducts = async (req,res)=>{
    const {catagory} = req.params;

    const allProducts = await ProductModel.find({productCategory:catagory})
    res.send(allProducts)
}
module.exports = catagoryProducts;