import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ActionBtn from '@/components/ActionBtn';
import CartCounter from '@/components/CartCounter';
import IconsHeader from '@/components/IconsHeader';

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
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <IconsHeader />
      <ScrollView className="pb-24" showsVerticalScrollIndicator={false}>
        {/* Image with overlay icons */}
        <View className="relative mt-4 px-[4%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
          <Image
            source={{ uri: image }}
            className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] rounded-2xl"
            resizeMode="cover"
          />
        </View>

        {/* Product info */}
        <View className="px-5 py-4 h-auto sm:px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
          <Text className="text-xl font-subheading text-primary">{name}</Text>
          <Text className="text-md font-body text-muted my-2">{description}</Text>

          {/* Stats */}
          <View className="flex-row mt-4">
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#fbbf24" />
              <Text className="text-sm font-subsubheading ml-2 text-muted">{rating}</Text>
            </View>
            <View className="flex-row items-center mx-4">
              <Ionicons name="time-outline" size={16} color="#8B0000" />
              <Text className="text-sm font-subsubheading ml-2 text-primary">{time}</Text>
            </View>
            {freeDelivery && (
              <View className="flex-row items-center">
                <Ionicons name="bicycle" size={16} color="#6B8E23" />
                <Text className="text-sm font-subsubheading ml-2 text-olive">Free delivery</Text>
              </View>
            )}
          </View>

          {/* Price  */}
          <View className="flex-row justify-between mt-6">
            <View className="flex-col">
              <Text className="text-lg text-muted font-body mb-2">Price</Text>
              <View className="flex-row items-center mb-4">
                <Text className="text-2xl font-body font-subheading text-primary">${price.toFixed(2)}</Text>
                {oldPrice && (
                  <Text className="text-base ml-2 font-body text-muted line-through">
                    ${oldPrice.toFixed(2)}
                  </Text>
                )}
              </View>
            </View>

            {/* cart counter */}
            <CartCounter />

          </View>
        </View>
      </ScrollView>
      <ActionBtn buttonText='ADD TO CART' />
    </SafeAreaView>
  );
}
