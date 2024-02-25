import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import ButtonBox from '../components/ButtonBox'


import ProductListItem from '../components/ProductListItem'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Chart from '../components/Chart'
import { useAdminProduct } from '../utils/hooks'
import { useDispatch } from 'react-redux'
import ProductListHeading from '../components/ProductListHeading'

const Adminpanel = () => {
    const dispatch = useDispatch()
    const isFoused = useIsFocused()
    const navigator = useNavigation()
    const navigationHandler = (text) => {
        switch (text) {
            case "Category":
                navigator.navigate("categories")
                break
            case "All Order":
                navigator.navigate("adminorders")
                break
            case "Product":
                navigator.navigate("newproduct")
                break
            default:
                navigator.navigate("adminorders")
                break
        }
    }

    const { products, inStock, outOfStock, loading } = useAdminProduct(dispatch, isFoused)


    const deleteProductHandler = (id) => {
        console.log("Deleting Product")

    }
    return (
        <View style={defaultstyling}>
            <Header back={true} />
            <View style={{ marginTop: 80 }}>
                <Text style={formHeading}>Admin Profile</Text>
            </View>
            {
                loading ? (<Loading />) : (
                    <>
                        <View
                            style={{
                                backgroundColor: color.color3,
                                borderRadius: 20,
                                alignItems: "center",
                                marginTop: 20
                            }}>

                            <Chart inStock={15} outOfStock={4} />

                        </View >

                        <View>
                            <View style={{
                                flexDirection: "row",
                                margin: 10,
                                justifyContent: "space-between",

                            }}>
                                <ButtonBox icon={"plus"} text={"Product"} handler={() => navigationHandler("Product")} />
                                <ButtonBox icon={"format-list-bulleted-square"} text={"All Orders"} reverse={true} handler={() => navigationHandler("All Order")} />
                                <ButtonBox icon={"plus"} text={"Category"} handler={() => navigationHandler("Category")} />
                            </View>
                        </View>

                        <ProductListHeading />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                {
                                    products?.map((item, index) => (
                                        <ProductListItem key={item._id} i={index}
                                            id={item._id}
                                            navigate={navigator}
                                            deleteProductHandler={deleteProductHandler}
                                            price={item.price}
                                            stock={item.stock}
                                            category={item.category}
                                            name={item.name}
                                            image={item.images[0].imgUrl} />
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