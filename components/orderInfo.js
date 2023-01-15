import { StyleSheet, Text, View } from "react-native"

export const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
    return (
        <>            

                <View style={styles.shadow} className="bg-white h-max flex justify-center mb-3 items-center w-56 ml-6 rounded-lg py-3 px-4 shadow-xl">
                    <View className="bg-teal-700 w-16 h-16 flex justify-center items-center rounded-full">{icon}</View>
                    <Text className="font-bold text-lg mt-3 mb-2">{title}</Text>
                    <Text className="text-sm">{subTitle}</Text>
                    <Text className="text-sm text-center italic">{text}</Text>

                    {/* status */}
                    {
                        success && (
                            <View className="py-2 px-3 mt-2 flex justify-center items-center rounded-lg bg-blue-500">
                                <Text className="text-xs text-white">Paid on Jan 12 2021</Text>
                            </View>
                        )
                    }

                    {
                        danger && (
                            <View className="py-2 px-3 mt-2 flex justify-center items-center rounded-lg bg-red-500">
                                <Text className="text-xs text-white">Not Delivered</Text>
                            </View>
                        )
                    }
                </View>
        </>
    )
}


const styles = StyleSheet.create({

    shadow: {
        shadowRadius: 10,
        shadowColor: 'rgba(0,0,0, 0.5)',
        shadowOpacity: 1,
        elevation: 6,
        backgroundColor: "#ffffff"
    }

});