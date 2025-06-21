import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import React from 'react';
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Stack>
      {/*
        The "(tabs)" group is a common Expo Router convention.
        It means all routes inside app/(tabs) will be part of a separate
        navigator (in this case, our bottom tabs).
        We hide the header for the tabs group as the tabs layout will manage it.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* You can add other screens here that are not part of the tabs,
          e.g., a product detail page, checkout flow, etc. */}
    </Stack>
  );
}

