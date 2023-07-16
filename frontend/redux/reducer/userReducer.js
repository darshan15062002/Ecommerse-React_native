import { createReducer } from "@reduxjs/toolkit";

export const userReeducer = createReducer({}, (builder) => {
    builder.addCase("loginRequest", (state) => {
        state.loading = true
    }).addCase("loadUserRequest", (state) => {
        state.loading = true
    }).addCase("logoutRequest", (state) => {
        state.loading = true
    }).addCase("registerRequest", (state) => {
        state.loading = true
    })

    builder.addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
    }).addCase("loadUserSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    }).addCase("logoutSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message = action.payload;
        state.user = null;
    }).addCase("registerSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
    })

    builder.addCase("loginFailed", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    }).addCase("loadUserFailed", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    }).addCase("logoutFailed", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    }).addCase("registerFailed", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    })


    builder.addCase("clearError", (state) => {

        state.error = null;
    })
    builder.addCase("clearMessage", (state) => {

        state.message = null;
    })
})