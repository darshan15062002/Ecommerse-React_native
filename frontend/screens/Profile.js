import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../redux/actions/userActions'
import { useMessageAndError, useMessageAndErrorOther } from '../utils/hooks'
import mime from 'mime'
import { updateProfilePic } from '../redux/actions/updateUserAction'
import Language from '../components/Language'
import { englishText, gujaratiText, hindiText } from '../utils/language'



const Profile = ({ route }) => {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const navigation = useNavigation()

    const { user } = useSelector((state) => state.user)
    const { language } = useSelector((state) => state.appLanguage);
    const translations = language === 'English' ? englishText : (language === 'Hindi' ? hindiText : gujaratiText); const [avatar, setAvatar] = useState(user?.avatar.url)




    const logoutHandler = () => {
        dispatch(logout())
        console.log("sign-out");
    }
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

    const loadingPic = useMessageAndErrorOther(dispatch, null, null, loadUser)



    useEffect(() => {
        if (route.params?.image) {
            setAvatar(route.params.image)

            // dispatch update pic here
            const myForm = new FormData()
            myForm.append("file", {
                uri: route.params.image,
                type: mime.getType(route.params.image),
                name: route.params.image.split("/").pop(),
            })
            dispatch(updateProfilePic(myForm))
        }

        dispatch(loadUser())


    }, [route.params, dispatch, isFocused])




    return (<>
        <View style={defaultstyling}>

            <View style={{ marginTop: 20 }}>
                <Text style={formHeading}> {translations.Profile}</Text>
            </View>

            {/* Loading */}
            {
                loading ? <Loading /> : (<>
                    <View style={styles.container}>
                        <Language />
                        <Avatar.Image
                            size={100}
                            source={{ uri: avatar ? avatar : null }}
                            style={{ backgroundColor: color.color1 }}
                        />

                        <TouchableOpacity
                            disabled={loadingPic}
                            onPress={() => navigation.navigate('camera', { updateProfile: true })}
                        >
                            <Button textColor={color.color1}>{translations.ChangePhoto}</Button>
                        </TouchableOpacity>
                        <Text style={styles.name}>{user?.name}</Text>
                        <Text style={{ fontWeight: "300", color: color.color2 }}>{user?.email}</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                            <ButtonBox handler={navigateHandler} text={translations.Orders} icon={'format-list-bulleted-square'} />
                            <ButtonBox handler={navigateHandler} icon={'view-dashboard'} text={user?.role} reverse={true} />
                            <ButtonBox handler={navigateHandler} text={translations.Profile} icon={'pencil'} />
                        </View>
                        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-evenly' }}>
                            <ButtonBox handler={navigateHandler} text={translations.Password} icon={'format-list-bulleted-square'} />
                            <ButtonBox handler={navigateHandler} text={translations.SignOut} icon={'exit-to-app'} />
                        </View>
                    </View>
                </>
                )
            }
        </View>
        <Footer />
    </>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        elevation: 7,
        marginTop: 20,
        backgroundColor: color.color3,
        padding: 30,
        alignItems: 'center',
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
        color: color.color2

    }
})

export default Profile