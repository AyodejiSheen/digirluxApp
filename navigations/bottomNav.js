import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/homeScreen';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProfileScreen } from '../screens/profileScreen';
import { CartScreen } from '../screens/cartScreen';
import StackNav from './stackNav';







const CustomTab = ({ children, onPress }) => (
    <Pressable onPress={onPress} className="w-20 h-20 border-slate-100 border-2 -top-9 rounded-full bg-teal-600" style={{ elevation: 3 }}>
        {children}
    </Pressable>
)




const BottomNav = () => {

    const Tab = createBottomTabNavigator();



    return (
        <Tab.Navigator backBehavior="Main" initialRouteName="Main" screenOptions={{
            tabBarShowLabel: false, tabBarStyle: { ...styles.tab }, headerShown: false, tabBarHideOnKeyboard: true,
        }}>
            {/* home */}
            <Tab.Screen name="Main" component={StackNav} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Entypo name="home" size={24} color="teal" /> : <AntDesign name="home" size={24} color="black" />}
                    </View>
                )
            }} />

            {/* cart */}
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarButton: (props) => <CustomTab {...props} />,
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <FontAwesome5 name="shopping-basket" size={24} color="white" /> : <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />}
                    </View>
                )
            }} />

            {/* profile */}
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <FontAwesome name="user" size={24} color="teal" /> : <AntDesign name="user" size={24} color="black" />}
                    </View>
                )
            }} />

        </Tab.Navigator>
    )
}




const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: "white",
        height: 60
    },

    customTab: {
        backgroundColor: "teal",
        padding: "20px"
    }
})

export default BottomNav 