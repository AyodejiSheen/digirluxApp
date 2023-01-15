import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/homeScreen';
import { SingleProductScreen } from '../screens/SingleProductScreen';
import { ShippingScreen } from '../screens/shippingScreen';
import { PaymentScreen } from '../screens/paymentScreen';
import { PlaceOrder } from '../screens/placeOrder';





const StackNav = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={SingleProductScreen} />
            <Stack.Screen name="Shipping" component={ShippingScreen} />
            <Stack.Screen name="Checkout" component={PaymentScreen} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
        </Stack.Navigator>
    )
}

export default StackNav