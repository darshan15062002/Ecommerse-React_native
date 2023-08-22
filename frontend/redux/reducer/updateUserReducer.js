import { createReducer } from '@reduxjs/toolkit'

export const updateUserReducer = createReducer({}, (builder) => {
    builder.addCase('updatePasswordRequest', (state) => {
        state.loading = true
    }).addCase('updateProfileRequest', (state) => {
        state.loading = true
    }).addCase('updateProfilePicRequest', (state) => {
        state.loading = true
    }).addCase('placeOrderRequest', (state) => {
        state.loading = true
    }).addCase('processOrderRequest', (state) => {
        state.loading = true
    }).addCase('newProductRequest', (state) => {
        state.loading = true
    }).addCase('updateProductRequest', (state) => {
        state.loading = true
    })
        .addCase('addCategoryRequest', (state) => {
            state.loading = true
        }).addCase('deleteCategoryRequest', (state) => {
            state.loading = true
        })

    builder.addCase('updatePasswordSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('updateProfileSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('updateProfilePicSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('placeOrderSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('processOrderSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('newProductSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('updateProductSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('addCategorySuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }).addCase('deleteCategorySuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    })


    builder.addCase('updatePasswordFailed', (state, action) => {
        state.loading = false
        state.error = action.payload
    }).addCase('updateProfileFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('updateProfilePicFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('placeOrderFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('processOrderFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('newProductFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('updateProductFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('addCategoryFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    }).addCase('deleteCategoryFailed', (state, action) => {
        state.loading = false;
        state.error = action.payload
    })


    builder.addCase("clearError", (state) => {

        state.error = null;
    })
    builder.addCase("clearMessage", (state) => {

        state.message = null;
    })

})