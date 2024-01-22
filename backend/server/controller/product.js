import { asyncError } from "../middleWares/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/error.js";
import cloudinary from 'cloudinary'
import { getDataUri } from "../utils/features.js";
import { GoogleAuth } from "google-auth-library"
import { TextServiceClient } from "@google-ai/generativelanguage";

import { Category } from "../models/category.js";

export const getAllProducts = asyncError(async (req, res, next) => {

    // search product feature
    const { keyword, category } = req.query
    const products = await Product.find({
        name: {
            $regex: keyword ? keyword : "",
            $options: "i"
        },
        category: category ? category : undefined
    })

    res.status(200).json({
        success: true,
        products
    })
})

export const getProductDetails = asyncError(async (req, res, next) => {
    const products = await Product.findById(req.params.id).populate("category")
    // populating mean hay take the category id and use category model and give with product details

    if (!products) return next(new ErrorHandler("product not found", 404))

    res.status(200).json({
        success: true,
        products
    })
})

export const createProduct = asyncError(async (req, res, next) => {
    const { name, description, category, price, stock } = req.body;

    if (!req.file) return next(new ErrorHandler("Please add image", 400));

    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    const image = {
        public_id: myCloud.public_id,
        imgUrl: myCloud.secure_url,
    };

    const product = await Product.create({
        name,
        description,
        category,
        price,
        stock,
        images: [image],
    });

    res.status(200).json({
        success: true,
        message: "Product Created Successfully",
        product,
    });
});

export const deleteProduct = asyncError(async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product not found", 404));

    for (let index = 0; index < product.images.length; index++) {
        await cloudinary.v2.uploader.destroy(product.images[index].public_id);
    }

    await Product.deleteOne(product._id);
    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
    });
});
export const updateProduct = asyncError(async (req, res, next) => {
    const { name, description, category, price, stock } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product not found", 404));
    console.log(name, description, category, price, stock);
    if (name) product.name = name;
    if (description) product.description = description;
    if (category) product.category = category;
    if (price) product.price = price;
    if (stock) product.stock = stock;



    const result = await product.save();

    res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
        result
    });
});


export const addProductImage = asyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)


    if (!product) return next(new ErrorHandler("product not found", 404))
    if (!req.file) return next(new ErrorHandler("Please add image", 400));

    const file = getDataUri(req.file);
    const myCloud = await cloudinary.v2.uploader.upload(file.content);

    const image = {
        public_id: myCloud.public_id,
        imgUrl: myCloud.secure_url,
    };

    product.images.push(image)
    await product.save()


    res.status(200).json({
        success: true,
        message: "images added successsfully"
    })
})





export const deleteProductImage = asyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id)


    if (!product) return next(new ErrorHandler("product not found", 404))
    const id = req.query.id

    if (!id) return next(new ErrorHandler("id of image is not define", 404))

    let isExist = -1
    product.images.forEach((img, index) => {
        if (img._id.toString() === id.toString()) isExist = index
    })
    if (isExist > 0) return next(new ErrorHandler("image dosen't exist", 400))

    await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)

    product.images.splice(isExist, 1)

    await product.save()

    res.status(200).json({
        success: true,
        message: "image deleted successfully"
    })
})

export const addCategory = asyncError(async (req, res, next) => {

    await Category.create(req.body)

    res.status(200).json({
        success: true,
        message: "category added successfully"
    })

})
export const getAllCategory = asyncError(async (req, res, next) => {
    const categoryes = await Category.find({})

    res.status(200).json({
        success: true,
        categoryes
    })
})
export const deleteCategory = asyncError(async (req, res, next) => {
    const category = await Category.findById(req.params.id)
    if (!category) return next(new ErrorHandler("category not found", 404))

    const product = await Product.find({ category: category._id })
    if (!product) return next(new ErrorHandler("product not found", 404))

    for (let index = 0; index < product.length; index++) {
        product[index].category = undefined
        await product[index].save()
    }


    await Category.deleteOne(category._id)

    res.status(200).json({
        success: true,
        message: "category deleted successfully"
    })
})


export const getAllAdminProducts = asyncError(async (req, res, next) => {
    const products = await Product.find({}).populate("category")
    // populating mean hay take the category id and use category model and give with product details

    const outOfStock = product.filter((item, index) => { item.stock === 0 })

    res.status(200).json({
        success: true,
        products,
        outOfStock: outOfStock.length,
        instock: products.length - outOfStock.length
    })
})


export const getScript = asyncError(async (req, res, next) => {
    const productDescription = req.body.description;

    const MODEL_NAME = "models/text-bison-001";
    const API_KEY = process.env.API_KEY;
    const client = new TextServiceClient({
        authClient: new GoogleAuth().fromAPIKey(API_KEY),
    });

    const prompt = `Generate a script for a promotion a new product. The product is a  with the following key features: ${productDescription}. Emphasize its benefits and make the script engaging and informative. generate in way so that it directly use in with speak function`

    client
        .generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        })
        .then((result) => {
            const generatedText = result[0]?.candidates[0]?.output || "No output available";
            console.log(generatedText, "generated");

            res.status(200).json({
                sucsses: true,
                message: generatedText
            })
        })

})