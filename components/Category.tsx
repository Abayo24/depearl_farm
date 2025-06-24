import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

type CategoryProps = {
  onSelect?: (category: string) => void;
};

const categories = ['Beef', 'Pork', 'Chicken', 'Lamb', 'Sausages', 'Steaks and Fillet'];

export default function Category({ onSelect }: CategoryProps) {
  return (
    <View className="my-2">
      <View className="flex-row flex-wrap justify-between px-4">
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-[30%] p-4 items-center"
            onPress={() => onSelect?.(item)}
          >
            <Image
              source={{ uri: `https://placehold.co/80x80/d1fae5/10b981?text=600x600` }}
              className="w-16 h-16 rounded-full mb-2"
            />
            <Text className="font-body text-center">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
