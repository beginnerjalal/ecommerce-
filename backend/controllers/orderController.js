const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel');

const addOrderItem = asyncHandler(async (req, res)=>{
    const {orderItems,shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice,totalPrice} = req.body;

    if(orderItems && orderItems.length === 0 ){
        res.status(400);
         throw new Error('No order found');
         return
    }else{
        const order = new Order({
            orderItems,
            user:req.user.id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
})


// get order by ID 
const getOrderById = asyncHandler(async (req,res)=>{
    const order  = await Order.findById(req.params.id).populate("User","name email")
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error("order not found")
    }
})
module.exports = {addOrderItem, getOrderById}