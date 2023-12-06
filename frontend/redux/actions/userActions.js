import axios from "axios"
import { server } from "../store"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest",

        })

        // Axios
        await axios.post(`${server}/api/v1/user/login`, {
            email, password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })

        dispatch({
            type: "loginSuccess",
            payload: "Welcome Back"
        })
    } catch (error) {
        dispatch({
            type: "loginFailed",
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",

        })

        // Axios
        const { data } = await axios.get(`${server}/api/v1/user/me`, {
            "withCredentials": true
        })

        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "loadUserFailed",
            payload: error.response.data.message
        })
    }

}
export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest",
        })

        // Axios
        const { data } = await axios.get(`${server}/api/v1/user/logout`, {
            "withCredentials": true
        })
        console.log(data.message);
        dispatch({
            type: "logoutSuccess",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "logoutFailed",
            payload: error.response.data.message
        })
    }

}

export const register = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "registerRequest",

        })

        // Axios
        const { data } = await axios.post(`${server}/api/v1/user/new`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            "withCredentials": true
        })

        dispatch({
            type: "registerSuccess",
            payload: "Welcome Back"
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: "registerFailed",
            payload: error.response.data.message
        })
    }
}