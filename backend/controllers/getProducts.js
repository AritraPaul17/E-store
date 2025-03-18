const ProductModel = require("../config/models/ProductModel")

const getProducts = async(req,res)=>{
    try{
        const allProducts = await ProductModel.find();
        return res.status(201).send({
            success: true,
            message: "product is sent",
            data: allProducts
        })
    }catch (error) {
        return res.status(501).send({
            success: false,
            message: error.message,
            data: error
        })
    }

}

module.exports = getProducts;