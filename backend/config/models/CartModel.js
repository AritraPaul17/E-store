const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    productID :{
        type:String
    },
    userID : {
        type : String
    },
    price: Number,
    count: Number
})

const CarttModel = mongoose.model("cart",CartSchema);

module.exports = CarttModel;