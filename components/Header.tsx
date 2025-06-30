import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDrawer } from './DrawerContext';

export default function Header() {
  const insets = useSafeAreaInsets();
  const { openDrawer } = useDrawer();

  const containerStyle = {
    paddingTop: Platform.OS === 'web' ? 24 : insets.top,
  };

  return (
    <View
      className="flex-row justify-between items-center bg-primary mb-6 px-[16%] pb-12 pt-4 rounded-b-[28px]"
      style={containerStyle}
    >
      <View className="flex-row items-center">
        <TouchableOpacity className="p-2">
          <Ionicons name="location-outline" size={24} color="#FAF3E0" />
        </TouchableOpacity>
        <View className="flex-col ml-2">
          <View className="flex-row items-center">
            <Text className="text-lg font-heading text-background">Depearl</Text>
            <Text className="text-lg font-heading text-olive">Farm</Text>
          </View>
          <Text className="text-sm font-body text-background">Best Meat Shop...</Text>
        </View>
      </View>
      <TouchableOpacity className="p-2 border border-background rounded-lg" onPress={openDrawer}>
        <Ionicons name="grid" size={24} color="#FAF3E0" />
      </TouchableOpacity>
    </View>
  );
}
