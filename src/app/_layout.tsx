import { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import tw, { useDeviceContext } from 'twrnc';
import { getOnboardingCompleted } from '@/utils/storage';

import { loadAsync } from 'expo-font';

// Enable when using the development build
// import 'expo-dev-client';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useDeviceContext(tw);
  const [appReady, setAppReady] = useState(true);

  useEffect(() => {
    async function bootApp() {
      try {
        // load fonts - comment when using expo dev build
        await loadAsync({
          'SFProText-Regular': require('src/assets/fonts/SFProText-Regular.otf'),
          'SFProText-Semibold': require('src/assets/fonts/SFProText-Semibold.otf'),
          'SFProText-Bold': require('src/assets/fonts/SFProText-Bold.otf'),
          'Rubik-Light': require('src/assets/fonts/Rubik-Light.ttf'),
          'Rubik-Regular': require('src/assets/fonts/Rubik-Regular.ttf'),
          'Rubik-Medium': require('src/assets/fonts/Rubik-Medium.ttf'),
          'Rubik-SemiBold': require('src/assets/fonts/Rubik-SemiBold.ttf'),
          'Rubik-Bold': require('src/assets/fonts/Rubik-Bold.ttf'),
          'Rubik-Black': require('src/assets/fonts/Rubik-Black.ttf'),
          'FONTSPRINGDEMO-VisbyCFExtraBoldRegular': require('src/assets/fonts/FONTSPRINGDEMO-VisbyCFExtraBoldRegular.otf'),
        });

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
