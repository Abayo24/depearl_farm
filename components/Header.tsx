import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View className="flex-row justify-between items-center h-28 bg-primary mb-6 mt-0 px-[16%] pb-8 rounded-b-[28px]">
            <View className="flex-row items-center">
                <TouchableOpacity className="p-2">
                    <Ionicons name="location-outline" size={24} color="#ffffff" />
                </TouchableOpacity>
                <View className='flex-col'>
                    <Text className="text-lg font-heading text-white">Depearl Farm</Text>
                    <Text className="text-sm font-body text-white">Best Meat Shop...</Text>
                </View>
            </View>
            <TouchableOpacity className="p-2 border border-background rounded-lg">
                <Ionicons name="grid" size={24} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
}
