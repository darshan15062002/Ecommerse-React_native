import express from "express";
import {


    addCategory,
    addProductImage,
    createProduct,

    deleteCategory,

    deleteProduct,

    deleteProductImage,

    getAllAdminProducts,

    getAllCategory,

    getAllProducts,
    getProductDetails,
    getScript,
    updateProduct,
} from "../controller/product.js";
import { isAuthenticated, isAdmin } from "../middleWares/auth.js";
import { singleUpload } from "../middleWares/multer.js"

const router = express.Router();

router.get("/all", getAllProducts)

router.get("/admin", isAuthenticated, isAdmin, getAllAdminProducts)

router.route("/single/:id").get(getProductDetails).put(isAuthenticated, isAdmin, updateProduct).delete(isAuthenticated, isAdmin, deleteProduct)
router.post("/new", isAuthenticated, isAdmin, singleUpload, createProduct)

router.route("/images/:id").post(isAuthenticated, isAdmin, singleUpload, addProductImage).delete(isAuthenticated, isAdmin, deleteProductImage)

router.post("/category", isAuthenticated, isAdmin, addCategory)
router.post("/script", getScript)

router.get("/categoryes", getAllCategory)
router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory)




export default router;
