import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { products } from '../data/Products'


const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,3)}
    renderHiddenItem={hiddenItems}
    renderItem={renderitems}
    showsVerticalScrollIndicator={false}
  />
);

// cart Item
const renderitems = (data, rowMap) => (
  <Pressable>
    <View className="ml-6 mb-4">
      <View className="flex flex-row bg-white items-center h-24 shadow-lg rounded-xl overflow-hidden">
        <View className="flex items-center w-[30%] bg-slate-200">
          <Image source={{ uri: data.item.image }} alt={data.item.name} className="w-full h-24" resizeMode="contain" />
        </View>

        <View className="w-[55%] px-3">
          <Text numberOfLines={1} className="font-bold text-sm">{data.item.name}</Text>
          <Text className="font-black text-lg text-slate-400">${data.item.price}</Text>
        </View>

        <Pressable className="">
          <Text className="bg-green-600 rounded font-medium px-3 py-3 text-white">5</Text>
        </Pressable>
      </View>
    </View>
  </Pressable>
);


//hidden Item
const hiddenItems = () => (
  <Pressable className="w-16 rounded-xl h-24 items-center text-right absolute right-0 justify-center bg-red-600 ">
    <View className="flex items-center gap-1 ">
      <FontAwesome name="trash" size={24} color="white" />
    </View>
  </Pressable>
);




export const CartItems = () => {

  return (
    <View className="mr-6">
      <Swiper />
    </View>
  )
}
