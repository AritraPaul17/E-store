const CartModel = require('../config/models/CartModel');
const User = require("../config/models/UserModel");

const deleteCart = async (req,res)=>{
    const tokenData = req.user;
    const productId = req.body.productId
    const userData = await User.findById(tokenData.id).select("-password");
    if(!userData){
        return res.status(201).send({
            success: false,
            message: "Please login",
            data:{}
        })
    }
    try{
        let cartData = await CartModel.findOneAndDelete({userID:tokenData.id,productID:productId}) 
        if(cartData){
            return res.status(201).send({
                success: true,
                message: "Remove Item",
                data: cartData
            })
        }
        else{
            return res.status(201).send({
                success: false,
                message: "No Item found",
                data: cartData
            })
        }
        
    }catch(e){
        return res.status(501).send({
            success:false,
            message:"Internal error occured",
            data:e
        })
    }
}
module.exports = deleteCart;