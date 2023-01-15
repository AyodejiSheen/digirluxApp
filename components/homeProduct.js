import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { products } from '../data/Products'
import { Rating } from "./rating"

export const HomeProduct = () => {

    const navigation = useNavigation();

    return (
        <>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="flex-row flex-wrap justify-between px-6">
                    {
                        products.map((product) => {
                            return (
                                <Pressable onPress={() => navigation.navigate("ProductDetails", product)} key={product.id} className="py-2 my-3 w-[47%] shadow-2xl shadow-black bg-white px-3 space-y-2 rounded-md">
                                    <Image
                                        resizeMode="contain"
                                        className="w-full h-24"
                                        alt={product.name}
                                        source={{ uri: product.image }}
                                    />

                                    <View>
                                        <Text className="text-2xl font-black">${product.price}</Text>
                                        <Text className="text-sm" numberOfLines={1}>{product.name}</Text>
                                        <Rating value={product.rating} />
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
} 