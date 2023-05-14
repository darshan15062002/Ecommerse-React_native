import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../styles/style'

import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
const UpdateProfile = () => {


    const navigate = useNavigation()

    const loading = false

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [cuntry, setCuntry] = useState("")
    const [pincode, setPincode] = useState("")





    const submitHandler = () => {
        alert('yeah')
        navigate.navigate('verify')
    }

    const disabledBtn = !name || !email || !password || !address || !city || !state || !cuntry || !pincode
    const inputOption = {
        mode: 'outlined',
        style: inputStyleing,
        activeOutlineColor: color.color1
    }
    return (
        <View style={{ ...defaultstyling }}>
            {/* Heading */}

            <Header back={true} />

            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={style.heading}>Edit Profile</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: color.color3
            }}>
                <View style={{ marginBottom: 20 }}>









                    <TextInput {...inputOption} placeholder='Name' value={name} onChangeText={setName} />
                    <TextInput {...inputOption} placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' />
                    <TextInput {...inputOption} placeholder='Address' value={address} onChangeText={setAddress} />
                    <TextInput {...inputOption} placeholder='City' value={city} onChangeText={setCity} />
                    <TextInput {...inputOption} placeholder='State' value={state} onChangeText={setState} />
                    <TextInput {...inputOption} placeholder='Cuntry' value={cuntry} onChangeText={setCuntry} />
                    <TextInput {...inputOption} placeholder='Pincode' value={pincode} onChangeText={setPincode} keyboardType='email-address' />


                    <Button loading={loading} style={style.btn} disabled={disabledBtn} onPress={submitHandler} textColor={color.color2}>Update</Button>

                </View>
            </ScrollView>
        </View>


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


export default UpdateProfile