import express from 'express'
import { createOrder, getAdminOrders, getMyOrders, getOrderDetails, proccessOrder, processPayment } from '../controller/order.js'
import { isAdmin, isAuthenticated } from '../middleWares/auth.js'


const router = express.Router()

router.post("/new", isAuthenticated, createOrder)

router.get("/my", isAuthenticated, getMyOrders)
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders)
router.route("/single/:id").get(isAuthenticated, getOrderDetails).put(isAuthenticated, isAdmin, proccessOrder)

router.post("/payment", isAuthenticated, processPayment)

export default router