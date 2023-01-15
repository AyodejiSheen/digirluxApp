import { Pressable, ScrollView, Text, View } from "react-native"


export const Order = () => {
    return (
        <>
            <View className="h-full pt-5">
                <ScrollView showsVerticalScrollIndicator={false}>

                        <Pressable className="bg-teal-100 border-y border-teal-800 p-4">
                            <View className="flex justify-between items-center flex-row">
                                <Text className="text-slate-600 font-medium text-base">9091579067534</Text>
                                <Text className="text-lg font-extrabold">PAID</Text>
                                <Text className="italic text-xs">Dec 12 2022</Text>
                                <Pressable className="bg-teal-700 px-6 py-2 rounded-full">
                                    <Text className="text-white text-base font-bold">$436</Text>
                                </Pressable>
                            </View>
                        </Pressable>

                        <Pressable className="bg-white  p-4">
                            <View className="flex justify-between items-center flex-row">
                                <Text className="text-slate-600 font-medium text-base">9091579067534</Text>
                                <Text className="text-lg font-extrabold">NOT PAID</Text>
                                <Text className="italic text-xs">Dec 12 2022</Text>
                                <Pressable className="bg-red-700 px-6 py-2 rounded-full">
                                    <Text className="text-white text-base font-bold">$436</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                </ScrollView>
            </View>
        </>
    )
}