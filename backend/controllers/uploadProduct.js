const ProductModel = require("../config/models/ProductModel");
const checkAdmin = require("../helpers/CheckAdmin");

const uploadProduct = async (req, res) => {
    try {
        const tokenData = req.user;
        const isAdmin = checkAdmin(tokenData.id);
        if(!isAdmin){
            return res.status(401).send({
                success: false,
                message: "You are not admin",
                data: {}
            })
        }
        const product = new ProductModel({
            ...req.body,
            featured: false,
            special: false
        })
        const response = await product.save();
        return res.status(201).send({
            success: true,
            message: "Product is uploaded",
            data: response
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            message: error.message,
            data: error
        })
    }
}

module.exports = uploadProduct;