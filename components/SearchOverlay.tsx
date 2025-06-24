import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchOverlay() {
  return (
    <TouchableOpacity
      className="absolute left-0 right-0 mx-[16%] flex-row items-center bg-white rounded-lg p-3 shadow-sm border border-gray-200"
      style={{
        top: '100%',     // Position below the parent (relative container)
        marginTop: -44,  // Pull it upward into visible space
        zIndex: 10,      // Ensure it's above other elements
      }}
    >
      <Ionicons name="search-outline" size={20} color="#6B7280" className="mr-2" />
      <Text className="text-gray-500 flex-1 font-body">
        Type product name to search
      </Text>
    </TouchableOpacity>
  );
}
