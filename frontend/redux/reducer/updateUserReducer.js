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
    })


    builder.addCase("clearError", (state) => {

        state.error = null;
    })
    builder.addCase("clearMessage", (state) => {

        state.message = null;
    })

})