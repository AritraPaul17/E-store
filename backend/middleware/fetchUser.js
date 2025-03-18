const jwt = require('jsonwebtoken')

const fetchUser = (req,res,next)=>{
    const authToken = req.header("authToken");
    if(!authToken){
        return res.status(200).send({
            success:false,
            message:"User is not logged in",
            data:{}
        })
    }
    try{
        const tokenData = jwt.verify(authToken,process.env.JWT_SECRET_KEY);
        req.user = tokenData;
        next();
    }catch(error){
        return res.status(401).send({
            success:false,
            message:"Please login",
            data:{}
        })
    }
}

module.exports = fetchUser;