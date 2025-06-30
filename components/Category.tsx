import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const categories = ['Beef', 'Pork', 'Chicken', 'Lamb', 'Sausages', 'Steaks and Fillet'];

export default function Category() {
  const router = useRouter();

  const handleCategorySelect = (category: string) => {
    router.push({
      pathname: '/screens/productList',
      params: { category }
    });
  };

  return (
    <View className="my-2">
      <View className="flex-row flex-wrap justify-between">
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-[30%] p-4 items-center"
            onPress={() => handleCategorySelect(item)}
          >
            <Image
              source={{ uri: `https://placehold.co/80x80/d1fae5/10b981?text=600x600` }}
              className="w-16 h-16 rounded-full mb-2"
            />
            <Text className="font-body text-center text-primary">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}