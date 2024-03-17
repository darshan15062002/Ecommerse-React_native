import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../styles/style'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { updatePassword } from '../redux/actions/updateUserAction'
import { useMessageAndErrorOther } from '../utils/hooks'
const UpdatePassword = ({ navigation }) => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const loading = useMessageAndErrorOther(dispatch)

    const [oldpassword, setOldPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")


    const submitHandler = () => {
        dispatch(updatePassword(oldpassword, newpassword))
        setNewPassword("")
        setOldPassword("")
    }

    const inputOption = {
        mode: 'outlined',
        style: inputStyleing,
        activeOutlineColor: color.color1
    }
    return (

        <View style={{ ...defaultstyling, backgroundColor: color.color2 }}>
            {/* Heading */}
            <Header back={true} />
            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={style.heading}>Change Password</Text>
            </View>

            <View style={style.container}>
                <TextInput {...inputOption} secureTextEntry={true} placeholder=' Old Password' value={oldpassword} onChangeText={setOldPassword} />
                <TextInput {...inputOption} secureTextEntry={true} placeholder=' New Password' value={newpassword} onChangeText={setNewPassword} />

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate('forget-password')}>
                    <Text style={style.forgotText}>Forgot Password</Text>
                </TouchableOpacity>
                <Button textColor={color.color2} loading={loading} style={style.btn} disabled={oldpassword === "" || newpassword === "" ? true : false} onPress={submitHandler} >Change</Button>

            </View>
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
        fontWeight: "100",
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

export default UpdatePassword