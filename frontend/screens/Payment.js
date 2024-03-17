import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../redux/actions/updateUserAction'
import { useMessageAndErrorOther } from '../utils/hooks'
import Loading from '../components/Loading'
import { useStripe } from '@stripe/stripe-react-native'
import axios from 'axios'
import { server } from '../redux/store'
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Payment = ({ route }) => {
    const navigate = useNavigation()
    const stripe = useStripe()
    const [paymentMethod, setPaymentMethod] = useState("COD")
    const [loaderLoading, setLoaderLoading] = useState(false)
    const dispatch = useDispatch()

    const { isAuthenticated, user } = useSelector((state) => state.user)

    const { cartItem } = useSelector((state) => state.cart)

    const redirectToLogin = () => {
        navigate.navigate('login')
    }
    const onlineHandler = async () => {
        try {

            const { data: { client_secret } } = await axios.post(`${server}/api/v1/order/payment`, {
                totalAmount: route.params.totleAmount
            }, {
                headers: {
                    "Content-Type": 'application/json',
                },
                withCredentials: true
            })

            const init = await stripe.initPaymentSheet({
                paymentIntentClientSecret: client_secret,
                merchantDisplayName: 'Ecommerce.com'
            })
            if (init.error) return Toast.show({
                type: 'error',
                text1: init.error.message,

            })


            const presentSheet = await stripe.presentPaymentSheet();
            console.log(presentSheet);
            setLoaderLoading(true)
            if (presentSheet.error) {
                setLoaderLoading(false)
                return Toast.show({
                    type: 'error',
                    text1: presentSheet.error.message,
                })
            }

            const { paymentIntent } = await stripe.retrievePaymentIntent(
                client_secret
            )

            if (paymentIntent.status = "Successed") {
                codHandler({
                    id: paymentIntent.id, status: paymentIntent.status
                })
            }

        } catch (error) {
            console.log(error);
            return Toast.show({
                type: 'error',
                text1: 'Some Error',
                text2: error

            })
        }





    }


    const codHandler = (paymentInfo) => {

        const shippingInfo = {
            address: user.address,
            city: user.city,
            cuntry: user.country,
            pincode: user.pinCode
        }

        const orderItems = cartItem
        const paymentMethod = "COD"
        const itemsPrice = route.params.itemsprice
        const taxPrice = route.params.tax
        const shippingCharges = route.params.shippingCharges
        const totleAmount = route.params.totleAmount



        dispatch(createOrder(shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totleAmount,
        ))
    }

    const loading = useMessageAndErrorOther(dispatch, navigate, "profile", () => ({
        type: "clearCart"
    }))
    return (
        loaderLoading ? <Loading /> : (<View style={{ ...defaultstyling }}>
            <Header back={true} emptyCart={false} />
            <Heading text1={'Payment'} text2={'Method'} containerStyle={{ paddingTop: 70 }} />



            <View style={style.container}>
                <RadioButton.Group
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}>
                    <View style={style.radioContainer}>
                        <Text style={style.radioContainerText}>Cash On Delivery </Text>
                        <RadioButton color={color.color1} value={'COD'} />
                    </View>
                    <View style={style.radioContainer}>
                        <Text style={style.radioContainerText}>ONLINE </Text>
                        <RadioButton color={color.color1} value={'ONLINE'} />
                    </View>
                </RadioButton.Group>
            </View>
            <TouchableOpacity onPress={
                !isAuthenticated ? redirectToLogin : paymentMethod == 'COD' ? () => codHandler() : () => onlineHandler()
            }>
                <Button loading={loading} style={style.btn} icon={paymentMethod == 'COD' ? 'check-circle' : 'circle-multiple-outline'} textColor={color.color2} >
                    {
                        paymentMethod == 'COD' ? 'Place Order' : 'Pay'
                    }</Button >
            </TouchableOpacity>
        </View>)

    )
}
const style = StyleSheet.create({
    container: {
        backgroundColor: color.color3,
        padding: 30,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: 'center'

    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    radioContainerText: {
        fontWeight: "600",
        textTransform: 'uppercase',
        color: color.color2,
        fontSize: 18
    },
    btn: {
        backgroundColor: color.color3,
        borderRadius: 100,
        margin: 10,
        padding: 5
    }
})

export default Payment