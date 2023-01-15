import { useNavigation } from "@react-navigation/native"
import { Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CartEmpty } from "../components/cartEmpty"
import { CartItems } from "../components/cartItems"



export const CartScreen = () => {

    const navigation = useNavigation();

    return (
        <>

            <View className="flex-1 bg-teal-900 pb-24">
                <SafeAreaView>
                    <View className="w-full py-5">
                        <Text className="text-2xl text-center font-extrabold text-white">Cart</Text>
                    </View>

                    {/* IF CART IS EMPTY */}
                    {/* <CartEmpty/> */}

                    {/* CART items */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CartItems />

                        {/* total */}

                        <View className=" px-6 mt-5">
                            <View className="flex flex-row justify-between border-white border-2 bg-white h-12 items-center rounded-full">
                                <View className="pl-6">
                                    <Text className=" text-base  font-bold">Total</Text>
                                </View>

                                <View>
                                    <Pressable className="bg-teal-700 h-11 rounded-full text-center flex items-center flex-row px-10">
                                        <Text className="text-lg font-black text-white">$346</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>


                        {/* checkout button */}
                        <View className="px-6">
                            <Pressable onPress={() => navigation.navigate('Shipping')} className="bg-black border-2 border-white mt-10 rounded-full py-4">
                                <Text className="text-white text-lg text-center font-semibold">CHECKOUT</Text>
                            </Pressable>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </View>

        </>
    )
}