import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


export const CartEmpty = () => {
    return (
        <>
            <View className="flex-1 px-6">
                <View className="justify-center items-center flex-1 space-y-5 
                h-[75%]">
                    <View className="w-56 h-56 bg-white rounded-full justify-center items-center">
                        <FontAwesome name="shopping-basket" size={64} color="#0f766e" />
                    </View>
                    <Text className="font-bold text-lg text-white">CART IS EMPTY</Text>
                </View>

                <Pressable className="shadow-lg shadow-teal-200 bg-teal-900 py-5 rounded-full">
                    <Text className="text-white text-center text-base font-bold">START SHOPPING</Text>
                </Pressable>
            </View>
        </>
    )
}
