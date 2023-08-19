import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { Avatar } from 'react-native-paper'
import { color } from '../styles/style'
import * as ImagePicker from 'expo-image-picker'

const CameraScreen = ({ navigation, route }) => {

    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(CameraType.back)
    const [camera, setCamera] = useState(null)


    console.log(route.params?.newProduct);
    const openImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permissionResult) return alert("Permission to access gallery is require")

        const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        console.log(data);

        if (route.params?.newProduct) return navigation.navigate('newproduct', {
            image: data.assets[0].uri
        })
        if (route.params?.updateproduct) return navigation.navigate('productimages', {
            image: data.assets[0].uri
        })
        if (route.params?.updateProfile) return navigation.navigate('profile', {
            image: data.assets[0].uri
        })
        else
            return navigation.navigate('register', {
                image: data.assets[0].uri
            })


    }
    const clickPicture = async () => {
        const data = await camera.takePictureAsync()
        console.log(data);

        if (route.params?.newProduct) return navigation.navigate('newproduct', {
            image: data.uri
        })
        if (route.params?.updateproduct) return navigation.navigate('productimages', {
            image: data.uri
        })
        if (route.params?.updateProfile) return navigation.navigate('profile', {
            image: data.uri
        })
        else
            return navigation.navigate('register', {
                image: data.uri
            })
    }


    useEffect(() => {
        const res = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status == 'granted')
        }
        res()
    }, [])

    if (hasPermission == null) return <View></View>

    if (hasPermission == false) return
    <View><Text>No access to camera</Text></View>






    return (
        <View style={{
            flex: 1,
        }}>
            <Camera type={type} style={{
                flex: 1,
                aspectRatio: 1
            }}
                ratio={'1:1'}
                ref={(e) => setCamera(e)} />
            <View style={{
                flexDirection: 'row',
                bottom: 10,
                width: '100%',
                justifyContent: 'space-evenly',
                position: 'absolute'

            }}>
                <MyIcon icon="image" handler={openImagePicker} />
                <MyIcon icon="camera" handler={clickPicture} />
                <MyIcon icon="camera" handler={() => {
                    setType(prev => prev === CameraType.back ? CameraType.front : CameraType.back)
                }} />


            </View>
        </View>

    )
}

const MyIcon = ({ icon, handler }) => (
    <TouchableOpacity onPress={handler}>
        <Avatar.Icon icon={icon} size={40} color={color.color2} style={{
            backgroundColor: color.color1
        }} />
    </TouchableOpacity>
)

export default CameraScreen