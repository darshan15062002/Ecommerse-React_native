import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import OrderItem from '../components/OrderItem'
import { Headline } from 'react-native-paper'
import { useGetOrders, useMessageAndErrorOther } from '../utils/hooks'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { processOrder } from '../redux/actions/updateUserAction'


const AdminOrders = () => {
    const isFocuse = useIsFocused()
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const { loading, orders } = useGetOrders(isFocuse, isAdmin = true)

    const processOrderLoading = useMessageAndErrorOther(dispatch, navigate, "adminpanel")

    const updateHandler = (id) => {
        dispatch(processOrder(id));
    };
    return (
        <View style={{ ...defaultstyling, backgroundColor: color.color5 }}>


            <Header back={true} />

            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={formHeading}>All Orders</Text>
            </View>
            {
                loading ? (<Loading />) : (<View style={{
                    padding: 10,
                    flex: 1
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {orders?.length > 0 ? (

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
                                    admin={true}
                                    updateHandler={updateHandler}
                                    loading={processOrderLoading}
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

export default AdminOrders