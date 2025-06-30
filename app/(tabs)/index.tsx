import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import AutoScrollCarousel from '../../components/AutoScrollCarousel';
import Category from '../../components/Category';
import Header from '../../components/Header';
import ProductCarousel from '../../components/ProductCarousel';
import SaleCarousel from '../../components/SaleCarousel';
import SearchOverlay from '../../components/SearchOverlay';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar style="dark" />
      <ScrollView className="flex-grow">

        {/* Container for Header and Search Bar */}
        <View className="relative">
          <Header />
          <SearchOverlay />
        </View>

        <View className='mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%]'>

          <View className="px-4 mt-4">

            {/* Quick Categories/Best Sellers Section */}
            <Text className="mb-4 font-subheading text-lg text-primary">Categories</Text>
            <Category />

            {/* Offers */}
            <Text className="font-subheading mb-4 text-lg text-primary">Offer for you</Text>
            <AutoScrollCarousel />

            {/* Sale Carousel */}
            <Text className="font-subheading mb-4 mt-6 text-lg text-primary">Sale for You</Text>
            <SaleCarousel />

            {/* Trending Carousel */}
            <Text className="font-subheading mb-4 mt-6 text-lg text-primary">Product on trend</Text>
            <ProductCarousel />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}