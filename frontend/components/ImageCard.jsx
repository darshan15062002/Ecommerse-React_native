import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Avatar } from 'react-native-paper'
import { Image } from 'react-native'

const ImageCard = ({ src, id, deleteHandler }) => {
    return (
        <View style={styles.container}>
            <Image source={{
                uri: src
            }}
                style={{
                    width: '100%',
                    height: '80%',
                    resizeMode: 'contain'
                }} />

            <TouchableOpacity onPress={() => deleteHandler}>
                <Avatar.Icon size={30} icon={'delete'} style={{
                    backgroundColor: color.color1
                }} />
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        height: 300
    }
})

export default ImageCard