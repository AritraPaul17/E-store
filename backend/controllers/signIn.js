const User = require("../config/models/UserModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        //finding user
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(401).send({
                success: false,
                message: "Invalid login credentials"
            })
        }

        let checkPassword = await bcryptjs.compare(password, userData.password);
        if (!checkPassword) {
            return res.status(401).send({
                success: false,
                message: "Invalid login credentials."
            })
        }
        const tokenData = {
            id: userData._id,
            email: userData.email
        }
        const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY)
        return res.status(201).send({
            success: true,
            message: " Login Successfull",
            data: userData,
            authToken:jwtToken
        })
    }catch(error){
        return res.status(501).send({
            success:false,
            message:error.message,
            data:error
        })
    }
}

module.exports = signIn;