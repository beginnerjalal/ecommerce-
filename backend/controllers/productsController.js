const products = require('../model/productModel');
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler(async(req,res)=>{
    const prod = await products.find({})
    // throw new Error("some error ");
    res.json(prod);
});

const getProduct = asyncHandler(async(req,res)=>{
    const prod = await products.findById(req.params.id)
    if (prod) {
        res.json(prod);
    }else{
        console.log("404 not found",yellow.inverse);
    }
    
});

module.exports = {getProducts,getProduct}