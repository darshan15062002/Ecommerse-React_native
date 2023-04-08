import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import Toast from 'react-native-toast-message'
import Cart from './screens/Cart'







const Main = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
                <Stack.Group >

                    <Stack.Screen name='home' component={Home} />
                    <Stack.Screen name='productdetails' component={ProductDetails} />
                    <Stack.Screen name='cart' component={Cart} />

                </Stack.Group>
            </Stack.Navigator>
            <Toast position='top' topOffset={80} />
        </NavigationContainer>
    )
}

export default Main