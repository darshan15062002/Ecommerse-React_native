import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { color, defaultstyling } from '../styles/style';
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH
const name = 'Campus'
const stock = 5
const price = 120
const description = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo repudiandae, harum ducimus tempore, aliquam beatae vel optio corporis magni voluptatibus vitae id omnis, similique quod! Harum rem autem aperiam quisquam, necessitatibus quidem, perspiciatis asperiores distinctio, cum natus quas? Itaque cupiditate veniam rem illo eius porro deserunt maiores perferendis consectetur. Quidem nihil ipsam iusto repellendus porro voluptate eligendi veniam animi accusamus. Minima illum fugiat laudantium eligendi doloribus fuga ea sequi accusamus!'
const images = [{ price: 1000, name: 'campuse', _id: 1, imgUrl: 'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png' },
{ price: 1000, name: 'campuse', _id: 2, imgUrl: 'https://freepngimg.com/thumb/shoes/21729-4-saucony-grid-9000.png' },
{ price: 1000, name: 'campuse', _id: 3, imgUrl: 'https://freepngimg.com/thumb/shoes/27399-2-female-shoes-hd.png' },
{ price: 1000, name: 'campuse', _id: 4, imgUrl: 'https://freepngimg.com/thumb/shoes/27518-9-nike-shoes-file.png' },
{ price: 1000, name: 'campuse', _id: 5, imgUrl: 'https://freepngimg.com/thumb/shoes/26230-6-nike-shoes-clipart.png' },
{ price: 1000, name: 'campuse', _id: 6, imgUrl: 'https://freepngimg.com/png/28084-sneaker-transparent-image' },
{ price: 1000, name: 'campuse', _id: 7, imgUrl: 'https://freepngimg.com/thumb/shoes/21849-6-dock-shoes.png' }]

const ProductDetails = ({ route }) => {
    const [quantity, setQuantity] = useState(12)
    const isCarousel = useRef(null)
    console.log(route.params.id);

    const incrementQty = () => {
        if (quantity >= stock) return
        setQuantity((prev) => prev + 1)
    }
    const decrementQty = () => {
        if (quantity <= 0) return
        setQuantity((prev) => prev - 1)
    }

    const addToCartHandler = () => {
        if (stock === 0) return Toast.show({
            type: 'error',
            text1: 'Out Of Stock'
        });
        Toast.show({
            type: 'success',
            text1: 'Successfully Added'
        })
    }



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
                    <Button icon={'cart'} style={style.btn} textColor={color.color2}>ADD TO CART</Button>
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