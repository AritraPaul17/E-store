const orderModel = require("../config/models/orderModel");
const User = require("../config/models/UserModel");

const placeOrder = async(req,res)=>{
    const tokenData = req.user;
    const {productId,title,countProduct,price,date} = req.body;
    // const userData = new User.findById(tokenData.id).select("-password");
    // if(!userData){
    //     return res.status(201).send({
    //         success: false,
    //         message: "Please login",
    //         data:{}
    //     })
    // }
    const resposne = await orderModel.find({userID:tokenData.id})
    if(resposne.length===0){
        try{
            let result = new orderModel({
                products : [{
                    productId,title,countProduct,price,date
                }],
                userID : tokenData.id,
            })
            result = await result.save();
            return res.status(201).send({
                success:true,
                message:"Order placed",
                data:result
            })
        }catch(e){
            return res.status(501).send({
                success:false,
                message:e.message,
                data:{}
            })
        }

    }
    else{
        try{
            let result = await orderModel.findOneAndUpdate({userID:tokenData.id},{
                $set: {
                  products: [...resposne[0].products,{productId,title,countProduct,price,date}]
                }
              });
            return res.status(201).send({
                success:true,
                message:"Order placed",
                data:result
            })
            
        }catch(e){
            return res.status(501).send({
                success:false,
                message:e.message,
                data:{}
            })
        }
    }
}
module.exports = placeOrder;