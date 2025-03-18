const mongoose = require('mongoose');

const connectToMongo =()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("connnected to mongodb")
    }).catch(err =>{
        console.log(err)
    })
}


module.exports = connectToMongo