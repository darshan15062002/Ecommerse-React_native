import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Heading from '../components/Heading'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

export const orders = [
    {
        _id: "defsvfvdfbs",
        shippingInfo: {
            address: "23 andinager",
            city: "boisar",
            country: "india",
            pincode: 401501,
        },
        createdAt: "12-2-2023T2342",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totleAmount: 2000
    },
    {
        _id: "dewsvfvdfbs",
        shippingInfo: {
            address: "23 andinager",
            city: "boisar",
            country: "india",
            pincode: 401501,
        },
        createdAt: "12-2-2023T2342",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totleAmount: 2000
    },
    {
        _id: "defsefvdfbs",
        shippingInfo: {
            address: "23 andinager",
            city: "boisar",
            country: "india",
            pincode: 401501,
        },
        createdAt: "12-2-2023T2342",
        orderStatus: "Processing",
        paymentMethod: "COD",
        totleAmount: 2000
    },
    {
        _id: "defsvfvrefbs",
        shippingInfo: {
            address: "23 andinager",
            city: "palgher",
            country: "india",
            pincode: 403501,
        },
        createdAt: "22-2-2023T2342",
        orderStatus: "Shiped",
        paymentMethod: "ONLINE",
        totleAmount: 4000
    }
]
const Orders = () => {
    const loading = false

    return (
        <View style={{ ...defaultstyling, backgroundColor: color.color5 }}>
            <Header back={true} />
            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={style.heading}>Orders</Text>
            </View>
            {
                loading ? (<Loading />) : (<View style={{
                    padding: 10,
                    flex: 1
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {orders.length > 0 ? (

                            orders.map((item, index) => (
                                <OrderItem
                                    key={item._id}
                                    id={item._id}
                                    i={index}
                                    price={item.totleAmount}
                                    status={item.orderStatus}
                                    paymentMethod={item.paymentMethod}
                                    orderedOn={item.createdAt}
                                    address={`${item.shippingInfo.address},${item.shippingInfo.city},${item.shippingInfo.country} , ${item.shippingInfo.pincode}`}

                                />
                            ))

                        ) :
                            (<Headline style={{ textAlign: "center" }} >No Order Yet</Headline>)

                        }
                    </ScrollView>
                </View>)
            }



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