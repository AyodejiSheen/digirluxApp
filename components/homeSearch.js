import { Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";




export const HomeSearch = () => {

    const navigation = useNavigation();

    return (
        <>
            <View className="pt-12 pb-6 bg-teal-800">
                <SafeAreaView>
                    <View className="bg-teal-800 px-6">
                        <View className="flex-row  gap-6 items-center">
                            <TextInput
                                placeholder='Nike, Puma, Adidas'
                                className="flex-1 bg-white rounded-lg p-3 shadow-md"
                                type="search"
                            />
                            <Pressable onPress={() => navigation.navigate('Cart')} className="relative">
                                <FontAwesome5 name="shopping-basket" size={24} color="white" />
                                <Text className="bg-red-600 rounded-full px-1 text-sm -top-3 left-2 absolute text-white">5</Text>
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </View>

        </>
    )
} 