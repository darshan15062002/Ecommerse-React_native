import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Conformorderitem = ({ qty, price, name, index, image }) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 10
        }}>
            <Image source={{ uri: image }} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
            <Text>{name}</Text>
            <View style={{ flexDirection: 'row' }}><Text>{qty}</Text>

                <Text style={{ marginHorizontal: 10 }}>X</Text>

                <Text>₹{price}</Text></View>


        </View>
    )
}

export default Conformorderitem