import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import tw, { useDeviceContext } from 'twrnc';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useDeviceContext(tw);
  const [appReady, setAppReady] = useState(true);
  const skipOnboarding = useRef(true);

  useEffect(() => {
    async function bootApp() {
      try {
        if (skipOnboarding.current === false) {
          router.replace('/onboarding');
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
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
