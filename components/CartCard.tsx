// components/CartCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartCounter from './CartCounter';

type CartCardProps = {
    name: string;
    products: string;
    promoCode: string;
    oldPrice: string;
    newPrice: string;
    image: string;
    onPress?: () => void;
};

const CartCard: React.FC<CartCardProps> = ({
    name,
    products,
    promoCode,
    oldPrice,
    newPrice,
    image,
    onPress,
}) => {
    return (
        <TouchableOpacity
            className="flex-row p-4 rounded-xl shadow-md bg-background my-2 mx-2"
            activeOpacity={0.9}
            onPress={onPress}
            accessibilityLabel={`View ${name} offer`}
        >
            <View className="flex-1 justify-between items-start">
                <Text className="text-base font-subsubheading text-primary mb-1">{products}</Text>

                <View className="flex-row items-center space-x-2">
                    <Text className="text-primary font-subheading mx-1 text-lg">{newPrice}</Text>
                    <Text className="line-through text-xs text-gray-400">{oldPrice}</Text>
                </View>

                <Text className="text-xs font-body text-olive">{name}</Text>
                <TouchableOpacity className='bg-teal p-2 rounded-lg mt-2 mb-1'>
                    <Ionicons name="trash-bin" size={16} color="#2f2f2f" />
                </TouchableOpacity>
            </View>

            <View className='flex-col items-center'>
                <Image
                    source={{ uri: image }}
                    className="w-32 h-16 rounded-lg mb-3"
                    resizeMode="cover"
                />
                <CartCounter />
            </View>
        </TouchableOpacity>
    );
};

export default CartCard;
