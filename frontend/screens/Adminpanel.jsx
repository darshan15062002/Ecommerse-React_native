import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import ButtonBox from '../components/ButtonBox'
import ProductListHeading from '../components/ProductListHeading'
import { products } from './Home'
import ProductListItem from '../components/ProductListItem'
import { useNavigation } from '@react-navigation/native'

const Adminpanel = () => {
    const loading = false
    const navigator = useNavigation()
    const navigationHandler = () => {

    }

    const deleteProductHandler = (id) => {
        console.log("Deleting Product")
    }
    return (
        <View style={defaultstyling}>
            <Header back={true} />
            <View style={{ marginTop: 80 }}>
                <Text style={formHeading}>Profile</Text>
            </View>
            {
                loading ? (<Loading />) : (
                    <>
                        <View
                            style={{
                                backgroundColor: color.color3,
                                borderRadius: 20,
                                alignItems: "center"
                            }}>

                        </View >

                        <View>
                            <View style={{
                                flexDirection: "row",
                                margin: 10,
                                justifyContent: "space-between",

                            }}>
                                <ButtonBox icon={"plus"} text={"Product"} handler={navigationHandler} />
                                <ButtonBox icon={"format-list-bulleted-square"} text={"All Orders"} reverse={true} handler={navigationHandler} />
                                <ButtonBox icon={"plus"} text={"Category"} handler={navigationHandler} />
                            </View>
                        </View>

                        <ProductListHeading />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {
                                    products.map((item, index) => (
                                        <ProductListItem key={item._id} i={index}
                                            id={item._id}
                                            navigate={navigator}
                                            deleteProductHandler={deleteProductHandler}
                                            price={item.price}
                                            stock={item.stock}
                                            category={item.category}
                                            name={item.name}
                                            image={item.imgUrl} />
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </>
                )}
        </View>
    )
}

export default Adminpanel