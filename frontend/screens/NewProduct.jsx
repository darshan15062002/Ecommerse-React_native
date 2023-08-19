import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, formHeading, inputStyleing } from '../styles/style'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { Avatar, Button, TextInput } from 'react-native-paper'

import { inputOption } from './Categories'
import SelectComponent from '../components/SelectComponent'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useMessageAndErrorOther, useSetCategory } from '../utils/hooks'
import { useDispatch } from 'react-redux'
import { newProduct } from '../redux/actions/updateUserAction'
import mime from 'mime'

const NewProduct = ({ route, navigation }) => {
    const navigate = useNavigation()

    const isFoucsed = useIsFocused()
    const dispatch = useDispatch()


    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("Select Category")
    const [categoryID, setCategoryID] = useState("")
    const [categorys, setCategorys] = useState([])
    const [visible, setVisible] = useState(false)

    useSetCategory(setCategorys, isFoucsed)
    const disableBtnCondition =
        !name || !description || !price || !stock || !image;


    useEffect(() => {
        if (route.params?.image) return setImage(route.params.image)


    }, [route.params])

    const submitHandle = () => {
        console.log(name, description, price, stock, image, categoryID);

        const myForm = new FormData();
        myForm.append("name", name);
        myForm.append("description", description);
        myForm.append("price", price);
        myForm.append("stock", stock);
        myForm.append("file", {
            uri: image,
            type: mime.getType(image),
            name: image.split("/").pop(),
        })
        if (categoryID) myForm.append("category", categoryID);

        dispatch(newProduct(myForm))


    }

    const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel");




    return (
        <>
            <View style={{ ...defaultstyling, backgroundColor: color.color5 }}>
                <Header back={true} />
                <View style={{ marginVertical: 20, paddingTop: 60 }}>
                    <Text style={formHeading}>New Product</Text>
                </View>

                {
                    loading ? <Loading /> : (
                        <ScrollView style={{
                            padding: 20,
                            elevation: 10,
                            borderRadius: 10,
                            backgroundColor: color.color3
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                height: 650,
                            }}>
                                <View style={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: 'center',
                                    marginBottom: 20
                                }}>
                                    <Avatar.Image size={80} style={{
                                        backgroundColor: color.color1
                                    }}
                                        source={{
                                            uri: image ? image : null
                                        }} />

                                    <TouchableOpacity onPress={() => navigate.navigate("camera", { newProduct: true })}>
                                        <Avatar.Icon icon={'camera'} size={30} color={color.color3} style={{
                                            backgroundColor: color.color2,
                                            position: 'absolute',
                                            bottom: 0,
                                            right: -5

                                        }} />
                                    </TouchableOpacity>



                                </View>


                                <TextInput {...inputOption} placeholder='Name' value={name} onChangeText={setName} />
                                <TextInput {...inputOption} placeholder='Description' value={description} onChangeText={setDescription} />
                                <TextInput {...inputOption} placeholder='Price' value={price} onChangeText={setPrice} keyboardType={'number-pad'} />
                                <TextInput {...inputOption} placeholder='Stock' value={stock} onChangeText={setStock} />
                                <Text style={{ ...inputStyleing, textAlign: 'center', borderRadius: 3, textAlignVertical: 'center' }} onPress={() => setVisible(true)}>{category}</Text>

                                <Button textColor={color.color2} style={{
                                    backgroundColor: color.color1,
                                    margin: 20,
                                    padding: 6,
                                }}
                                    onPress={submitHandle}
                                    loading={loading}
                                    disabled={disableBtnCondition || loading}
                                >
                                    Create
                                </Button>




                            </View>


                        </ScrollView>
                    )
                }
            </View>
            <SelectComponent visible={visible} setVisible={setVisible} setCategory={setCategory} setCategoryID={setCategoryID} categorys={categorys} />
        </>
    )
}


export default NewProduct