import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../styles/style'

import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/actions/updateUserAction'
import { useMessageAndErrorOther } from '../utils/hooks'
const UpdateProfile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigation()
    const { user } = useSelector((state) => state.user)


    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)

    const [address, setAddress] = useState(user?.address)
    const [city, setCity] = useState(user?.city)
    const [country, setCountry] = useState(user?.country)
    const [pinCode, setPinCode] = useState(user?.pinCode)





    const loading = useMessageAndErrorOther(dispatch, navigate, "profile")



    const submitHandler = () => {
        dispatch(updateProfile(name, email, address, city, country, pinCode))

        // navigate.navigate('verify')
    }

    const disabledBtn = !name || !email || !address || !city || !country || !pinCode
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
                    <TextInput {...inputOption} placeholder='Country' value={country} onChangeText={setCountry} />
                    <TextInput {...inputOption} maxLength={6} placeholder='PinCode' value={`${pinCode}`} onChangeText={setPinCode} keyboardType='number-pad' />


                    <Button loading={loading} style={style.btn} disabled={disabledBtn} onPress={submitHandler} textColor={color.color2}>Update</Button>

                </View>
            </ScrollView>
        </View>


    )
}
const style = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
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
        fontWeight: "100"

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