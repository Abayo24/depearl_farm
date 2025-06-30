import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default function CartCounter() {
    return (
        <View className='flex-row items-center justify-between p-2 '>
            <TouchableOpacity className='border border-primary p-2 rounded-lg mt-2 mb-1'>
                <Ionicons name="remove" size={16} color="#8B0000" />
            </TouchableOpacity>
            <Text className='mx-4 text-primary'>1</Text>
            <TouchableOpacity className='border border-primary p-2 rounded-lg mt-2 mb-1'>
                <Ionicons name="add" size={16} color="#8B0000" />
            </TouchableOpacity>
        </View>
    )
}
