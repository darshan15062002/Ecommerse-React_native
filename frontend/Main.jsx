import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import Toast from 'react-native-toast-message'
import Cart from './screens/Cart'
import Conformorder from './screens/Conformorder'
import Payment from './screens/Payment'
import Login from './screens/Login'
import Register from './screens/Register'
import Forget from './screens/Forget'
import Verify from './screens/Verify'
import Profile from './screens/Profile'
import UpdateProfile from './screens/UpdateProfile'
import UpdatePassword from './screens/UpdatePassword'
import Orders from './screens/Orders'







const Main = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
                <Stack.Group >

                    <Stack.Screen name='home' component={Home} />
                    <Stack.Screen name='productdetails' component={ProductDetails} />
                    <Stack.Screen name='cart' component={Cart} />
                    <Stack.Screen name='conformorder' component={Conformorder} />
                    <Stack.Screen name='payment' component={Payment} />
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='register' component={Register} />
                    <Stack.Screen name='forget-password' component={Forget} />
                    <Stack.Screen name='verify' component={Verify} />
                    <Stack.Screen name='profile' component={Profile} />
                    <Stack.Screen name='updateprofile' component={UpdateProfile} />
                    <Stack.Screen name='changepassword' component={UpdatePassword} />
                    <Stack.Screen name='orders' component={Orders} />



                </Stack.Group>
            </Stack.Navigator>
            <Toast position='top' topOffset={80} />
        </NavigationContainer>
    )
}

export default Main