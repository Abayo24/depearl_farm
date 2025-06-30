import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Category from '../../components/Category';
import TextHeader from '@/components/TextHeader';

export default function CategoriesScreen() {

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Fixed Header */}
      <TextHeader title="Categories" />

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1 pt-2 mx-[4%] md:mx-[8%] lg:mx-[12%] xl:mx-[16%]" // Add top padding to offset fixed header
        contentContainerStyle={{ paddingBottom: 24, alignItems: 'center' }} showsVerticalScrollIndicator={false}
      >
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}
