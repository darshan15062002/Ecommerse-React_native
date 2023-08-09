import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/userReducer'
import { updateUserReducer } from './reducer/updateUserReducer'
import { productReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'

export const store = configureStore({
    reducer: {
        user: userReeducer,
        updateUser: updateUserReducer,
        product: productReducer,
        cart: cartReducer

    }
})


export const server = "https://ecommerce-reactnative-backend.onrender.com"
