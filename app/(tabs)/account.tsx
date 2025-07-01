// app/(tabs)/account.tsx
import TextHeader from '@/components/TextHeader';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useCartStore } from '../stores/cartStore';
import { Ionicons } from '@expo/vector-icons';

export default function AccountScreen() {
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Fixed Header */}
      <TextHeader title="Profile" />

      {/* Floating Cart Icon */}
      <View
        className="absolute z-50"
        style={{
          top: insets.top + 12,
          right: width * 0.05,
        }}
      >
        <TouchableOpacity onPress={() => router.push('/cart')}>
          <Ionicons name="cart" size={28} color="#6B8E23" />
          {cartCount > 0 && (
            <View className="absolute -top-1 -right-1 bg-red-600 rounded-full w-4 h-4 items-center justify-center">
              <Text className="text-white text-[10px] font-bold">
                {cartCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100, // Optional space at bottom
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col px-[4%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
          {/* User Profile Info */}
          <View className="flex-row m-4 items-center">
            <View className="flex-row">
              <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
              />
              <View className="flex-col ml-4">
                <Text className="font-subheading text-lg text-primary">
                  Robert Joe
                </Text>
                <View className="flex-row items-center my-1">
                  <Ionicons name="mail-outline" size={16} color="#6B8E23" />
                  <Text className="font-body text-muted ml-2">
                    robert.joe@example
                  </Text>
                </View>
                <View className="flex-row items-center my-1">
                  <Ionicons name="call-outline" size={16} color="#6B8E23" />
                  <Text className="font-body text-muted ml-2">1234567890</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity className="ml-auto p-2">
              <Ionicons name="create-outline" size={24} color="#6B8E23" />
            </TouchableOpacity>
          </View>

          {/* Menu Grid */}
          <View className="mt-6 px-4 flex-row bg-background shadow-md w-full h-auto rounded-lg items-center justify-between">
            {[
              { icon: 'receipt', label: 'My Orders' },
              { icon: 'heart', label: 'My Wishlist' },
              { icon: 'receipt', label: 'Return Pr.' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => router.push('/screens/orders')}
                className="flex-col items-center p-4"
              >
                <View className="w-16 h-16 rounded-full bg-olive items-center justify-center">
                  <Ionicons name={item.icon as any} size={20} color="#FAF3E0" />
                </View>
                <Text className="font-body text-sm text-primary">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Settings Sections */}
          {[
            {
              icon: 'gift-outline',
              title: 'Rewards',
              subtitle: 'Get exciting rewards',
            },
            {
              icon: 'receipt-outline',
              title: 'Orders',
              subtitle: 'Orders placed: 1',
            },
            {
              icon: 'location-outline',
              title: 'Address',
              subtitle: 'Sector E, R.K. Purma Kota',
            },
            {
              icon: 'wallet-outline',
              title: 'Wallet',
              subtitle: 'Add Cash +',
            },
            {
              icon: 'notifications-outline',
              title: 'Notifications',
              subtitle: '3 unread notifications',
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row m-4 pb-4 items-center border-b border-border"
            >
              <View className="flex-row items-center">
                <Ionicons name={item.icon as any} size={24} color="#6B8E23" />
                <View className="flex-col ml-4">
                  <Text className="font-subsubheading text-lg text-primary">
                    {item.title}
                  </Text>
                  <Text className="font-body text-muted">{item.subtitle}</Text>
                </View>
              </View>
              <View className="ml-auto p-2">
                <Ionicons name="chevron-forward" size={16} color="#6B8E23" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
