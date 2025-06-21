// Create this file at: app/(tabs)/cart.tsx

import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function CartScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800">Cart Screen</Text>
      <Text className="mt-2 text-gray-600">Review your selected items and checkout.</Text>
    </SafeAreaView>
  );
}