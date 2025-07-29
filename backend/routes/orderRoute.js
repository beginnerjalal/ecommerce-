const express = require('express');
const {addOrderItem, getOrderById} = require('../controllers/orderController');
const {protect} = require('../middlewares/authMiddelware');
const router = express.Router();

// create new order 

router.route('/').post(protect,addOrderItem);


//getOrderById

router.route("/:id").get(protect,getOrderById)

module.exports = router;