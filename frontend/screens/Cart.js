import { View, Text, TouchableOpacity, ScrollView, useAnimatedValue } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import Cartitem from '../components/Cartitem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { englishText, gujaratiText, hindiText } from '../utils/language'



const Cart = () => {
    const { language } = useSelector((state) => state.appLanguage); // Assuming you have 'appLanguage' in your Redux store
    const translations = language === 'English' ? englishText : (language === 'Hindi' ? hindiText : gujaratiText);
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)
    const [totle, setTotle] = useState(0)
    useEffect(() => {
        setTotle(cartItem.reduce((prv, cur) => prv + cur.quntity * cur.price, 0))
    })


    const navigate = useNavigation()

    const incrementHendler = (id, name, price, image, stock, qty) => {
        // console.log(id, name, price, image, stock, quntity, 'inc');
        const newQty = qty + 1
        if (stock <= qty) return Toast.show({
            type: 'error',
            text1: "Maximum value added"
        })

        dispatch({
            type: 'addToCart',
            payload: {
                product: id,
                name, price, image, stock, quntity: newQty
            }
        })


    }

    const decrementHandler = (id, name, price, image, stock, qty) => {
        // console.log("decreasing");
        const newQty = qty - 1
        if (1 >= qty) return dispatch({
            type: 'removeFromCart',
            payload: id
        })

        dispatch({
            type: 'addToCart', payload: {
                product: id,
                name, price, image, stock, quntity: newQty
            }
        })



    }


    return (
        <View style={{
            ...defaultstyling, padding: 0
        }}>



            <Header back={true} emptyCart={true} />
            <Heading
                text1={translations.Product}
                text2={translations.Cart}
                containerStyle={{ paddingTop: 75, marginLeft: 35 }} />



            <View style={{
                flex: 1,
                paddingVertical: 20,

            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cartItem?.length > 0 ?
                        cartItem?.map((item, index) => (
                            <Cartitem
                                key={item.product}
                                price={item.price}
                                name={item.name}
                                stock={item.stock}
                                image={item.image}
                                index={index}
                                qty={item.quntity}
                                id={item.product}
                                navigate={navigate}
                                incrementHendler={incrementHendler}
                                decrementHandler={decrementHandler} />
                        )) : (<Text style={{
                            textAlign: 'center',
                            fontWeight: "900",
                            fontSize: 18
                        }}>No item yet</Text>)
                    }</ScrollView>
            </View>



            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 35,
                justifyContent: 'space-between'
            }}>
                <Text>{cartItem.length} Items</Text>
                <Text>₹ {totle}</Text>


            </View>
            {/* <TouchableOpacity activeOpacity={0.8} onPress={cartItem.length > 0 ? () => navigate.navigate('conformorder') : null}> */}
            <TouchableOpacity activeOpacity={0.8} onPress={2 > 0 ? () => navigate.navigate('conformorder') : null}>
                <Button icon={'cart'} textColor={color.color2} style={{
                    backgroundColor: color.color3,
                    margin: 20,
                    borderRadius: 100,
                    padding: 5

                }}>
                    {translations.Checkout}
                </Button>
            </TouchableOpacity>
        </View >
    )
}

export default Cart