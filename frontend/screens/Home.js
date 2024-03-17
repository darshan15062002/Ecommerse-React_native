import { View, Text, TextInput, TouchableOpacity, ScrollView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, defaultstyling } from "./../styles/style"
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../redux/actions/productAction'
import { useSetCategory } from '../utils/hooks'
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { englishText, gujaratiText, hindiText } from '../utils/language'





const Home = () => {
    const navigate = useNavigation();
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)
    const { products } = useSelector((state) => state.product)
    const { language } = useSelector((state) => state.appLanguage);
    const translations = language === 'English' ? englishText : (language === 'Hindi' ? hindiText : gujaratiText); const [catogory, setCatogory] = useState('')
    const [catogories, setCatogories] = useState([])
    const isFocused = useIsFocused()
    const [activesearch, setActiveSearch] = useState(false)
    const [searchquery, setSearchQuery] = useState('')

    useSetCategory(setCatogories, isFocused)


    const categoryButtonHandler = (id) => {
        setCatogory(id)
        console.log(id);

    }


    useEffect(() => {
        const timeOutId = setTimeout(() => {

            dispatch(getAllProduct(searchquery, catogory))
        }, 500)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [dispatch, searchquery, catogory, isFocused])



    const addToCartHandler = (id, name, price, image, stock) => {


        if (stock === 0) {
            Toast.show({
                type: 'error',
                text1: 'Out Of Stock'
            })
        }


        dispatch({
            type: 'addToCart',
            payload: {
                product: id,
                name, price, image, stock, quntity: 1
            }
        })


        Toast.show({
            type: 'success',
            text1: 'Added to cart'
        })
    }



    return (
        <><Header back={false} emptyCart={false} />
            {activesearch && <SearchModal searchquery={searchquery} setSearchQuery={setSearchQuery} setActiveSearch={setActiveSearch} products={products} />}
            <View style={defaultstyling}>


                <View style={{ paddingTop: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Heading */}
                    <Heading text1={translations.Our} text2={translations.Product} />

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
                            <Button style={{ backgroundColor: catogory == item._id ? color.color1 : color.color5, borderRadius: 100, margin: 5 }} key={item._id} onPress={() => categoryButtonHandler(item._id)}>
                                <Text style={{ fontSize: 12, color: catogory == item._id ? color.color2 : 'gray' }}>{item.category}</Text>
                            </Button>))}
                    </ScrollView>
                </View>
                {/* Product */}

                <View style={{ flex: 1 }}>
                    <ScrollView vertical showsVerticalScrollIndicator={false}>
                        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                            {products?.map((item, index) => (<ProductCard
                                stock={item.stock} name={item.name}
                                price={item.price}
                                image={item.images[0].imgUrl}
                                addToCartHandler={addToCartHandler}
                                id={item._id} key={item._id}
                                i={index}
                                navigate={navigate} />))}
                        </View>
                    </ScrollView>

                </View>
                {/* footer */}




            </View>
            <Footer />

        </>
    )
}

export default Home