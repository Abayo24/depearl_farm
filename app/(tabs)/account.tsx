// Create this file at: app/(tabs)/account.tsx

import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function AccountScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800">Account Screen</Text>
      <Text className="mt-2 text-gray-600">Manage your profile, orders, and settings.</Text>
    </SafeAreaView>
  );
}