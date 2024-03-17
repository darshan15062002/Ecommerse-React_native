import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Conformorderitem from '../components/Conformorderitem'

import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { englishText, gujaratiText, hindiText } from '../utils/language'



const Conformorder = () => {
    const { language } = useSelector((state) => state.appLanguage);
    const translations = language === 'English' ? englishText : (language === 'Hindi' ? hindiText : gujaratiText);
    const navigate = useNavigation()
    const { cartItem } = useSelector(state => state.cart)


    const [itemsprice] = useState(cartItem.reduce((prv, cur) => prv + cur.quntity * cur.price, 0))
    console.log(itemsprice);
    const [shippingCharges] = useState(itemsprice > 10000 ? 0 : 200)
    const [tax] = useState(Number((itemsprice * 0.18).toFixed()))
    const [totleAmount] = useState(itemsprice + shippingCharges + tax)
    return (
        <View style={{
            ...defaultstyling
        }}>
            {/* header */}
            <Header back={true} emptyCart={false} />

            {/* heading */}
            <Heading text1={translations.Conform} text2={translations.Order} containerStyle={{ paddingTop: 75 }} />

            <View style={{
                paddingVertical: 20,
                flex: 1
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItem.map((item, index) => (
                            <Conformorderitem key={item.product}
                                price={item.price}
                                name={item.name}
                                image={item.image}
                                index={index}
                                qty={item.quentity}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <PriceTag heading={translations.Subtotal} value={itemsprice} />
            <PriceTag heading={translations.Tax} value={tax} />
            <PriceTag heading={translations.ShippingCharge} value={shippingCharges} />
            <PriceTag heading={translations.TotalAmount} value={totleAmount} />

            <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate('payment', {
                itemsprice, shippingCharges, tax, totleAmount
            })}>
                <Button icon={'chevron-right'} textColor='white' style={{
                    backgroundColor: color.color3,
                    padding: 5,
                    margin: 10,
                    borderRadius: 100,
                }}>
                    {translations.Payment}
                </Button>
            </TouchableOpacity>
        </View>
    )
}

const PriceTag = ({ heading, value }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginVertical: 5
    }}>
        <Text style={{
            fontWeight: "800"
        }}>{heading}</Text>
        <Text>₹{value}</Text>

    </View>)

export default Conformorder