import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { products } from "../data/Products"

export const OrderItems = () => {
    return (
        <FlatList showsVerticalScrollIndicator={false} data={products} keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
                <Pressable>
                    <View className="mb-3">
                        <View className="flex-row items-center bg-white overflow-hidden rounded-xl">
                            <View className="items-center bg-teal-100 justify-center w-1/4">
                                <Image source={{ uri: item.image }} alt={item.name} className="w-full h-24 rounded-l-xl" resizeMode="contain" />
                            </View>

                            <View className="w-3/5 px-3 space-y-1">
                                <Text numberOfLines={1} className="font-bold">{item.name}</Text>
                                <Text numberOfLines={1} className="text-slate-500 font-bold text-base">${item.price}</Text>
                            </View>

                            <View className="justify-center items-center ">
                                <Pressable className="bg-green-600 px-3 py-2 rounded-lg">
                                    <Text className="text-white">5</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Pressable>
            }
        />
    )
}