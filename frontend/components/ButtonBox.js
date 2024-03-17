import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({ icon, text, handler, reverse = false, loading = false }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handler(text)}
            disabled={loading}
            style={{
                backgroundColor: reverse === true ? color.color1 : color.color3,
                height: 80,
                width: 80,
                borderRadius: 20,
                alignItems: 'center',

            }}>
            <Avatar.Icon icon={icon} size={50} color={color.color2} style={{
                backgroundColor: reverse === true ? color.color1 : color.color3,
            }} />
            <Text style={{ color: color.color2, textAlign: 'center' }}>{text}</Text>

        </TouchableOpacity>
    )
}

export default ButtonBox