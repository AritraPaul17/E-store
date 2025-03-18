const mongoose = require('mongoose')

const User = require("../config/models/UserModel");

const getUser = async (req, res) => {
    const tokenData = req.user;
    try{
        const userData = await User.findById(tokenData.id).select("-password");
        if (!userData) {
            return res.status(201).send({
                success: false,
                message: "Please login",
                data:{}
            })
        }
        return res.status(201).send({
            success: true,
            message: "User is already logged in",
            data: userData
        })
    }catch(error){
        return res.status(501).send({
            success:false,
            message:error.message,
            data:error
        })
    }
}

module.exports = getUser;