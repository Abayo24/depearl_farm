import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default function TextHeader({ title }: { title: string }) {
  return (
    <View className="border-b border-gray-200">
        <View className="flex-row items-start py-3 mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%] ">
      <TouchableOpacity onPress={() => router.back()} className="mr-3">
        <Ionicons name="arrow-back" size={24} color="#8B0000" />
      </TouchableOpacity>
      <Text className="text-lg text-primary font-subheading">{title}</Text>
    </View>
    </View>
  )
}
