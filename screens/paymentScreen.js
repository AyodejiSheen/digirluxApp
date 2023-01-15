import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const PaymentScreen = () => {

    const navigation = useNavigation();

    const paymentMethod = [
        {
            image: require('../assets/paypal.png'),
            alt: "paypal",
            icon: "fontAwesome"
        },

        {
            image: require('../assets/mastercard.webp'),
            alt: "mastercard",
            icon: "Ionicons"
        }
    ]


    return (
        <>

            <View className="flex-1 bg-teal-700 py-6">
                <SafeAreaView>
                    {/* header */}
                    <View className="pt-10 pb-6">
                        <Text className="text-center text-white font-bold text-lg">PAYMENT METHOD</Text>
                    </View>

                    {/* inputs */}
                    <View className="h-full bg-teal-50 px-6 py-5 space-y-4">
                        {
                            paymentMethod.map((each, i) => {
                                return (
                                    <View key={i} className="bg-white items-center px-4 py-2 flex flex-row  justify-between rounded-xl">
                                        <View>
                                            <Image source={each.image} alt={each.alt} resizeMode="contain" className="w-14 h-14" />
                                        </View>

                                        {
                                            each.icon === "Ionicons" ? <Ionicons name="checkmark-circle" size={30} color="teal" /> : <FontAwesome name="circle-thin" size={30} color="teal" />
                                        }
                                    </View>
                                )
                            })
                        }
                        <View>
                            <Pressable onPress={() => navigation.navigate('PlaceOrder')} className="shadow-lg shadow-teal-200 bg-teal-700 py-4 mt-5 rounded-full">
                                <Text className="text-white text-center text-lg font-semibold">CONTINUE</Text>
                            </Pressable>
                            <Text className="italic text-center mt-4">Payment method is <Text className="font-bold italic">Card Payment</Text> by default</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}