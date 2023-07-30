import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/userActions'
import { useMessageAndError } from '../utils/hooks'


// const user = {
//     name: 'darshan',
//     email: 'darshan@gmail.com'
// }
const loading = false
const Profile = ({ route }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [avatar, setAvatar] = useState(null)
    const { user } = useSelector((state) => state.user)


    const logoutHandler = () => {
        dispatch(logout())
        console.log("sign-out");
    }

    useEffect(() => {
        if (route.params?.image) return setAvatar(route.params.image)


    }, [route.params])

    const loading = useMessageAndError(navigation, dispatch, "login")


    const navigateHandler = (text) => {
        switch (text) {
            case "admin":
                navigation.navigate("adminpanel");
                break;
            case "Orders":
                navigation.navigate("orders");
                break;
            case "Password":
                navigation.navigate("changepassword");
                break;
            case "Profile":
                navigation.navigate("updateprofile");
                break;
            case "Sign-Out":
                logoutHandler()
                break;

        }
    }





    return (<>
        <View style={defaultstyling}>

            <View style={{ marginTop: 20 }}>
                <Text style={formHeading}> Profile</Text>
            </View>

            {/* Loading */}
            {
                loading ? <Loading /> : <>
                    <View style={styles.container}>
                        <Avatar.Image size={100}
                            source={{ uri: avatar }} style={{ backgroundColor: color.color1 }} />

                        <TouchableOpacity onPress={() => navigation.navigate('camera', { updateProfile: true })}>
                            <Button textColor={color.color1}>Change Photo</Button>
                        </TouchableOpacity>
                        <Text style={styles.name}>{user?.name}</Text>
                        <Text style={{ fontWeight: '300', color: color.color2 }}>{user?.email}</Text>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            justifyContent: 'space-between',

                        }}>
                            <ButtonBox handler={navigateHandler} text={'Orders'} icon={'format-list-bulleted-square'} />
                            <ButtonBox handler={navigateHandler} icon={'view-dashboard'} text={user?.role} reverse={true} />
                            <ButtonBox handler={navigateHandler} text={'Profile'} icon={'pencil'} />

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            margin: 10,
                            justifyContent: 'space-evenly',

                        }}>
                            <ButtonBox handler={navigateHandler} text={'Password'} icon={'format-list-bulleted-square'} />

                            <ButtonBox handler={navigateHandler} text={'Sign-Out'} icon={'exit-to-app'} />

                        </View>
                    </View></>
            }
        </View>
        <Footer />
    </>
    )
}


const styles = StyleSheet.create({
    container: {
        elevation: 7,
        marginTop: 20,
        backgroundColor: color.color3,
        padding: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        color: color.color2

    }
})

export default Profile