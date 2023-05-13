import { View, Text, TouchableOpacity, ScrollView, useAnimatedValue } from 'react-native'
import React from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import Cartitem from '../components/Cartitem'
import { useNavigation } from '@react-navigation/native'

export const cartItem = [{
    name: 'compus',
    price: '120',
    image: 'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
    product: 1,
    stock: 2,
    quentity: 5
},
{
    name: 'paragon',
    price: '100',
    image: 'https://freepngimg.com/thumb/shoes/21729-4-saucony-grid-9000.png',
    product: 2,
    stock: 4,
    quentity: 2
}]

const Cart = () => {

    const navigate = useNavigation()
    const incrementHendler = (id, qty, stock) => {
        console.log('incre');
    }
    const decrementHandler = (id, qty) => {

    }
    return (
        <View style={{
            ...defaultstyling, padding: 0
        }}>



            <Header back={true} emptyCart={true} />
            <Heading
                text1={'Shopping'}
                text2={'Cart'}
                containerStyle={{ paddingTop: 75, marginLeft: 35 }} />



            <View style={{
                flex: 1,
                paddingVertical: 20,

            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItem.map((item, index) => (
                            <Cartitem
                                key={item.product}
                                price={item.price}
                                name={item.name}
                                stock={item.stock}
                                image={item.image}
                                index={index}
                                qty={item.quentity}
                                id={item.product}
                                navigate={navigate}
                                incrementHendler={incrementHendler}
                                decrementHandler={decrementHandler} />
                        ))
                    }</ScrollView>
            </View>



            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 35,
                justifyContent: 'space-between'
            }}>
                <Text>5 Items</Text>
                <Text>$5</Text>


            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={cartItem.length > 0 ? () => navigate.navigate('conformorder') : null}>
                <Button icon={'cart'} textColor={color.color2} style={{
                    backgroundColor: color.color3,
                    margin: 20,
                    borderRadius: 100,
                    padding: 5

                }}>
                    CheckOut
                </Button>
            </TouchableOpacity>
        </View >
    )
}

export default Cart