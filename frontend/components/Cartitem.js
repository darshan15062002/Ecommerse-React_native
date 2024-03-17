import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Image } from 'react-native'
import { Avatar } from 'react-native-paper'


const Cartitem = ({

    price, name, index, qty, image, stock, id, incrementHendler, decrementHandler, navigate
}) => {

    return (
        <View style={{
            flexDirection: 'row',
            height: 100,
            marginVertical: 20
        }}>
            <View style={{
                width: '40%',
                backgroundColor: index % 2 == 0 ? color.color1 : color.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100
            }}>
                <Image source={{ uri: image }} style={{
                    width: 200,
                    height: '100%',
                    top: '-20%',
                    left: '-10%',
                    resizeMode: 'contain'
                }} />

            </View>
            <View style={{
                width: '40%',
                paddingHorizontal: 25
            }} onPress={() => navigate.navigate('productdetails', { id: id })}>
                <Text numberOfLines={1} style={{
                    fontSize: 17
                }}>{name}</Text>

                <Text numberOfLines={1} style={{
                    fontSize: 17,
                    fontWeight: "900"
                }}>₹{price}</Text>


            </View>
            <View style={{
                alignItems: 'center',
                width: '20%',
                height: 80,

                justifyContent: 'space-between',
                alignContent: 'center',
            }}>
                <TouchableOpacity onPress={() => incrementHendler(id, name, price, image, stock, qty)}>
                    <Avatar.Icon icon={'plus'} size={20} style={{
                        backgroundColor: color.color5,
                        height: 25,
                        width: 25,
                        borderRadius: 5
                    }} />
                </TouchableOpacity>
                <Text style={style.qtyText} >{qty}</Text>
                <TouchableOpacity onPress={() => decrementHandler(id, name, price, image, stock, qty)}>
                    <Avatar.Icon icon={'minus'} size={20} style={{
                        backgroundColor: color.color5,
                        height: 25,
                        width: 25,
                        borderRadius: 5
                    }} />
                </TouchableOpacity>

            </View>

        </View>
    )
}
const style = StyleSheet.create({
    qtyText: {
        backgroundColor: color.color4,
        height: 25,
        width: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderColor: color.color5,
        borderRadius: 5,
        borderWidth: 1
    }
})

export default Cartitem