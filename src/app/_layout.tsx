import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import tw, { useDeviceContext } from 'twrnc';
import { getOnboardingCompleted } from '@/utils/storage';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useDeviceContext(tw);
  const [appReady, setAppReady] = useState(true);

  useEffect(() => {
    async function bootApp() {
      try {
        const onboardingCompleted = await getOnboardingCompleted();

        if (!onboardingCompleted) {
          router.replace('/onboarding');
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    bootApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1`} onLayout={onLayoutRootView}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
