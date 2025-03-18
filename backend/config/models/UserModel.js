const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String
    },
    profilePic:String
},{
    timestamps:true
})

const User = new mongoose.model('user',UserSchema);

module.exports = User;