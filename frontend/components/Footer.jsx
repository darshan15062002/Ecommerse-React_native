import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { color } from '../styles/style';
import { Avatar } from 'react-native-paper';

const Footer = ({ activeRoute = 'home' }) => {
    const navigate = useNavigation();
    const loading = false
    const isAuthanticated = true;
    const navigationHandler = (key) => {
        switch (key) {
            case 0:
                navigate.navigate('home')
                break;
            case 1:
                navigate.navigate('cart')
                break
            case 2:
                if (isAuthanticated) navigate.navigate('profile')
                else navigate.navigate('login')
                break
            default:
                navigate.navigate('home')
                break;
        }
    }
    return loading === false && (
        <View style={{ backgroundColor: color.color1, borderTopLeftRadius: 120, borderTopRightRadius: 120, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(1)}>
                    <Avatar.Icon icon={activeRoute === 'cart' ? 'shopping' : 'shopping-outline'} style={{ color: color.color3, backgroundColor: color.color1, }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(2)}>
                    <Avatar.Icon icon={isAuthanticated == true ? activeRoute === 'profile' ? 'account' : 'account-outline' : 'login'} style={{ color: color.color3, backgroundColor: color.color1, }} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    position: 'absolute',
                    width: 80,
                    height: 80,
                    backgroundColor: color.color2,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: -50,
                    alignSelf: 'center'
                }}>
                <View
                    style={{
                        borderRadius: 100, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigationHandler(0)}>
                        <Avatar.Icon icon={activeRoute === 'home' ? 'home' : 'home-outline'} style={{ backgroundColor: color.color1 }} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Footer