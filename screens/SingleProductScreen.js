import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Button, Image, Pressable, ScrollView, Text, View } from "react-native"
import NumericInput from "react-native-numeric-input"
import { SafeAreaView } from "react-native-safe-area-context"
import { Rating } from "../components/rating"
import { Reviews } from "../components/reviews"


export const SingleProductScreen = ({ route }) => {

    const [value, setValue] = useState(0)

    const navigation = useNavigation();

    const product = route.params

    return (
        <>

            <View className="flex-1 bg-white">
                <SafeAreaView>
                    <ScrollView className="px-6 " showsVerticalScrollIndicator={false}>
                        <Image source={{ uri: product.image }} alt="product_image" className="w-full h-[300px]" resizeMode="contain" />

                        <Text className="font-bold text-xl mb-2 leading-relaxed">{product.name}</Text>

                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                        <View className="flex-row my-5 space-x-2 justify-between items-center">
                            {
                                product.countInStock > 0 ?
                                <NumericInput value={value} totalWidth={140} totalHeight={40}
                                    onChange={(e) => setValue(e.target.value)}
                                    iconSize={25}
                                    step={1}
                                    maxValue={product.countInStock}
                                    minValue={0}
                                    borderColor={'#0f766e'}
                                    rounded
                                    textColor={'black'}
                                    iconStyle={{ color: 'white' }}
                                    rightButtonBackgroundColor={'#0f766e'}
                                    leftButtonBackgroundColor={'#0f766e'}
                                /> : <Text className="font-bold text-red-600 text-lg italic">Out of Stock</Text>
                            }

                            <Text className="font-black text-3xl">${product.price}</Text>
                        </View>

                        <Text className="leading-6 text-justify text-base text-slate-700">
                            {product.description}
                        </Text>

                        <Pressable onPress={() => navigation.navigate("Cart")} className="shadow-lg shadow-teal-200 bg-teal-800 py-5 rounded-full mt-10">
                            <Text className="text-white text-center text-base font-bold">ADD TO CART</Text>
                        </Pressable>

                        {/* REVIEWS`` */}
                        <Reviews />

                    </ScrollView>
                </SafeAreaView>
            </View>

        </>
    )
}