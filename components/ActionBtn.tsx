import { router } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface ActionBtnProps {
    buttonText: string; // e.g., "Make Payment"
}

export default function ActionBtn({ buttonText }: ActionBtnProps) {
    const handlePress = () => {
        if (buttonText === 'MAKE PAYMENT') {
            router.push('/screens/trackOrder');
        }
        else if (buttonText === 'CONFIRM DELIVERY'){
        router.push('/(tabs)');
        }
        else {
            router.push('/(tabs)/cart');
        }
    };

    return (
        <View className="absolute bottom-0 left-0 right-0 px-4 pb-4 bg-background md:px-[4%] lg:px-[8%] xl:px-[16%]">
            <TouchableOpacity
                onPress={handlePress}
                className="flex-row bg-primary rounded-xl py-4 px-4 justify-center"
            >
                <Text className="text-background font-subheading text-sm">{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}
