import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { OrderInfo } from "../components/orderInfo"
import { OrderItems } from "../components/orderItem"
import PlaceOrdermodal from "../components/placeOrdermodal"



export const PlaceOrder = () => {
    return (
        <>
            <View className="flex-1 bg-teal-600 pt-6">
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View className="mt-10 relative">
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <OrderInfo title="CUSTOMER" subTitle="John Doe" text="admin@gmail.com" icon={<FontAwesome name="user" size={30} color="white" />} />
                                <OrderInfo title="SHIPPING INFO" subTitle="Shipping: Tanzania" text="Payment Method: Paypal" icon={<FontAwesome5 name="shipping-fast" size={30} color="white" />} />
                                <OrderInfo title="DELIVER TO" subTitle="Address:" text="N0.36, Surulere Area, Ikirun, Osun State" icon={<Ionicons name="location-sharp" size={30} color="white" />} />
                            </ScrollView>
                        </View>

                        {/* order items */}
                        <View className="px-6 flex-1 mt-5 pb-3">
                            <Text className="font-bold text-lg my-4 text-white">PRODUCTS</Text>
                            <View className="h-[300px] mb-6">
                                <OrderItems />
                            </View>

                            {/* total */}
                            <PlaceOrdermodal />
                        </View>
                </ScrollView>
            </View>

        </>
    )
}