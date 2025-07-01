import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { useDrawer } from './DrawerContext';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function CustomDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? 0 : -width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen, slideAnim]);

  if (!isDrawerOpen) return null;

  return (
    <View className="absolute inset-0 z-50">
      {/* Overlay */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeDrawer}
        className="absolute inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}
      <Animated.View
        style={{
          backgroundColor: '#FAF3E0',
          height: '100%',
          width: 240,
          position: 'absolute',
          zIndex: 50,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {/* SafeArea wrapper to avoid status bar overlap */}
        <SafeAreaView className="flex-1 justify-between">

          {/* Top section (User + Menu) */}
          <View>
            {/* User Header */}
            <View className="flex-row px-4 pt-2 bg-primary mb-6 items-center">
              <View className="w-12 h-12 rounded-lg overflow-hidden mb-3 bg-white">
                <Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-col h-full ml-2">
                <Text className="font-heading text-background text-base">Jane Doe</Text>
                <Text className="font-body text-background text-xs mt-1">jane.doe@example.com</Text>
              </View>
            </View>

            {/* Menu Items */}
            <View className="px-4 pt-2">
              <Text className="text-md font-subheading text-primary mb-2.5">MAIN MENU</Text>

              <TouchableOpacity onPress={() => router.push('/(tabs)')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="home-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Home</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/(tabs)/account')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="person-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Profile</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/(tabs)')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="chatbubble-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Chat</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/(tabs)/account')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="exit-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Logout</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>
            </View>

            {/* Settings */}
            <View className="px-4 pt-2">
              <Text className="text-md text-primary font-subheading mb-2.5">SETTINGS</Text>

              <TouchableOpacity onPress={() => router.push('/(tabs)')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="home-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Color Theme</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/(tabs)/account')} className="flex-row justify-between py-2.5">
                <View className="flex-row items-center">
                  <Ionicons name="moon-outline" size={16} color="#6B8E23" />
                  <Text className="text-md text-muted font-body mx-4">Dark Mode</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View className="px-4 py-4 border-t border-gray-200 bg-background">
            <Text className="text-md font-heading text-primary">DEPEARL FARM: Meat Shop</Text>
            <Text className="text-sm font-body text-muted">App Version 1.0</Text>
          </View>

        </SafeAreaView>
      </Animated.View>
    </View>
  );
}
