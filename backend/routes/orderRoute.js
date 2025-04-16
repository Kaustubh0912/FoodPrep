const express = require('express')
const orderRouter = express.Router();
const { placeOrder,verifyOrder,userOrder } = require('../controllers/orderController')
const authMiddleware = require('../middlewares/auth')

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.get("/userOrder",userOrder)

module.exports = orderRouter