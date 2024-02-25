import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';



const Language = () => {
    const dispatch = useDispatch();

    const { language } = useSelector((state) => state.appLanguage);

    const [show, setShow] = useState(false)
    // const [language, setLanguage] = useState('English');

    const languages = [
        {

            name: 'English',
        },
        {

            name: 'Hindi',
        },
        {
            name: "Gujarati"
        }
    ];

    const handleLanguageChange = (lan) => {
        // Update the app's language
        console.log(lan.name);
        dispatch({
            type: 'UPDATE_APP_LANGUAGE',
            payload: lan.name,
        });
    };
    return (
        <TouchableOpacity style={style.container} onPress={() => setShow((prev) => !prev)}>
            <Text style={style.name}>{language}</Text>
            {show && (
                <View style={style.languageSelector}>
                    {languages.map((language, index) => (
                        <TouchableOpacity
                            key={index}
                            style={style.languageOption}
                            onPress={() => handleLanguageChange(language)}
                        >
                            <Text style={style.languageName}>{language.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 15,
        top: 15,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        borderStyle: 'solid',


    },
    name: {
        fontSize: 10,
        fontWeight: "500",

        color: 'white',

    },
    languageSelector: {
        position: 'absolute',
        zIndex: 10,
        top: 30,
        right: 5,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    languageOption: {
        padding: 5,
    },
    languageName: {
        fontSize: 10,
        color: '#000',
    },
})

export default Language