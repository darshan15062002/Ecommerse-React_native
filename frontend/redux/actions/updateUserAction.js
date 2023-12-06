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
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totleAmount,
) => async (dispatch) => {


    try {
        dispatch({ type: 'placeOrderdRequest' })

        // Axios
        const { data } = await axios.post(`${server}/api/v1/order/new`, {
            shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totleAmount,

        }, {
            headers: {
                "Content-Type": "application/json"
            },

        })


        dispatch({ type: 'placeOrderSuccess', payload: data.message })

    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: 'placeOrderFailed', payload: error.response.data.message })
    }
}



export const processOrder = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "processOrderRequest",
        });

        const { data } = await axios.put(`${server}/api/v1/order/single/${id}`,
            {},

            { withCredentials: true, }

        );


        dispatch({
            type: "processOrderSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "processOrderFailed",
            payload: error.response.data.message,
        });
    }
};



export const newProduct = (formData) => async (dispatch) => {
    console.log(formData);
    try {
        dispatch({
            type: "newProductRequest",
        });

        const { data } = await axios.post(`${server}/api/v1/product/new`, formData,

            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            }

        );

        console.log(data);


        dispatch({
            type: "newProductSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "newProductFailed",
            payload: error.response.data.message,
        });
    }
};

export const addCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: "addCategoryRequest",
        });

        const { data } = await axios.post(
            `${server}/api/v1/product/category`,

            {
                category,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        dispatch({
            type: "addCategorySuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "addCategoryFailed",
            payload: error.response.data.message,
        });
    }
};


export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteCategoryRequest",
        });

        const { data } = await axios.delete(
            `${server}/api/v1/product/category/${id}`,
            {
                withCredentials: true,
            }
        );
        dispatch({
            type: "deleteCategorySuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteCategoryFailed",
            payload: error.response.data.message,
        });
    }
};

export const updateProductDetails = (id, name, description, price, stock, category) => async (dispatch) => {

    try {
        dispatch({
            type: "updateProductRequest",

        })

        // Axios
        const { data } = await axios.put(`${server}/api/v1/product/single/${id}`, {

            "withCredentials": true
        })


        dispatch({
            type: "updateProductSuccess",
            payload: data.message
        })

    } catch (error) {

        dispatch({
            type: "updateProductFailed",
            payload: error.response.data.message
        })
    }
}


export const resetPassword = (otp, password) => async (dispatch) => {
    try {
        dispatch({
            type: "resetPasswordRequest",
        });
        const { data } = await axios.put(
            `${server}/api/v1/user/forgetpassword`,
            {
                otp,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "resetPasswordFail",
            payload: error.response.data.message,
        });
    }
};

