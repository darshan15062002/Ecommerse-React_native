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

const Payment = ({ route }) => {
    const navigate = useNavigation()

    const [paymentMethod, setPaymentMethod] = useState("COD")
    console.log(paymentMethod);
    const isAuthanticated = false
    const redirectToLogin = () => {
        navigate.navigate('login')
    }
    const onlineHandler = () => { }
    const codHandler = () => { }
    return (
        <View style={{ ...defaultstyling }}>
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
                !isAuthanticated ? redirectToLogin : paymentMethod == 'COD' ? codHandler : onlineHandler
            }>
                <Button style={style.btn} icon={paymentMethod == 'COD' ? 'check-circle' : 'circle-multiple-outline'} textColor={color.color2} >
                    {
                        paymentMethod == 'COD' ? 'Place Order' : 'Pay'
                    }</Button >
            </TouchableOpacity>
        </View>
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
        fontWeight: '600',
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