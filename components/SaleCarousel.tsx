import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, LayoutChangeEvent } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const saleItems = [
    {
        name: 'Starter Pack',
        products: 'Beef, Chicken, Sausages',
        promoCode: 'MEAT20',
        oldPrice: '$40.00',
        newPrice: '$32.00',
        image: 'https://placehold.co/300x150/ffe4e6/dc2626?text=Starter+Pack',
    },
    {
        name: 'Family Feast',
        products: 'Lamb, Pork, Chicken',
        promoCode: 'FAMILY10',
        oldPrice: '$75.00',
        newPrice: '$67.50',
        image: 'https://placehold.co/300x150/dbeafe/1d4ed8?text=Family+Feast',
    },
    {
        name: 'BBQ Special',
        products: 'Steak, Ribs, Wings',
        promoCode: 'GRILL15',
        oldPrice: '$60.00',
        newPrice: '$51.00',
        image: 'https://placehold.co/300x150/c7d2fe/7c3aed?text=BBQ+Special',
    },
    {
        name: 'Protein Pro',
        products: 'Sirloin, Chicken, Fillet',
        promoCode: 'PRO25',
        oldPrice: '$85.00',
        newPrice: '$63.75',
        image: 'https://placehold.co/300x150/b5f5ec/0f766e?text=Protein+Pro',
    },
];

export default function SaleCarousel() {

    return (
        <View>{(
            <Carousel
                data={saleItems}
                width={300}
                height={300}
                autoPlay
                loop
                autoPlayInterval={4000}
                scrollAnimationDuration={1200}
                pagingEnabled={true}
                style={{ width: "100%" }}
                renderItem={({ item }) => (
                    <View className="flex-col w-88 mx-4 rounded-xl h-full bg-white overflow-hidden">
                        <Image
                            source={{ uri: item.image }}
                            className="w-full h-32 rounded-t-lg"
                            resizeMode="cover"
                        />
                        <View className="flex-col flex-1 w-full bg-white p-3 justify-between">
                            <View>
                                <Text className="text-base font-semibold text-gray-800 mb-1">{item.name}</Text>
                                <Text className="text-sm text-gray-600">{item.products}</Text>
                                <Text className="text-xs text-emerald-600 mb-1">Use code: {item.promoCode}</Text>
                            </View>
                            <View className="mt-1 w-full">
                                <View className=" flex flex-row items-start mb-1">
                                    <Text className="text-primary font-bold mx-1 text-md">{item.newPrice}</Text>
                                    <Text className="line-through text-xs text-gray-400">{item.oldPrice}</Text>
                                </View>
                                <TouchableOpacity
                                    className="bg-white border border-primary py-2 px-3 rounded-lg self-start active:bg-primary"
                                >
                                    <Text className="text-primary text-sm font-semibold active:text-white">Add to Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                )}
            />
        )}
        </View>
    );
}
