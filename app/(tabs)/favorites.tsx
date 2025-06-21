// Create this file at: app/(tabs)/favorites.tsx
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800">Favorites Screen</Text>
      <Text className="mt-2 text-gray-600">Your favorite cuts and products.</Text>
    </SafeAreaView>
  );
}