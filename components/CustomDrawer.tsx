import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { useDrawer } from './DrawerContext';

const { width } = Dimensions.get('window');

export default function CustomDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer();
  const slideAnim = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? 0 : -width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen, slideAnim]);

  if (!isDrawerOpen) return null;

  return (
    <View className="absolute inset-0 ">
      {/* Overlay */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeDrawer}
        className="absolute inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}
      <Animated.View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: 240,
          position: 'absolute',
          padding: 20,
          zIndex: 50,
          transform: [{ translateX: slideAnim }],
        }}
      >
        <Text className="text-[20px] font-bold mb-2.5 text-gray-900">Menu</Text>

        <TouchableOpacity onPress={closeDrawer} className="py-2.5">
          <Text className="text-[16px] text-gray-800">Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={closeDrawer} className="py-2.5">
          <Text className="text-[16px] text-gray-800">Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
