import React from "react";
import { Image, Text, Pressable, TextInput, View, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const RegisterSreen = ({navigation}) => {
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

                        <View className="absolute bg-teal-700 w-14 h-14  rounded-full">

                        </View>

                        <View className="space-y-3">
                            <View className="space-y-2">
                                <Text className="text-5xl  text-slate-600 font-bold">Welcome!</Text>
                                <Text className="text-3xl text-slate-600  font-bold">Register Now.</Text>
                            </View>

                            <View className="flex-row items-center">
                                <Text className="text-lg text-slate-500">Already have an Account? / </Text>
                                <Pressable onPress={() => navigation.navigate('Login')}>
                                    <Text className="font-semibold text-black text-lg">Login</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-6">
                                <TextInput
                                    placeholder='Full Name'
                                    className="flex-1"
                                />

                                <View className="w-18">
                                    <AntDesign name="user" size={18} color="black" />
                                </View>
                            </View>

                            <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-6">
                                <TextInput
                                    placeholder='Email Address'
                                    className="flex-1"
                                />

                                <View className="w-18">
                                    <FontAwesome name="envelope" size={18} color="black" />
                                </View>
                            </View>

                            <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-6">
                                <TextInput
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    className="flex-1"
                                />

                                <View className="w-18">
                                    <AntDesign name="eye" size={18} color="black" />
                                </View>
                            </View>
                            <Pressable onPress={() => navigation.navigate('Bottom')} className="shadow-lg shadow-teal-200 bg-teal-700 py-4  rounded-lg">
                                <Text className="text-white text-center text-xl font-semibold">Register</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>



        </>
    )
}