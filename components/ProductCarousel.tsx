import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AddButton from './AddButton';

const saleItems = [
    {
        name: '1 Pack',
        products: 'Goat Meat',
        oldPrice: '$40.00',
        newPrice: '$32.00',
        image: 'https://placehold.co/300x150/ffe4e6/dc2626?text=Starter+Pack',
    },
    {
        name: '1 Pack',
        products: 'Cleaned Prawns',
        oldPrice: '$75.00',
        newPrice: '$67.50',
        image: 'https://placehold.co/300x150/dbeafe/1d4ed8?text=Family+Feast',
    },
    {
        name: '1 Pack',
        products: 'Chicken Skinless',
        oldPrice: '$60.00',
        newPrice: '$51.00',
        image: 'https://placehold.co/300x150/c7d2fe/7c3aed?text=BBQ+Special',
    },
];

export default function ProductCarousel() {

    return (
        <View className='h-auto'>{(
            <Carousel
                data={saleItems}
                width={300}
                height={300}
                autoPlay
                loop
                autoPlayInterval={4000}
                scrollAnimationDuration={1200}
                pagingEnabled={true}
                style={{ width: '100%' }}
                renderItem={({ item }) => (
                    <View className="flex-col w-[88%] mx-2 rounded-xl shadow-md overflow-visible bg-white">
                                <Image
                                  source={{ uri: item.image }}
                                  className="w-full rounded-t-xl"
                                  style={{ aspectRatio: 2 }} // Responsive image height
                                  resizeMode="cover"
                                />
                                <View className="flex-col bg-background p-3 justify-between items-start rounded-b-xl">
                                  <View className="mb-2">
                                    <Text className="text-xs font-body text-olive">{item.name}</Text>
                                    <Text className="text-base font-subsubheading text-primary mb-1">
                                      {item.products}
                                    </Text>
                                  </View>
                                  <View className="flex-row justify-between items-center w-full">
                                    <Text className="text-primary font-subheading text-lg">
                                      {item.newPrice}
                                    </Text>
                                    <Text className="line-through text-xs text-gray-400">
                                      {item.oldPrice}
                                    </Text>
                                    <AddButton />
                                  </View>
                                </View>
                              </View>

                )}
            />
        )}
        </View>
    );
}
