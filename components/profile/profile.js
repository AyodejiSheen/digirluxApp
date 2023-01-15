import { AntDesign } from '@expo/vector-icons'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';




export const Profile = () => {

    const Inputs = [
        {
            label: "USERNAME",
            type: "text"
        },
        {
            label: "EMAIL ADDRESS",
            type: "email",
        },
        {
            label: "PASSWORD",
            type: "password"
        }
    ]

    return (
        <>
            <View className="bg-white px-6">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="mt-5 pb-10">

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

                        <View className="border rounded-lg bg-slate-100 border-teal-900 justify-between px-6 flex flex-row items-center py-3 mb-6">
                            <TextInput
                                placeholder='New Password'
                                secureTextEntry={true}
                                className="flex-1"
                            />

                            <View className="w-18">
                                <AntDesign name="eye" size={18} color="black" />
                            </View>
                        </View>

                        <Pressable className="shadow-lg shadow-teal-200 bg-teal-700 py-4  rounded-full">
                            <Text className="text-white text-center text-lg font-semibold">UPDATE PROFILE</Text>
                        </Pressable>

                    </View>
                </ScrollView>
            </View>
        </>
    )
}