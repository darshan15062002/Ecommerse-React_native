import { asyncError } from '../middleWares/error.js'
import { Product } from '../models/product.js'
import { Order } from "../models/order.js"
import ErrorHandler from '../utils/error.js'
import { stripe } from '../../server.js'

export const createOrder = asyncError(async (req, res, next) => {
    const { shippingInfo, orderItems, paymentMethod, paymentInfo, itemsPrice, taxPrice, shippingCharges, totleAmount } = req.body

    await Order.create({
        user: req.user._id,
        shippingInfo,
        orderItems,
        paymentMethod,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totleAmount
    })

    for (let index = 0; index < orderItems.length; index++) {
        const product = await Product.findById(orderItems[index].product)
        product.stock -= orderItems[index].quntity
        await product.save()
    }

    res.status(200).json({
        success: true,
        message: 'order placed sucessfully'
    })


})

export const getMyOrders = asyncError(async (req, res, next) => {
    const order = await Order.find({ user: req.user._id })

    res.status(200).json({
        success: true,
        order
    })

})
export const getAdminOrders = asyncError(async (req, res, next) => {
    const order = await Order.find({})

    res.status(200).json({
        success: true,
        order
    })

})
export const getOrderDetails = asyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id)

    if (!order) return next(new ErrorHandler("order not found", "404"))

    res.status(200).json({
        success: true,
        order
    })

})
export const proccessOrder = asyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id)
    if (!order) return next(new ErrorHandler("order not found", "404"))

    if (order.orderStatus === "Preparing") {
        order.orderStatus = "Shipped"
    }
    else if (order.orderStatus === "Shipped") {
        order.orderStatus = "Delivered"
        order.deliveredAt = new Date(Date.now())
    }
    else {
        next(new ErrorHandler("Order already deliver", 400))
    }

    await order.save()
    res.status(200).json({
        success: true,
        message: "order processed successfully"
    })

})


export const processPayment = asyncError(async (req, res, next) => {
    const { totalAmount } = req.body;

    const { client_secret } = await stripe.paymentIntents.create({
        amount: Number(totalAmount * 100),
        currency: "inr",
    });

    res.status(200).json({
        success: true,
        client_secret,
    });
});