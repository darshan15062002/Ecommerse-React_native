import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { color, defaultstyling } from '../styles/style'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
// import { defaultstyling } from '../styles/style'
const catogories = [{ name: 'bag', _id: 'bdfb' }, { name: 'college', _id: 'bsdvb' }, { name: 'bottle', _id: 'bsdafb' }, { name: 'watch', _id: 'bewdfb' }, { name: 'pants', _id: 'bdhfb' }, { name: 'shirt', _id: 'dbdfb' }, { name: 'jeans', _id: 'bftdfb' }]
export const products = [
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 1, imgUrl: 'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 2, imgUrl: 'https://freepngimg.com/thumb/shoes/21729-4-saucony-grid-9000.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 3, imgUrl: 'https://freepngimg.com/thumb/shoes/27399-2-female-shoes-hd.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 4, imgUrl: 'https://freepngimg.com/thumb/shoes/27518-9-nike-shoes-file.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 5, imgUrl: 'https://freepngimg.com/thumb/shoes/26230-6-nike-shoes-clipart.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 6, imgUrl: 'https://freepngimg.com/thumb/shoes/28084-5-sneaker-transparent-image.png' },
    { price: 1000, category: "shoe", stock: 4, name: 'Campus', _id: 7, imgUrl: 'https://freepngimg.com/thumb/shoes/21849-6-dock-shoes.png' }]
const Home = () => {
    const navigate = useNavigation();
    const [catogory, setCatogory] = useState('')
    const [activesearch, setActiveSearch] = useState(false)
    const [searchquery, setSearchQuery] = useState('')
    const catogoruButtonHandler = (id) => {
        setCatogory(id)
        console.log(id);
    }

    const addToCartHandler = (id) => {

    }
    return (
        <><Header back={false} emptyCart={false} />
            {activesearch && <SearchModal searchquery={searchquery} setSearchQuery={setSearchQuery} setActiveSearch={setActiveSearch} products={products} />}
            <View style={defaultstyling}>


                <View style={{ paddingTop: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Heading */}
                    <Heading text1={'Our'} text2={'Product'} />
                    {/* SearchBar */}
                    <View>
                        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
                            <Avatar.Icon icon={'magnify'} color='gray' size={50} style={{ backgroundColor: color.color2, elevation: 12 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* catogories button */}
                <View style={{ flexDirection: 'row', height: 80 }}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }} >
                        {catogories.map((item, index) => (
                            <Button style={{ backgroundColor: catogory == item._id ? color.color1 : color.color5, borderRadius: 100, margin: 5 }} key={item._id} onPress={() => catogoruButtonHandler(item._id)}>
                                <Text style={{ fontSize: 12, color: catogory == item._id ? color.color2 : 'gray' }}>{item.name}</Text>
                            </Button>))}
                    </ScrollView>
                </View>
                {/* Product */}

                <View style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {products.map((item, index) => (<ProductCard stock={item.stock} name={item.name} price={item.price} image={item.imgUrl} addToCartHandler={addToCartHandler(item._id)} id={item._id} key={item._id} i={index} navigate={navigate} />))}
                    </ScrollView>

                </View>
                {/* footer */}




            </View>
            <Footer />

        </>
    )
}

export default Home