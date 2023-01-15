import { Pressable, Text, View } from "react-native"
import { HomeSearch } from "../components/homeSearch";
import { HomeProduct } from "../components/homeProduct";
import { useEffect, useState } from "react";



export const HomeScreen = ({ route }) => {


    return (
        <>

            <View className="flex-1 bg-teal-600">
                <HomeSearch />
                <HomeProduct />
            </View>
        </>
    )
}