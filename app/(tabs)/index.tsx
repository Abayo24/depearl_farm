import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import AutoScrollCarousel from '../../components/AutoScrollCarousel';
import SaleCarousel from '../../components/SaleCarousel';
import Header from '../../components/Header';

// Get screen width for responsive padding if needed
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />
      <ScrollView className="flex-grow">

        {/* Container for Header and Search Bar */}
        <View className="relative">

          {/* Header Section */}
          <Header />

          {/* Search Bar */}
          {/* Position it absolutely and use negative top to float it */}
          <TouchableOpacity
            className="absolute left-0 right-0 mx-[16%] flex-row items-center bg-white rounded-lg p-3 shadow-sm border border-gray-200"
            style={{ top: '100%', marginTop: -44, zIndex: 10 }} // Adjust 'top' as needed, 'zIndex' ensures it's on top
          >
            <Ionicons name="search-outline" size={20} color="#6B7280" className="mr-2" />
            <Text className="text-gray-500 flex-1 font-body">Type product name to search</Text>
          </TouchableOpacity>
        </View>

        <View className='mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%]'>

          <View className="px-4 mt-4">

            {/* Quick Categories/Best Sellers Section */}
            <Text className="mb-4 font-subheading text-lg">Categories</Text>
            <View className="flex-row flex-wrap justify-between mb-6 px-4">
              {['Beef', 'Pork', 'Chicken', 'Lamb', 'Sausages', 'Steaks and Fillet'].map((item, index) => (
                <TouchableOpacity key={index} className="w-[30%] p-4 items-center">
                  <Image
                    source={{ uri: `https://placehold.co/80x80/d1fae5/10b981?text=600x600` }}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <Text className="font-body">{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Offers */}
            <Text className="font-subheading mb-4 text-lg">Offer for you</Text>
            <AutoScrollCarousel />

            {/* Sale Carousel */}
            <Text className="font-subheading mb-4 mt-6 text-lg">Sale for You</Text>
            <SaleCarousel />

            {/* Trending Carousel */}
            <Text className="font-subheading mb-4 mt-6 text-lg">Product on trend</Text>
            <SaleCarousel />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}