import axios from "axios";
import { server } from '../store'

export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {


    try {
        dispatch({ type: 'updatePasswordRequest' })
        console.log(oldPassword, newPassword);
        // Axios
        const { data } = await axios.put(`${server}/api/v1/user/changepassword`, {
            oldPassword, newPassword
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })

        // console.log(data, "darshan");
        dispatch({ type: 'updatePasswordSuccess', payload: data.message })

    } catch (error) {
        console.log(error, "error darshan");
        dispatch({ type: 'updatePasswordFailed', payload: error.response.data.message })
    }
}

export const updateProfile = (name, email, address, city, country, pinCode) => async (dispatch) => {


    try {
        dispatch({ type: 'updateProfileRequest' })

        // Axios
        const { data } = await axios.put(`${server}/api/v1/user/updateprofile`, {
            name, email, address, city, country, pinCode
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })

        console.log(data, "darshan");
        dispatch({ type: 'updateProfileSuccess', payload: data.message })

    } catch (error) {
        console.log(error, "error darshan");
        dispatch({ type: 'updateProfileFailed', payload: error.response.data.message })
    }
}



export const updateProfilePic = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: "updateProfilePicRequest",
        });

        const { data } = await axios.put(`${server}/api/v1/user/updatepic`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });

        dispatch({
            type: "updateProfilePicSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "updateProfilePicFailed",
            payload: error.response.data.message,
        });
    }
};

export const createOrder = (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totleAmount) => async (dispatch) => {


        try {
            dispatch({ type: 'placeOrderdRequest' })
            console.log(oldPassword, newPassword);
            // Axios
            const { data } = await axios.post(`${server}/api/v1/order/new`, {
                shippingInfo,
                orderItems,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingCharges,
                totleAmount
            }, {
                headers: {
                    "Content-Type": "application/json"
                },

            })

            // console.log(data, "darshan");
            dispatch({ type: 'placeOrderSuccess', payload: data.message })

        } catch (error) {
            console.log(error, "error darshan");
            dispatch({ type: 'placeOrderFailed', payload: error.response.data.message })
        }
    }



