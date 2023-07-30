import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/userReducer'
import { updateUserReducer } from './reducer/updateUserReducer'

export const store = configureStore({
    reducer: {
        user: userReeducer,
        updateUser: updateUserReducer

    }
})


export const server = "https://ecommerce-reactnative-backend.onrender.com"
