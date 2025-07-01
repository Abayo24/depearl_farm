import React from 'react';
import { View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const images = [
  'https://placehold.co/140x140/fecaca/dc2626?text=Sirloin',
  'https://placehold.co/140x140/bfdbfe/2563eb?text=Chicken',
  'https://placehold.co/140x140/ffe4b5/ff6347?text=Steak',
  'https://placehold.co/140x140/c6f6d5/059669?text=BBQ',
  'https://placehold.co/140x140/a7f3d0/065f46?text=Grill',
];

export default function AutoScrollCarousel() {

  return (
    <View>
        <Carousel
          data={images}
          width={350}
          height={170}
          autoPlay
          loop
          scrollAnimationDuration={1000}
          autoPlayInterval={3000}
          pagingEnabled={true}
          style={{ width: "100%" }}
          renderItem={({ item }) => (
            <View className='w-88 h-full mx-4'>
              <Image
              source={{ uri: item }}
              className="w-full h-full rounded-lg mb-2 bg-white"
              resizeMode="cover"
            />
            </View>
          )}
        />

    </View>
  );
}

