import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import "../../global.css"
import Header from '@/components/Header';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
        tabBarActiveTintColor: '#009688',
        tabBarInactiveTintColor: '#2F2F2F',
        tabBarStyle:
          {
            backgroundColor: '#f9fafb',
            height: 72, // Adjust height for better touch target
            paddingBottom: 8, // Add padding for better spacing
            paddingTop: 8, // Add padding for better spacing
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            shadowColor: 'transparent',
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 0,
          },
        tabBarLabelStyle: {
          fontFamily: 'inter',
          fontSize: 12,
          fontWeight: '400',
        },
        headerShown: false,
        tabBarLabelPosition: 'below-icon'
      }}
    >
      <Tabs.Screen
        name="index" // This maps to app/(tabs)/index.tsx (Home screen)
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories" // This maps to app/(tabs)/categories.tsx
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites" // This maps to app/(tabs)/favorites.tsx
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart" // This maps to app/(tabs)/cart.tsx
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account" // This maps to app/(tabs)/account.tsx
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
}
