const ProductModel = require("../config/models/ProductModel");

const productById = async (req, res) => {
    const { id } = req.params;
    try {
        const productDetails = await ProductModel.findById({ _id: id })
        res.status(201).send({
            success: true,
            message: "product found",
            data: productDetails
        })
    }catch(error){
        res.status(501).send({
            success: false,
            message: "product not found",
            data: id
        })
    }
}
module.exports = productById;