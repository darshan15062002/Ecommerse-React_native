import { View, Text } from 'react-native'
import React from 'react'
import { defaultstyling } from '../styles/style'

const Cart = () => {
    return (
        <View style={{
            ...defaultstyling, padding: 0
        }}>
            <Text>Cart</Text>
        </View >
    )
}

export default Cart