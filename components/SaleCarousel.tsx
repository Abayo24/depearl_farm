import { View, Text, Image, TouchableOpacity } from 'react-native';
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
        <View className='m-4 h-auto'>{(
            <Carousel
                data={saleItems}
                width={300}
                height={260}
                autoPlay
                loop
                autoPlayInterval={4000}
                scrollAnimationDuration={1200}
                pagingEnabled={true}
                style={{ width: "100%" }}
                renderItem={({ item }) => (
                    <View className="flex-col w-[88%] rounded-xl h-[96%] bg-white shadow-lg overflow-hidden">
                        <Image
                            source={{ uri: item.image }}
                            className="w-[100%] h-[45%] rounded-t-lg"
                            resizeMode="cover"
                        />
                        <View className="flex-col w-full bg-white p-4 justify-between items-start">
                            <View className='w-full'>
                                <Text className="text-base text-body font-semibold text-gray-800 mb-1">{item.name}</Text>
                                <Text className="text-sm text-body text-gray-600">{item.products}</Text>
                                <Text className="text-xs text-body text-promo mb-1">Use code: {item.promoCode}</Text>
                            </View>
                                <View className=" flex flex-row w-full items-start justify-between">
                                    <Text className="text-primary font-bold mx-1 text-md">{item.newPrice}</Text>
                                    <Text className="line-through text-xs text-gray-400">{item.oldPrice}</Text>
                                    <TouchableOpacity
                                        className="bg-white border border-primary mx-4 py-2 px-3 rounded-lg self-start active:bg-primary"
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
