import { Image, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Tabs } from "../components/profile/tabs"



export const ProfileScreen = () => {
    return (
        <>

            <View className="flex-1 ">
                <SafeAreaView className="py-10 bg-teal-700">
                    <View className="flex flex-col gap-4 items-center justify-center">
                        <Image source={{ uri: "https://res.cloudinary.com/dylrl8ydb/image/upload/v1668512742/cld-sample.jpg" }} className="h-28 w-28 rounded-full" alt="profile_pics" resizeMode="cover" />

                        <View>
                            <Text className="font-bold text-white text-lg text-center">John Doe</Text>
                            <Text className="font-extralight text-white text-center">Joined Dec 12 2023</Text>
                        </View>
                    </View>
                </SafeAreaView>

                {/* TABS */}
                <Tabs />

            </View>

        </>
    )
}