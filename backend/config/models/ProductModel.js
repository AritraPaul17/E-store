const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    productCategory: String,
    productImage: Array,
    description: String,
    price: Number,
    salePrice: Number,
    featured: Boolean,
    special: Boolean
}, {
    timestamps: true
})

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;