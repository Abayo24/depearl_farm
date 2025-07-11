import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import AddButton from './AddButton';

const saleItems = [
  {
    name: 'Starter Pack',
    products: 'Beef + Chicken + Sausages',
    promoCode: 'MEAT20',
    oldPrice: '$40.00',
    newPrice: '$32.00',
    image: 'https://placehold.co/300x150/ffe4e6/dc2626?text=Starter+Pack',
  },
  {
    name: 'Family Feast',
    products: 'Lamb + Pork + Chicken',
    promoCode: 'FAMILY10',
    oldPrice: '$75.00',
    newPrice: '$67.50',
    image: 'https://placehold.co/300x150/dbeafe/1d4ed8?text=Family+Feast',
  },
  {
    name: 'BBQ Special',
    products: 'Steak + Ribs + Wings',
    promoCode: 'GRILL15',
    oldPrice: '$60.00',
    newPrice: '$51.00',
    image: 'https://placehold.co/300x150/c7d2fe/7c3aed?text=BBQ+Special',
  },
  {
    name: 'Protein Pro',
    products: 'Sirloin + Chicken + Fillet',
    promoCode: 'PRO25',
    oldPrice: '$85.00',
    newPrice: '$63.75',
    image: 'https://placehold.co/300x150/b5f5ec/0f766e?text=Protein+Pro',
  },
];

export default function SaleCarousel() {

  return (
    <View className="h-auto">
      <Carousel
        data={saleItems}
        width={300}
        height={300}
        autoPlay
        loop
        autoPlayInterval={4000}
        scrollAnimationDuration={1200}
        pagingEnabled
        style={{ width: '100%'}}
        renderItem={({ item }) => (
          <View className="flex-col mx-2 w-[88%] rounded-xl shadow-md bg-white">
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
                <Text className="text-xs text-body text-olive mb-1">
                  Use code: {item.promoCode}
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
    </View>
  );
}
