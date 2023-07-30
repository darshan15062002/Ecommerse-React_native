import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling, formHeading, inputStyleing } from '../styles/style'
import Header from '../components/Header'
import { Avatar, Button, TextInput } from 'react-native-paper'
export const inputOption = {
    mode: 'outlined',
    style: inputStyleing,
    activeOutlineColor: color.color1
}
const Categories = () => {
    const loading = true

    const [category, setCategory] = useState("")

    const categoryHandler = (text) => {

    }

    const categories = [{
        name: "Shoe",
        _id: "dvdfbdsbgbrtt"
    },
    {
        name: "slipper",
        _id: "dvdffvbdsbgbrtt"
    },
    {
        name: "Formal Shoe",
        _id: "dvsdvfbdsbgbrtt"
    },
    ]

    const deleteHandler = (id) => {
        console.log("dt");
    }


    return (
        <View style={defaultstyling}>
            <Header back={true} />

            <View style={{ marginVertical: 20, paddingTop: 60 }}>
                <Text style={formHeading}>Categories</Text>
            </View>

            <ScrollView style={{
                marginBottom: 20
            }}>
                <View style={{
                    backgroundColor: color.color2,
                    padding: 20,
                    minHeight: 400
                }}>
                    {
                        categories.map((item, index) => (
                            <CategoriesCard name={item.name} id={item._id} key={item._id} deleteHandler={deleteHandler} />
                        ))
                    }

                </View>
            </ScrollView>
            <View style={styles.container}>


                <TextInput {...inputOption} placeholder='Category' value={category} onChangeText={setCategory} />
                <Button textColor={color.color2} style={{
                    backgroundColor: color.color1,
                    margin: 20, padding: 6
                }} onPress={() => categoryHandler} loading={loading}>Add</Button>
            </View>

        </View>
    )
}


const CategoriesCard = ({ name, id, deleteHandler }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>{name}</Text>
            <TouchableOpacity onPress={() => deleteHandler(id)}>
                <Avatar.Icon icon={"delete"} size={30} style={{
                    backgroundColor: color.color1
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: color.color3
    },
    cardContainer: {
        backgroundColor: color.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 10
    },
    cardText: {
        fontWeight: 600,
        textTransfrom: 'uppercase',
        letterSpacing: 1

    }
})