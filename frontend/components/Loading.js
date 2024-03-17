
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { color } from '../styles/style'

const Loading = () => {
    return (
        <ActivityIndicator style={{
            top: '50%',
            position: 'absolute',
            alignSelf: 'center',

        }} color={color.color1} size={70} />

    )
}

export default Loading