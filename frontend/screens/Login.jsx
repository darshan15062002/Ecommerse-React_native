import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../styles/style'
import Heading from '../components/Heading'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'

const Login = () => {


    const navigate = useNavigation()

    const loading = false
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = () => {
        alert('yeah')
    }

    const inputOption = {
        mode: 'outlined',
        style: inputStyleing,
        activeOutlineColor: color.color1
    }
    return (
        <>
            <View style={{ ...defaultstyling, backgroundColor: color.color2 }}>
                {/* Heading */}
                <View style={{ marginVertical: 20 }}>
                    <Text style={style.heading}>Login</Text>
                </View>

                <View style={style.container}>
                    <TextInput {...inputOption} placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' />
                    <TextInput {...inputOption} secureTextEntry={true} placeholder='Password' value={password} onChangeText={setPassword} keyboardType='email-address' />

                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate('forget-password')}>
                        <Text style={style.forgotText}>Forgot Password</Text>
                    </TouchableOpacity>
                    <Button loading={loading} style={style.btn} disabled={email === "" || password === "" ? true : false} onPress={submitHandler} textColor={color.color2}>Login</Button>
                    <Text style={style.or}>OR</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate("register")}>
                        <Text style={style.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer activeRoute='profile' />
        </>
    )
}
const style = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        backgroundColor: color.color3,
        color: color.color2,
        padding: 5,
        borderRadius: 5
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: color.color3,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 10
    },
    forgotText: {
        color: color.color2,
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: '100',
        alignSelf: 'flex-end'

    },
    btn: {
        backgroundColor: color.color1,
        margin: 20,
        padding: 6,
    },
    or: {
        color: color.color2,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 100

    },
    link: {
        color: color.color2,
        alignSelf: 'center',
        marginVertical: 10,
        textTransform: 'uppercase',
        marginHorizontal: 20,
        fontSize: 18
    }
})

export default Login