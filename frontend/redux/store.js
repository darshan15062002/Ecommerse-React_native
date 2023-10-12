import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/userReducer'
import { updateUserReducer } from './reducer/updateUserReducer'
import { productReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'
import { languageReducer } from './reducer/languageReducer'


export const store = configureStore({
    reducer: {
        user: userReeducer,
        updateUser: updateUserReducer,
        product: productReducer,
        cart: cartReducer,
        appLanguage: languageReducer

    }
})


export const server = "https://ecommerce-reactnative-backend.onrender.com"
