// components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AddButton from './AddButton';

type ProductCardProps = {
    name: string;
    products: string;
    promoCode: string;
    oldPrice: string;
    newPrice: string;
    image: string;
    onPress?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
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
            className="flex-row p-4 rounded-xl shadow-md bg-background my-2 border border-gray-100"
            activeOpacity={0.9}
            onPress={onPress}
            accessibilityLabel={`View ${name} offer`}
        >
            <View className="flex-1 justify-between items-start">
                <Text className="text-base font-subsubheading text-primary mb-1">{products}</Text>
                <Text className="text-xs text-body text-olive mb-1"> Use code: {promoCode}</Text>

                <View className="flex-row items-center space-x-2">
                    <Text className="text-primary font-subheading mx-1 text-lg">{newPrice}</Text>
                    <Text className="line-through text-xs text-gray-400">{oldPrice}</Text>
                </View>

                <Text className="text-xs font-body text-olive">{name}</Text>
            </View>

            <View className='flex-col justify-center items-center'>
                <Image
                    source={{ uri: image }}
                    className="w-32 h-16 rounded-lg mr-4 mb-3"
                    resizeMode="cover"
                />
                <AddButton />
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;
