import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Heading from '../components/Heading'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'
import { useGetOrders } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'


const Orders = () => {
    const isFocuse = useIsFocused()




    const { loading, orders } = useGetOrders(isFocuse)



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
                        {orders?.length > 0 ? (

                            orders?.map((item, index) => (
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
        fontWeight: "500",
        textAlign: 'center',
        backgroundColor: color.color3,
        color: color.color2,
        padding: 5,
        borderRadius: 5
    },
})

export default Orders