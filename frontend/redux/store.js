import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/userReducer'

export const store = configureStore({
    reducer: {
        user: userReeducer,

    }
})


export const server = "https://ecommerce-reactnative-backend.onrender.com"
