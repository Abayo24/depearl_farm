import React from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import ProductCard from '@/components/ProductCard';
import TextHeader from '@/components/TextHeader';

const Products = [
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

export default function ProductList() {
  const router = useRouter();

  const handleProductPress = (productName: string) => {
    router.push({ pathname: '/screens/productDetails', params: { name: productName } });
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TextHeader title="Favorites" />
      <View className="px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%] flex-1">
        <FlatList
          data={Products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ProductCard
              {...item}
              onPress={() => handleProductPress(item.name)}
            />
          )}
          ListHeaderComponent={
            <>
              <View className="h-2" /> {/* Optional spacing */}
            </>
          }
          contentContainerStyle={{
            paddingBottom: 24,
            paddingHorizontal: '2%',
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
