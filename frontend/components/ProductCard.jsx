import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'

const ProductCard = ({ stock, name, price, image, id, addToCartHandler, i, navigate }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigate.navigate('productdetails', { id })} >
            {/*  */}
            <View style={{
                width: 220, elevation: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                margin: 20,
                borderRadius: 20,
                height: 350,
                backgroundColor: i % 2 == 0 ? color.color1 : color.color2
            }}>
                <Image source={{ uri: image }} style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                    position: 'absolute',
                    left: 20,
                    top: 40
                }} />
                <View style={{
                    flexDirection: 'column',
                    padding: 20,
                    justifyContent: 'space-between',
                    width: '100%'
                }} >
                    <Text numberOfLines={1} style={{ color: i % 2 == 0 ? color.color2 : color.color3, fontSize: 25, fontWeight: '300' }} >
                        {name}
                    </Text>
                    <Text numberOfLines={1} style={{ color: i % 2 == 0 ? color.color2 : color.color3, fontSize: 20, fontWeight: '700' }} >
                        ${price}
                    </Text>


                </View>
                <TouchableOpacity style={{ bottom: 0, width: '100%', }}>
                    <Button style={{
                        backgroundColor: i % 2 == 0 ? color.color2 : color.color1,
                        borderRadius: 0,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }} onPress={() => addToCartHandler(id, name, price, image, stock)}>
                        <Text style={{ color: i % 2 == 0 ? color.color1 : color.color2 }}>Add To Cart</Text></Button>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}

export default ProductCard