import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Collapsible from 'react-native-collapsible';
import TextHeader from '@/components/TextHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import ActionButton from '@/components/ActionBtn';

const paymentOptions: { payType: string; icon: React.ComponentProps<typeof Ionicons>['name'] }[] = [
  { payType: 'Cash on Delivery', icon: 'cash' },
  { payType: 'Credit/Debit Card', icon: 'card' },
  { payType: 'Google Pay / Other', icon: 'logo-google' },
  { payType: 'Netbanking', icon: 'laptop' },
  { payType: 'Wallet', icon: 'wallet' },
];

export default function AccordionList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TextHeader title="Payment" />

      <View className="w-full px-4 px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%] mt-4 mb-2">
        <Text className="text-lg font-subheading text-primary">
            Select payment method
        </Text>
      </View>
      <View className="w-full mt-2 px-4 px-[2%] md:px-[4%] lg:px-[8%] xl:px-[16%] pb-24">
        {paymentOptions.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <View key={index} className="mb-3">
              <TouchableOpacity
                onPress={() => toggleAccordion(index)}
                className="bg-background rounded-2xl shadow-md p-3"
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center">
                    <Ionicons name={item.icon} size={16} color="#8B0000" />
                    <Text className="ml-3 text-md
                     font-subheading text-primary">
                      {item.payType}
                    </Text>
                  </View>
                  <Ionicons
                    name={isActive ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#6B8E23"
                  />
                </View>

                <Collapsible collapsed={!isActive}>
                  <View className="mt-3">
                    <Text className="text-sm font-body leading-relaxed">
                      More details about {item.payType} payment option.
                    </Text>
                  </View>
                </Collapsible>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <ActionButton buttonText="MAKE PAYMENT" />
    </SafeAreaView>
  );
}
