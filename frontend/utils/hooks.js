import axios from "axios"
import { useEffect, useState } from "react"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { useSelector } from "react-redux"
import { server } from "../redux/store"
import { loadUser } from "../redux/actions/userActions"
import { getAllAdminProduct } from "../redux/actions/productAction"


export const useMessageAndError = (navigate, dispatch, navigateTo = 'login') => {
    const { loading, message, error } = useSelector((state) => state.user)
    console.log(loading, message, error);
    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }
        if (message) {
            navigate.reset({
                index: 0,
                routes: [{ name: navigateTo }],
            });
            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: "clearMessage"
            })
            dispatch(loadUser())

        }
    }, [error, message, dispatch])
    return loading
}

export const useMessageAndErrorOther = (dispatch, navigate, navigateTo, func) => {
    const { loading, message, error } = useSelector((state) => state.updateUser)
    console.log(loading, message, error);
    useEffect(() => {
        if (error) {
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }
        if (message) {

            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: "clearMessage"
            })
            navigateTo && navigate.navigate(navigateTo)
            func && dispatch(func())

        }
    }, [error, message, dispatch])
    return loading
}

export const useSetCategory = (setCategory, isFocused) => {
    useEffect(() => {
        axios.get(`${server}/api/v1/product/categoryes`).then((res) => {
            setCategory(res.data.categoryes)
        }).catch(error => {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: error.response.data.message
            })
        })

    }, [isFocused])

}
export const useGetOrders = (isFocused, isAdmin = false) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`${server}/api/v1/order/${isAdmin ? "admin" : "my"}`).then((res) => {

            setOrders(res.data.order)
            setLoading(false)
        }).catch(error => {
            console.log(error);
            setLoading(false)
            Toast.show({
                type: 'error',
                text1: error.response.data.message
            })
        })



    }, [isFocused])

    return { loading, orders }

}

export const useAdminProduct = (dispatch, isFocused) => {

    const { products, inStock, outOfStock, error, loading } = useSelector((state) => state.product)
    useEffect(() => {

        if (error) {
            console.log(error);
            Toast.show({
                type: 'error',
                text1: error
            })
            dispatch({ type: 'clearError' })
        }

        dispatch(getAllAdminProduct)

    }, [isFocused, dispatch, error])



    return { products, inStock, outOfStock, loading }

}

export const useDeleteAdminProduct = async (id) => {


    try {
        axios.delete(`${server}/api/v1/product/single/${id}`)
    } catch (error) {

    }



    return { products, inStock, outOfStock, loading }

}

