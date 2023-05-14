import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'

const Orders = () => {
    return (
        <View style={{ ...defaultstyling, backgroundColor: color.color5 }}>
            <Header back={true} />
            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={style.heading}>Orders</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        backgroundColor: color.color3,
        color: color.color2,
        padding: 5,
        borderRadius: 5
    },
})

export default Orders