import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// import SplashScreen from '../screens/SplahScreen'
// import Login from '../screens/Login'
// import OTP from '../screens/OTP'
// import HomeScreen from '../screens/HomeScreen'
import Index, { HomeScreen, KomisiScreen, Login, NotifScreen, OTP, RangkingScreen, SplashScreen, LayananPelangganScreen, FAQScreen, DetailJamaah } from '../screens/index'
import { NavigationContainer } from '@react-navigation/native'; 
const Stack   = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='OTP' component={OTP} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='RangkingScreen' component={RangkingScreen} />
            <Stack.Screen name='KomisiScreen' component={KomisiScreen} />
            <Stack.Screen name='NotifScreen' component={NotifScreen} />
            <Stack.Screen name='LayananPelangganScreen' component={LayananPelangganScreen} />
            <Stack.Screen name='FAQScreen' component={FAQScreen} />
            <Stack.Screen name='DetailJamaah' component={DetailJamaah} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation