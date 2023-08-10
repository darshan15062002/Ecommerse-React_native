import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { color } from '../styles/style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
const Header = ({ back, emptyCart }) => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const route = useRoute()
    const emptycarthandler = () => {
        console.log("emptycart");
        dispatch({ type: 'clearCart' })

    }
    return (
        <>
            {back && <TouchableOpacity style={{ position: 'absolute', left: 20, top: 40, zIndex: 10 }} onPress={() => navigate.goBack()}>
                <Avatar.Icon icon='arrow-left' color={route.name == "productdetails" ? color.color2 : color.color3} style={{ backgroundColor: color.color4 }} />
            </TouchableOpacity>}
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 40, zIndex: 10 }} onPress={emptyCart ? emptycarthandler : () => navigate.navigate('cart')}>
                <Avatar.Icon icon={emptyCart ? 'delete-outline' : 'cart-outline'} color={route.name == "productdetails" ? color.color2 : color.color3} style={{ backgroundColor: color.color4 }} />
            </TouchableOpacity></>
    )
}

export default Header