const orderModel = require("../config/models/orderModel");
const User = require("../config/models/UserModel");

const getOrders = async(req,res)=>{
    const tokenData = req.user;
    // const userData = new User.findById(tokenData.id).select("-password");
    // if(!userData){
    //     return res.status(201).send({
    //         success: false,
    //         message: "Please login",
    //         data:{}
    //     })
    // }
    try{
        const result = await orderModel.find({userID:tokenData.id});
        if(result.length===0){
            return res.status(201).send({
                success: true,
                message: "No order to show",
                data:[]
            })
        }
        return res.status(201).send({
            success: true,
            message: "okay",
            data:result
        })
    }catch(e){
        return res.status(501).send({
            success: false,
            message: "Internal error occured.",
            data:e
        })
    }
}
module.exports = getOrders;