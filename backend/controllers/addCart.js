const mongoose = require('mongoose');
const CartModel = require('../config/models/CartModel');
const ProductModel = require('../config/models/ProductModel');

const addCart = async (req,res)=>{
    const {id} = req.params;
    const tokenData = req.user;
    try{
        const product = await ProductModel.findById(id);
        const productData = await CartModel.findOne({productID:id,userID:tokenData.id});

        if (!productData) {
            const value = new CartModel({
                productID:id,
                userID:tokenData.id,
                price: product.salePrice,
                count:1
            })
            const result = await value.save();
            return res.status(201).send({
                success: true,
                message: "Product added to cart",
                data:result
            })
        }
        return res.status(201).send({
            success: true,
            message: "Product is already added",
            data: {}
        })
    }catch(error){
        return res.status(501).send({
            success:false,
            message:error.message,
            data:error
        })
    }
}

module.exports = addCart;