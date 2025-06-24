import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Category from '../../components/Category';

export default function CategoriesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      {/* Fixed Header */}
      <View
        className="absolute top-0 left-0 right-0 z-10 h-[10%] bg-white shadow-sm flex-row items-center px-[4%] md:px-[8%] lg:px-[12%] xl:px-[16%] "
        style={{ paddingTop: insets.top }}
      >
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="text-lg font-subheading ml-2">Categories</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1 pt-[80px] mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%]" // Add top padding to offset fixed header
        contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}
      >
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </ScrollView>
    </View>
  );
}
