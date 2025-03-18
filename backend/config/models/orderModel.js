const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    products :{
        type:Array
    },
    userID : {
        type : String
    },
    date:{
        type : String
    }
})

const orderModel = mongoose.model("order",orderSchema);

module.exports = orderModel;