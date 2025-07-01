import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function IconsHeader() {
    return (
        <View className="border-b border-border shadow-b-sm">
            <View className="flex-row items-center justify-between py-3 mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%] ">
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="arrow-back" size={24} color="#8B0000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()} className="mr-3">
                    <Ionicons name="heart-outline" size={24} color="#8B0000" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}