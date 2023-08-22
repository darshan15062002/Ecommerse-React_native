import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling, formHeading, inputStyleing } from '../styles/style'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { Button, TextInput } from 'react-native-paper'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { inputOption } from './Categories'
import SelectComponent from '../components/SelectComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, updateProductDetails } from '../redux/actions/productAction'
import { useMessageAndErrorOther, useSetCategory } from '../utils/hooks'

const EditProduct = ({ route }) => {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const isFoucsed = useIsFocused()
    const loading = false

    const { product } = useSelector((state) => state.product)
    console.log(product);
    const [categorys, setCategorys] = useState([])
    const [name, setName] = useState(product?.name)
    const [description, setDescription] = useState(product?.description)
    const [price, setPrice] = useState(`${product?.price}`)
    const [stock, setStock] = useState(`${product?.stock}`)
    const [category, setCategory] = useState(product?.category || "Select Category")
    const [categoryID, setCategoryID] = useState("")






    const submitHandle = () => {
        console.log(name, description, price, stock, category = categoryID);

        dispatch(updateProductDetails(name, description, price, stock, category = categoryID))


    }
    const [id] = useState(route.params.id)
    console.log(id);
    const images = [
        {
            _id: 'nksf vfksv formHeading',
            url: 'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png'
        },
        {
            url: 'https://freepngimg.com/thumb/shoes/21729-4-saucony-grid-9000.png',
            _id: 'dfbknrgnvknsv s'
        }
    ]


    const [visible, setVisible] = useState(false)

    const loadingOther = useMessageAndErrorOther(dispatch, navigate, 'adminPanel')

    useSetCategory(setCategorys, isFoucsed)
    useEffect(() => {
        dispatch(getProductDetails(id))

    }, [dispatch, id, isFoucsed])


    return (
        <>
            <View style={{ ...defaultstyling, backgroundColor: color.color5 }}>
                <Header back={true} />
                <View style={{ marginVertical: 20, paddingTop: 60 }}>
                    <Text style={formHeading}>Update Product</Text>
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
                                <Button onPress={() => navigate.navigate("productimages", {
                                    id,
                                    images
                                })} textColor={color.color1}>Manage Images</Button>
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
                                    loading={loadingOther}
                                    disabled={loadingOther}
                                >
                                    Update
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

export default EditProduct