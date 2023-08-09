import { createReducer } from "@reduxjs/toolkit";


export const productReducer = createReducer({
    products: [],
    product: {}
}, (builder) => {


    builder.addCase("getAllProductRequest", (state) => {

        state.loading = true
    }).addCase("getAllAdminProductRequest", (state) => {
        state.loading = true
    }).addCase("getProductDetaileRequest", (state) => {
        state.loading = true
    })



    builder.addCase("getAllProductSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload
        // console.log(state.products, "available product");

    }).addCase("getAllAdminProductSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload.Products
        state.inStock = action.payload.inStock
        state.outOfStock = action.payload.outOfStock

    }).addCase("getProductDetaileSuccess", (state, action) => {
        state.loading = false
        state.product = action.payload
    })



    builder.addCase("getAllProductFailed", (state, action) => {
        state.loading = false
        state.error = action.payload

    }).addCase("getAllAdminProductFailed", (state, action) => {
        state.loading = false
        state.error = action.payload

    }).addCase("getProductDetaileFailed", (state, action) => {
        loading = false
        state.error = action.payload

    })



})