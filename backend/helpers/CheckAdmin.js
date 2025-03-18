const User = require("../config/models/UserModel");

const checkAdmin = async(id)=>{
    const userData = await User.findById(id);
    if(userData.role === "GENERAL"){
        return false;
    }
    return true;
}

module.exports = checkAdmin;