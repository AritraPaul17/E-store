const CartModel = require('../config/models/CartModel');
const User = require("../config/models/UserModel");

const getCart = async (req,res)=>{
    const tokenData = req.user;
    const userData = await User.findById(tokenData.id).select("-password");
    if(!userData){
        return res.status(201).send({
            success: false,
            message: "Please login",
            data:{}
        })
    }
    let cartData = await CartModel.find({userID:tokenData.id})
    
    if(!cartData){
        return res.status(201).send({
            success: true,
            message: "Cart is empty",
            data:{}
        })
    }
    return res.status(201).send({
        success: true,
        message: "Cart sent",
        data: cartData
    })
}
module.exports = getCart;