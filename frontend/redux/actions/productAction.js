import axios from "axios"
import { server } from "../store"



export const getAllProduct = (keyword, category) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductRequest",

        })

        // Axios
        const { data } = await axios.get(`${server}/api/v1/product/all?keyword=${keyword}&category=${category}`, {

            "withCredentials": true
        })

        dispatch({
            type: "getAllProductSuccess",
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: "getAllProductFailed",
            payload: error.response.data.message
        })
    }
}


export const getAllAdminProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllAdminProductRequest",

        })

        // Axios
        const { data } = await axios.get(`${server}/api/v1/product/admin`, {

            "withCredentials": true
        })

        dispatch({
            type: "getAllAdminProductSuccess",
            payload: data.products
        })
    } catch (error) {
        dispatch({
            type: "getAllAdminProductFailed",
            payload: error.response.data.message
        })
    }
}


export const getProductDetails = (id) => async (dispatch) => {
    console.log(id, "found product");
    try {
        dispatch({
            type: "getProductDetaileRequest",

        })

        // Axios
        const { data } = await axios.get(`${server}/api/v1/product/single/${id}`, {
            "withCredentials": true
        })

        console.log(data, "found product");
        dispatch({
            type: "getProductDetaileSuccess",
            payload: data.products
        })

    } catch (error) {
        console.log(error.response.data.message, "found product");
        dispatch({
            type: "getProductDetaileFailed",
            payload: error.response.data.message
        })
    }
}
