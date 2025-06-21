// --- Placeholder Screens (app/(tabs)/categories.tsx, app/(tabs)/favorites.tsx, app/(tabs)/cart.tsx, app/(tabs)/account.tsx) ---
// These are simple placeholder files for the other tabs.
// You will populate these with actual content as you develop.

// Create this file at: app/(tabs)/categories.tsx

import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export default function CategoriesScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-800">Categories Screen</Text>
      <Text className="mt-2 text-gray-600">Explore different meat categories here.</Text>
    </SafeAreaView>
  );
}