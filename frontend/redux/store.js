import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/userReducer'
import { updateUserReducer } from './reducer/updateUserReducer'
import { productReducer } from './reducer/productReducer'

export const store = configureStore({
    reducer: {
        user: userReeducer,
        updateUser: updateUserReducer,
        product: productReducer

    }
})


export const server = "https://ecommerce-reactnative-backend.onrender.com"
