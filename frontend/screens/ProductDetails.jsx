import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { color, defaultstyling } from '../styles/style';
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { getProductDetails } from '../redux/actions/productAction';
import { englishText, hindiText } from '../utils/language';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH


const ProductDetails = ({ route }) => {
    const { language } = useSelector((state) => state.appLanguage);
    const translations = language === 'English' ? englishText : hindiText;

    const dispatch = useDispatch()
    const isFocuse = useIsFocused()
    const { product: { _id, name, price, description, stock, images, quntity } } = useSelector(state => state.product)


    const [quantity, setQuantity] = useState(1)

    const isCarousel = useRef(null)


    const incrementQty = () => {
        if (quantity >= stock) return
        setQuantity((prev) => prev + 1)
    }
    const decrementQty = () => {
        if (quantity <= 1) return
        setQuantity((prev) => prev - 1)
    }

    const addToCartHandler = () => {
        if (stock === 0) return Toast.show({
            type: 'error',
            text1: 'Out Of Stock'
        });

        dispatch({
            type: 'addToCart',
            payload: {
                product: _id,
                name, price, image: images[0].imgUrl, stock, quntity: quantity
            }
        })
        Toast.show({
            type: 'success',
            text1: 'Added to Cart'
        })


    }


    useEffect(() => {
        dispatch(getProductDetails(route.params.id))
    }, [dispatch, route.params.id, isFocuse])


    return (
        <View style={{ ...defaultstyling, padding: 0, backgroundColor: color.color1 }}>
            <Header back={true} />
            {/* carousel */}
            <Carousel
                layout='stack'
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem} />

            <View style={{ backgroundColor: color.color2, padding: 35, flex: 1, marginTop: -380, borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>
                <Text numberOfLines={2} style={{
                    fontSize: 25
                }}>{name}</Text>
                <Text numberOfLines={2} style={{
                    fontSize: 18, fontWeight: '900'
                }}>${price}</Text>
                <Text numberOfLines={8} style={{
                    lineHeight: 20,
                    letterSpacing: 1,
                    marginVertical: 16
                }}>{description}</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{ color: color.color3 }}>Quentity</Text>
                    <View style={{
                        width: 80,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={decrementQty}>
                            <Avatar.Icon icon={'minus'} size={20} style={{
                                backgroundColor: color.color5,
                                height: 25,
                                width: 25,
                                borderRadius: 5
                            }} />
                        </TouchableOpacity>
                        <Text style={style.quantity}>{quantity}</Text>
                        <TouchableOpacity onPress={incrementQty}>
                            <Avatar.Icon icon={'plus'} size={20} style={{
                                backgroundColor: color.color5,
                                height: 25,
                                width: 25,
                                borderRadius: 5
                            }} />
                        </TouchableOpacity>

                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
                    <Button icon={'cart'} style={style.btn} textColor={color.color2}>{translations.addToCart}</Button>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
        <Image source={{ uri: item.imgUrl }} style={style.images} />
    </View>
)


const style = StyleSheet.create({
    container: {
        backgroundColor: color.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380
    },
    images: {
        width: ITEM_WIDTH,
        resizeMode: 'contain',
        height: 250
    },
    quantity: {
        backgroundColor: color.color4,
        height: 24,
        width: 24,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: color.color5
    },
    btn: {
        backgroundColor: color.color3,
        borderRadius: 100,
        marginVertical: 10,
        padding: 5
    }
})
export default ProductDetails