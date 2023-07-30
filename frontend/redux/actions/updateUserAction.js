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

        console.log(data, "darshan");
        dispatch({ type: 'updatePasswordSuccess', payload: data.message })

    } catch (error) {
        console.log(error, "error darshan");
        dispatch({ type: 'updatePasswordFailed', payload: error.response.data.message })
    }
}