import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { color } from '../styles/style'
import Mymodal from './Mymodal'

const ProductListItem = ({ i,
    navigate,
    id,
    deleteProductHandler,
    price,
    stock,
    category,
    name,
    image, }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <TouchableOpacity activeOpacity={0.9}
                onLongPress={() => setOpenModal((prev) => !prev)}
                onPress={() => navigate.navigate("productdetails", { id })}>
                <View style={{ ...styles.container, backgroundColor: i % 2 == 0 ? color.color1 : color.color3 }}>
                    <Image
                        source={{
                            uri: image
                        }}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: "contain"
                        }}>


                    </Image>
                    <Text style={{ width: 60, color: color.color2 }}
                        numberOfLines={1}>₹{price}</Text>
                    <Text style={{ width: 60, color: color.color2 }}
                        numberOfLines={1}>{name}</Text>
                    <Text style={{ width: 60, color: color.color2 }}
                        numberOfLines={1}>{category}</Text>
                    <Text style={{ width: 40, color: color.color2 }}
                        numberOfLines={1}>{stock}</Text>

                </View>
            </TouchableOpacity>


            {
                openModal && (
                    <Mymodal id={id} deleteProductHandler={deleteProductHandler} navigate={navigate} setOpenModal={setOpenModal} />
                )
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10
    },
})

export default ProductListItem