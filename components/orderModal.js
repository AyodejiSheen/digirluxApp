import { View, Text, Pressable, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const OrderInfos = [
    {
        title: "Products",
        price: 125.77,
        color: "black"
    },
    {
        title: "Shipping",
        price: 23.00,
        color: "black"
    },
    {
        title: "Tax",
        price: "23.34",
        color: "black"
    },
    {
        title: "Total Amount",
        price: 1675.00,
        color: "main"
    }
]


const OrderModal = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();


    return (
        <View className="justify-center">
            <Pressable onPress={() => setModalVisible(!modalVisible)} className="bg-teal-900 py-4 rounded-full">
                <Text className="text-white font-medium text-center">SHOW PAYMENT & TOTAL</Text>
            </Pressable>

            {
                modalVisible && (
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView} className="w-4/5 rounded-lg pb-4">
                                <View className="flex-row justify-between border-b border-slate-300 p-4">
                                    <View>
                                        <Text className="font-bold text-base">Order</Text>
                                    </View>
                                    <View>
                                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                            <AntDesign name="close" size={20} color="black" />
                                        </Pressable>
                                    </View>
                                </View>

                                <View className="p-6 space-y-5">
                                    {OrderInfos.map((each, i) => {
                                        return (
                                            <View key={i} className="flex-row justify-between">
                                                <Text className="font-medium">{each.title}</Text>
                                                <Text className={`font-black text-lg ${each.color === "main" ? "text-teal-700" : "text-black"}`}>${each.price}</Text>
                                            </View>
                                        )
                                    })}
                                </View>

                                <View className="px-6 border-t pt-4 border-slate-300 space-y-2">
                                    <Pressable className="bg-yellow-500 rounded-md mx-auto flex justify-center items-center">
                                        <Image source={require("../assets/paypal.png")} className="h-8 w-24 py-6 rounded-md" resizeMode='contain' />
                                    </Pressable>

                                    <Pressable onPress={() => navigation.navigate("Home")} className="bg-black py-3 rounded-md">
                                        <Text className="text-center text-white font-light">PLACE ORDER</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                    </Modal>
                )
            }
        </View>
    )
}

export default OrderModal;


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.7)"
    },

    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
