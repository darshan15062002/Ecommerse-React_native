import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { color } from '../styles/style'
import { useNavigation, useRoute } from '@react-navigation/native'
const Header = ({ back, emptyCart = false }) => {
    const navigate = useNavigation()
    const route = useRoute()
    const emptycarthandler = () => {
        console.log("emptycart");
    }
    return (
        <>
            {back && <TouchableOpacity style={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }} onPress={emptyCart ? emptycarthandler : () => navigate.navigate('cart')}>
                <Avatar.Icon icon={emptyCart ? 'delete-outline' : 'cart-outline'} color={route.name == "productdetails" ? color.color2 : color.color3} style={{ backgroundColor: color.color4 }} />
            </TouchableOpacity>}</>
    )
}

export default Header