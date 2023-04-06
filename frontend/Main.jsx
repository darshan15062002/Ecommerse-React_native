import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'



const Main = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
                <Stack.Group >
                    <Stack.Screen name='home' component={Home} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main