import React, { useState } from "react";
import { Image, Text, Pressable, TextInput, View, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const LoginScreen = ({navigation}) => {

    const [check, setCheck] = useState("welcome")

    return (
        <>
            <View className="flex-1 bg-white">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="p-10 space-y-10 ">
                        <View className="justify-center items-center">
                            <Image
                                resizeMode="contain"
                                className="m-auto h-56 w-56"
                                source={require('../assets/logo.png')}
                            />
                        </View>

                        <View className="absolute bg-teal-700 w-14 h-14 -ml-14 rounded-full">

                        </View>

                        <View className="space-y-3">
                            <View className="space-y-4">
                                <Text className="text-5xl  text-slate-600 font-bold">Hey,</Text>
                                <Text className="text-3xl text-slate-600  font-bold">Login Now.</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text className="text-lg text-slate-500">If you are new / </Text>
                                <Pressable onPress={() => navigation.navigate('Register')}>
                                    <Text className="font-semibold text-black text-lg">Create an Account</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-6">
                                <TextInput
                                    placeholder='Email Address'
                                    className="flex-1"
                                    type="email"
                                />

                                <View className="w-18">
                                    <FontAwesome name="envelope" size={18} color="black" />
                                </View>
                            </View>

                            <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-4">
                                <TextInput
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    className="flex-1"
                                />

                                <View className="w-18">
                                    <AntDesign name="eye" size={18} color="black" />
                                </View>
                            </View>
                            <Text className="mb-6 font-semibold text-right">Forgot Password?</Text>




                            <Pressable onPress={() => navigation.navigate('Bottom')} className="shadow-lg shadow-teal-200 bg-teal-800 py-4  rounded-lg">
                                <Text className="text-white text-center text-xl font-semibold">Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}