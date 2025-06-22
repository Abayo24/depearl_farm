import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header() {
  const insets = useSafeAreaInsets();

  const containerStyle = {
    paddingTop: Platform.OS === 'web' ? 24 : insets.top, // 24px top pad for web, safe area on native
  };

  return (
    <View
      className="flex-row justify-between items-center bg-primary mb-6 px-[16%] pb-12 pt-4 rounded-b-[28px]"
      style={containerStyle}
    >
      <View className="flex-row items-center">
        <TouchableOpacity className="p-2">
          <Ionicons name="location-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <View className="flex-col ml-2">
          <Text className="text-lg font-heading text-white">Depearl Farm</Text>
          <Text className="text-sm font-body text-white">Best Meat Shop...</Text>
        </View>
      </View>
      <TouchableOpacity className="p-2 border border-background rounded-lg">
        <Ionicons name="grid" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
