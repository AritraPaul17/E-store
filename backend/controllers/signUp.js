const User = require("../config/models/UserModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
    try {
        const { name, email, password, profilePic } = req.body;

        // checking name
        if (name.length < 3) {
            return res.status(401).send({
                success: false,
                error: true,
                message:"Name length should be atleast 3",
                data: {}
            })
        }
        // checking email
        if (email === null || email === "") {
            return res.status(401).send({
                success: false,
                error: true,
                message:"Enter a valid Email",
                data: {}
            })
        }
        // checking password
        if (password.length < 4) {
            return res.status(401).send({
                success: false,
                error: true,
                message:"Password length should be atleast 4",
                data: {}
            })
        }
        let user = await User.findOne({email});
        if(user){
            return res.status(401).send({
                success: false,
                error: true,
                message:"Enter valid email",
                data:{}
            })
        }
        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const userData = new User({
            name,
            email,
            password:hashPassword,
            role:"GENERAL",
            profilePic
        })
        const data = await userData.save();
        const tokenData = {
            id: data._id,
            email: data.email
        }
        const jwtToken = jwt.sign(tokenData, process.env.JWT_SECRET_KEY)

        return res.status(201).send(
            {
                success: true,
                message:"Sign Up successfull.",
                data,
                authToken:jwtToken
            }
        )
    } catch (error) {
        return res.status(501).send({
            success: false,
            message:error.message,
            data:error
        })
    }
}

module.exports = signUp;