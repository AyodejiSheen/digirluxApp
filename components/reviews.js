import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { Rating } from './rating'

export const Reviews = () => {

    const [rating, setRating] = useState('');
    const [comment, setComment] = useState()

    return (
        <>

            <View className="my-9">
                <Text className="text-lg font-bold">REVIEWS</Text>
                {/* IF THERE IS NO REVIEWS */}
                {/* <View className="p-2 bg-teal-600 mt-5 rounded-lg">
                    <Text className="text-center text-white p-3 font-bold text-base">NO REVIEW</Text>
                </View> */}


                {/* IF THERE IS REVIEWS */}
                <View className="p-3 bg-teal-600 mt-5 rounded-lg">
                    <Text className="text-lg font-bold text-white">User Doe</Text>
                    <Rating value={4} />
                    <Text className="my-3 text-xs text-slate-300">Jan 12 2022</Text>
                    <View className="bg-white p-3 rounded-md">
                        <Text className="text-sm p-2"> Some Skia effects rely on advanced GPU features, which may be slow to run on the CPU depending on the kind of effect you are using.</Text>
                    </View>
                </View>

                {/* WRITE REVIEW */}

                {/* <View className="mt-6">
                    <Text className="text-lg font-bold mb-4">REVIEW THIS PRODUCT</Text>

                    <View className="space-y-3">
                        <View className="space-y-2">
                            <Text className="text-base font-semibold">Rating</Text>
                            <Picker
                                selectedValue={rating}
                                onValueChange={(itemValue, itemIndex) =>
                                    setRating(itemValue)}
                                style={{ backgroundColor: "#0f766e", color: 'white' }}
                                dropdownIconColor={'white'}
                            >
                                <Picker.Item label="Choose Rate" disabled value="null" />
                                <Picker.Item label="1 - Poor" value="1" />
                                <Picker.Item label="2 - Fair" value="2" />
                                <Picker.Item label="3 - Good" value="3" />
                            </Picker>
                        </View>

                        <View className="space-y-2">
                            <Text className="text-base font-semibold">Comment</Text>
                            <TextInput
                                placeholder='This product is good ...'
                                multiline
                                className="w-full bg-slate-100 rounded-lg p-4"
                                onChangeText={(e) => setComment(e)}
                            />
                            <Pressable className="shadow-lg shadow-teal-200 bg-teal-800 py-5 rounded-full mt-10">
                                <Text className="text-white text-center text-base font-bold">SUBMIT</Text>
                            </Pressable>
                        </View>
                    </View>
                </View> */}


                {/* NOT LOGGED IN */}

                {/* <View className="p-3 bg-black mt-5 rounded-lg">
                    <Text className="text-center text-white p-2  text-base">Please Login to write a review</Text>
                </View> */}

            </View>

        </>
    )
}
