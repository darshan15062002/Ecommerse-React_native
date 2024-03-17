import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, inputStyleing } from '../styles/style'
import Heading from '../components/Heading'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import { ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useMessageAndError } from '../utils/hooks'
import { useDispatch } from 'react-redux'
import mime from "mime";
import { register } from '../redux/actions/userActions'

const Register = ({ navigation, route }) => {



    const navigate = useNavigation()

    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [cuntry, setCuntry] = useState("")
    const [pincode, setPincode] = useState("")

    const dispatch = useDispatch();

    const disabledBtn = !name || !email || !password || !address || !city || !state || !cuntry || !pincode
    const inputOption = {
        mode: 'outlined',
        style: inputStyleing,
        activeOutlineColor: color.color1
    }

    const defaultImg = 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1681309322~exp=1681309922~hmac=55c1e571f3834e0092b67fd2b20da268edc9283e1e9fadcea58549c70b24dcc5'


    const submitHandler = () => {
        const myForm = new FormData();
        myForm.append("name", name)
        myForm.append("email", email)
        myForm.append("password", password)
        myForm.append("address", address)
        myForm.append("city", city)
        myForm.append("state", state)
        myForm.append("country", cuntry)
        myForm.append("pinCode", pincode)

        if (avatar !== "") {
            myForm.append("file", {
                uri: avatar,
                type: mime.getType(avatar),
                name: avatar.split("/").pop(),
            });
        }

        dispatch(register(myForm));
    };


    const loading = useMessageAndError(navigation, dispatch, "profile");



    useEffect(() => {
        if (route.params?.image) setAvatar(route.params.image);
    }, [route.params]);

    return (
        <>
            <View style={{ ...defaultstyling, backgroundColor: color.color2 }}>
                {/* Heading */}
                <View style={{ marginVertical: 20 }}>
                    <Text style={style.heading}>Sign UP</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{
                    padding: 20,
                    elevation: 10,
                    borderRadius: 10,
                    backgroundColor: color.color3,

                }}>
                    <View style={{ minHeight: 950 }}>
                        <Avatar.Image icon={'image'} style={{
                            alignSelf: 'center', backgroundColor: color.color1
                        }} size={80} source={{ uri: avatar ? avatar : defaultImg }} />

                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate('camera')}>
                            <Button textColor={color.color2}>Change Photo</Button>
                        </TouchableOpacity>








                        <TextInput {...inputOption} placeholder='Name' value={name} onChangeText={setName} />
                        <TextInput {...inputOption} placeholder='Email' value={email} onChangeText={setEmail} keyboardType='email-address' />
                        <TextInput {...inputOption} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
                        <TextInput {...inputOption} placeholder='Address' value={address} onChangeText={setAddress} />
                        <TextInput {...inputOption} placeholder='City' value={city} onChangeText={setCity} />
                        <TextInput {...inputOption} placeholder='State' value={state} onChangeText={setState} />
                        <TextInput {...inputOption} placeholder='Country' value={cuntry} onChangeText={setCuntry} />
                        <TextInput {...inputOption} placeholder='Pincode' value={pincode} onChangeText={setPincode} keyboardType='email-address' />


                        <Button loading={loading} style={style.btn} disabled={disabledBtn} onPress={submitHandler} textColor={color.color2}>Sign UP</Button>
                        {/* <Text style={style.or}>OR</Text> */}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate("login")}>
                            <Text style={style.link}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Footer activeRoute='profile' />
        </>
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

export default Register