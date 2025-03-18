const express = require('express');
const router = express.Router();

const signUp = require('../controllers/signUp')
const signIn = require('../controllers/signIn');
const fetchUser = require('../middleware/fetchUser');
const getUser = require('../controllers/getUser');
const uploadProduct = require('../controllers/uploadProduct');
const getProducts = require('../controllers/getProducts');
const updateProduct = require('../controllers/updateProduct');
const catagoryProducts = require('../controllers/catagoryProducts');
const productById = require('../controllers/productById');
const addCart = require('../controllers/addCart');
const getCart = require('../controllers/getCart');
const deleteCart = require('../controllers/deleteCart');
const placeOrder = require('../controllers/placeOrder');
const getOrders = require('../controllers/getOrders');

//http://localhost:5555/api/auth/signup - no login required
router.post('/signup',signUp)
//http://localhost:5555/api/auth/login - no login required
router.post('/login',signIn)
//http://localhost:5555/api/auth/getuser  - login required
router.get('/getuser',fetchUser,getUser)

//cart related
//http://localhost:5555/api/auth/addcart/:id  - login required
router.post("/addcart/:id",fetchUser,addCart)
//http://localhost:5555/api/auth/getcart  - login required
router.get("/getcart",fetchUser,getCart)
//http://localhost:5555/api/auth/deletecart  - login required
router.delete("/deletecart",fetchUser,deleteCart)

//product related

//http://localhost:5555/api/auth/uploadproducts  - login required
router.post('/uploadproducts',fetchUser,uploadProduct)
//http://localhost:5555/api/auth/updateproduct  - login required
router.post('/updateproduct',fetchUser,updateProduct)
//http://localhost:5555/api/auth/getproducts  - no login required
router.get('/getproducts',getProducts)
//http://localhost:5555/api/auth/products/:catagory  - no login required
router.get('/products/:catagory',catagoryProducts)
//http://localhost:5555/api/auth/products/catagory/:id  - no login required
router.get('/products/catagory/:id',productById)
module.exports = router;

//order related
// http://localhost:5555/api/auth/getOrders
router.get("/getOrders",fetchUser,getOrders)
// http://localhost:5555/api/auth/placeOrder
router.post("/placeOrder",fetchUser,placeOrder)