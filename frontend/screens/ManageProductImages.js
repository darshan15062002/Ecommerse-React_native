import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, formHeading } from '../styles/style'
import Header from '../components/Header'
import ImageCard from '../components/ImageCard'

import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ManageProductImages = ({ route }) => {
    const navigate = useNavigation()

    const [images] = useState(route.params.images)
    const [productId] = useState(route.params.id)
    const [image, setImage] = useState(null)
    const [imagechanged, setImageChanged] = useState(false)
    const submitHandler = () => {
        // images.push({_id:})
        // setImage(null)
    }

    useEffect(() => {
        if (route.params?.image) {
            setImage(route.params.image)
            setImageChanged(true)

        }
    }, [route.params])




    const deleteHandler = () => {

    }
    const loading = false









    return (
        <View style={{
            ...defaultstyling,
            backgroundColor: color.color5,

        }} >
            <Header back={true} />
            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={formHeading}> Product Images</Text>
            </View>
            <ScrollView style={{
                marginBottom: 20,
            }}>
                <View style={{
                    backgroundColor: color.color2,
                    padding: 40,
                    minHeight: 400
                }}>
                    {
                        images.map((i) => (
                            <ImageCard src={i.url} key={i._id} id={i._id} deleteHandler={deleteHandler} />
                        ))
                    }


                </View>
            </ScrollView>
            <View style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: color.color3
            }}>
                <Image style={{
                    backgroundColor: color.color2,
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                    resizeMode: 'contain'
                }} source={{ uri: image }} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate.navigate("camera", { updateproduct: true })}>
                        <Avatar.Icon icon={'camera'} style={{
                            backgroundColor: color.color2,
                            margin: 10,
                        }} />
                    </TouchableOpacity>


                </View>

                <Button style={{
                    backgroundColor: color.color1,
                    padding: 6,
                }} textColor={color.color2} loading={loading} onPress={submitHandler} disabled={!imagechanged}>Add</Button>

            </View>
        </View >
    )
}

export default ManageProductImages