import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling, formHeading, inputStyleing } from '../styles/style'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { inputOption } from './Categories'
import SelectComponent from '../components/SelectComponent'

const EditProduct = ({ route }) => {
    const navigate = useNavigation()
    const loading = false
    const loadingOther = false
    const submitHandle = () => {
        console.log(name, description, price, stock, categoryID);

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
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const [categorys, setCategorys] = useState([{
        _id: 'bdsjbesd', category: 'shoe'
    },
    {
        _id: 'bdsjbefd', category: 'Slipper'
    },
    {
        _id: 'bdsjffsd', category: 'Sport Shoe'
    }])
    const [visible, setVisible] = useState(false)


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