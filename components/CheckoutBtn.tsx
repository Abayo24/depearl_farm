import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default function CheckoutBtn() {
    const handleCheckout = () => {
        router.push('/screens/payment');
    };
    return (
        <View className="absolute bottom-0 left-0 right-0 bg-background px-4 py-3 sm:px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%]">
            <TouchableOpacity
                onPress={handleCheckout}
                className="flex-row justify-between bg-primary rounded-xl py-6 px-4 items-center"
            >
                <Text className='text-background font-body text-base'>3 items  |  $19.00</Text>
                <View className='flex-row items-center justify-between px-4'>
                    <Text className="text-background font-body text-base">Checkout</Text>
                    <Ionicons name="chevron-forward" size={16} color="#FAF3E0" />
                </View>
            </TouchableOpacity>
        </View>
    )
}
