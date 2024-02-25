import { View, Text, Platform, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { color } from '../styles/style'
import { StatusBar } from 'expo-status-bar'
import { Headline, Searchbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const SearchModal = ({ searchquery, setSearchQuery, products, setActiveSearch }) => {
    const navigate = useNavigation()
    const backAction = () => {
        setSearchQuery("")
        setActiveSearch(false)
        return true
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)
        return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
    })
    return (
        <View style={{ height: '100%', width: '100%', position: 'absolute', top: 0, zIndex: 100, backgroundColor: color.color2, padding: 35, paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }} >
            <SafeAreaView>
                <Searchbar placeholder='Search...' onChangeText={(query) => setSearchQuery(query)} value={searchquery} style={{ marginTop: 20 }} />

                <ScrollView>
                    <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
                        {
                            products.map((item, index) => (
                                <SearchItem key={item._id}
                                    imgUrl={item.images[0].imgUrl}
                                    name={item.name}
                                    price={item.price}
                                    handler={() => navigate.navigate('productdetails', { id: item._id })} />

                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const SearchItem = ({ key, name, imgUrl, price, handler }) => (

    < TouchableOpacity onPress={handler} >
        <View style={{
            padding: 20,
            backgroundColor: color.color2,
            elevation: 5,
            width: '100%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginVertical: 30
        }}>
            <Image key={key} source={{ uri: imgUrl }}
                style={{
                    width: 80,
                    height: 80,
                    position: 'absolute',
                    resizeMode: 'contain',
                    top: -15,
                    left: 10,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20
                }} />
            <View style={{ width: '80%', paddingHorizontal: 30 }} >
                <Text numberOfLines={1}>
                    {name}
                </Text>
                <Headline style={{ fontWeight: "900" }}>₹{price}</Headline>
            </View>


        </View>
    </TouchableOpacity >
)
export default SearchModal
