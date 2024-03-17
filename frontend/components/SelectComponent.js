import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Headline } from 'react-native-paper'
import { color } from '../styles/style'

const SelectComponent = ({ visible, setVisible, setCategory, setCategoryID, categorys }) => {

    const selectCategoryHandler = (item) => {
        console.log(item._id);
        setCategory(item.category)
        setCategoryID(item._id)
        setVisible(false)
    }
    return (
        visible && (<View style={styles.container}>
            <TouchableOpacity onPress={() => setVisible(false)}>
                <Avatar.Icon size={30} icon={'close'} styles={{
                    alignSelf: 'flex-end',
                    backgroundColor: color.color3
                }} />

            </TouchableOpacity>
            <Headline style={styles.heading} >Select a Category</Headline>
            <ScrollView>
                {
                    categorys.map(i => (
                        <Text key={i._id} style={styles.text} onPress={() => selectCategoryHandler(i)}>{i.category}</Text>

                    ))

                }

            </ScrollView>
        </View >)
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.color2,
        position: 'absolute',
        padding: 35,
        borderRadius: 20,
        width: '90%',
        height: '95%',
        alignSelf: 'center',
        top: 50,
        elevation: 5
    },
    heading: {
        textAlign: 'center',
        backgroundColor: color.color3,
        marginVertical: 10,
        borderRadius: 5,
        padding: 3,
        color: color.color2,
    },
    text: {
        fontSize: 17,
        fontWeight: "100",
        textTransform: 'uppercase'
    }
})

export default SelectComponent