import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'

const Mymodal = ({ id, deleteProductHandler, navigate, setOpenModal }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                position: 'absolute',
                top: 10,
                right: 10
            }}>
                <Avatar.Icon icon={'close'} size={25} style={{
                    backgroundColor: color.color1
                }} />
                <Text style={styles.text} onPress={() => { navigate.navigate("updateproduct", { id }) }} >Edit</Text>
                <Button textColor={color.color1} onPress={() => deleteProductHandler(id)}>Delete</Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        zIndex: 100,
        backgroundColor: color.color2,
        padding: 20,
        borderRadius: 10
    },
    text: {
        fontWeight: "900",
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})

export default Mymodal