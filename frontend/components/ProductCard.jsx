import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { englishText, gujaratiText, hindiText } from '../utils/language'

const ProductCard = ({ stock, name, price, image, id, addToCartHandler, i, navigate }) => {
    const { language } = useSelector((state) => state.appLanguage);
    const translations = language === 'English' ? englishText : (language === 'Hindi' ? hindiText : gujaratiText);
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigate.navigate('productdetails', { id })} >
            {/*  */}
            <View style={{
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                margin: 5,
                borderRadius: 10,
                height: 200,
                width: 150,
                backgroundColor: i % 2 == 0 ? color.color1 : color.color2
            }}>
                <Image source={{ uri: image }} style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                    position: 'absolute',

                }} />
                <View style={{
                    flexDirection: 'column',
                    padding: 20,
                    justifyContent: 'space-between',
                    width: '100%'
                }} >
                    <Text numberOfLines={1} style={{ color: i % 2 == 0 ? color.color2 : color.color3, fontSize: 15, fontWeight: "300" }} >
                        {name}
                    </Text>
                    <Text numberOfLines={1} style={{ color: i % 2 == 0 ? color.color2 : color.color3, fontSize: 10, fontWeight: "700" }} >
                        ₹{price}
                    </Text>


                </View>
                <TouchableOpacity style={{ bottom: 0, width: '100%', }}>
                    <Button style={{
                        backgroundColor: i % 2 == 0 ? color.color2 : color.color1,
                        borderRadius: 0,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10
                    }} onPress={() => addToCartHandler(id, name, price, image, stock)}>
                        <Text style={{ color: i % 2 == 0 ? color.color1 : color.color2 }}>{translations.addToCart}</Text></Button>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}

export default ProductCard