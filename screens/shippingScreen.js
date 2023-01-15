import { useNavigation } from "@react-navigation/native"
import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



export const ShippingScreen = () => {

    const navigation = useNavigation();

    return (
        <>

            <View className="flex-1 bg-teal-700 py-6">
                <SafeAreaView>
                    {/* header */}
                    <View className="pt-10 pb-6">
                        <Text className="text-center text-white font-bold text-lg">DELIVERY ADDRESS</Text>
                    </View>

                    {/* inputs */}
                    <View className="h-full bg-white px-6 py-5">

                        <View className="space-y-1.5">
                            <Text className="text-sm font-bold text-teal-700">ENTER CITY</Text>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 px-6 py-3 mb-6">
                                <TextInput
                                    placeholder='Lagos...'
                                    className="flex-1"
                                />
                            </View>
                        </View>

                        <View className="space-y-1.5">
                            <Text className="text-sm font-bold text-teal-700">ENTER COUNTRY</Text>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 px-6 py-3 mb-6">
                                <TextInput
                                    placeholder='Nigeria'
                                    className="flex-1"
                                />
                            </View>
                        </View>

                        <View className="space-y-1.5">
                            <Text className="text-sm font-bold text-teal-700">ENTER POSTAL CODE</Text>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 px-6 py-3 mb-6">
                                <TextInput
                                    placeholder='200001'
                                    className="flex-1"
                                />
                            </View>
                        </View>

                        <View className="space-y-1.5">
                            <Text className="text-sm font-bold text-teal-700">ENTER ADDRESS</Text>
                            <View className="border rounded-lg bg-slate-100 border-teal-900 px-6 py-3 mb-6">
                                <TextInput
                                    placeholder='200001'
                                    className="flex-1 pb-4"
                                    multiline
                                />
                            </View>
                        </View>

                        <Pressable onPress={() => navigation.navigate("Checkout")} className="shadow-lg shadow-teal-200 bg-teal-700 py-4 mt-5 rounded-full">
                            <Text className="text-white text-center text-lg font-semibold">CONTINUE</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </View>

        </>
    )
}