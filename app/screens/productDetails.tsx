import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ActionBtn from '@/components/ActionBtn';
import CartCounter from '@/components/CartCounter';

export default function ProductDetails() {
  // Mock data (can be passed as props or from route)
  const name = 'Goat + Chicken Skinless + Cleaned Prawns';
  const description = 'Refreshing and healthy blend of fresh strawberries and yogurt.';
  const image =
    'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const rating = 4.5;
  const time = '30 min';
  const freeDelivery = true;
  const price = 4.99;
  const oldPrice = 6.99;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Image with overlay icons */}
        <View className="relative">
          <Image
            source={{ uri: image }}
            className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]"
            resizeMode="cover"
          />
          {/* Safe top icon row */}
          <View className="absolute top-0 left-0 right-0 px-4 pt-4 flex-row justify-between px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-white/80 rounded-full p-2"
            >
              <Ionicons name="arrow-back" size={22} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white/80 rounded-full p-2">
              <Ionicons name="heart-outline" size={22} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product info */}
        <View className="px-5 py-4 h-full px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
          <Text className="text-xl font-subheading text-muted">{name}</Text>
          <Text className="text-md text-gray-600 my-2">{description}</Text>

          {/* Stats */}
          <View className="flex-row mt-4">
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#fbbf24" />
              <Text className="text-sm font-subsubheading ml-2 text-gray-700">{rating}</Text>
            </View>
            <View className="flex-row items-center mx-4">
              <Ionicons name="time" size={16} color="#4b5563" />
              <Text className="text-sm font-subsubheading ml-2 text-gray-700">{time}</Text>
            </View>
            {freeDelivery && (
              <View className="flex-row items-center">
                <Ionicons name="bicycle" size={16} color="#10b981" />
                <Text className="text-sm font-subsubheading ml-2 text-green-600">Free Delivery</Text>
              </View>
            )}
          </View>

          {/* Price  */}
          <View className="flex-row justify-between mt-6">
            <View className="flex-row items-center mb-4">
              <Text className="text-2xl font-body font-bold text-gray-800">${price.toFixed(2)}</Text>
              {oldPrice && (
                <Text className="text-base ml-2 font-body text-gray-500 line-through">
                  ${oldPrice.toFixed(2)}
                </Text>
              )}
            </View>

            {/* cart counter */}
            <CartCounter />

          </View>
        </View>
      </ScrollView>
      <ActionBtn buttonText='ADD TO CART'/>
    </SafeAreaView>
  );
}
