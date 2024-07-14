import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import tw, { useDeviceContext } from 'twrnc';
import { isOnboardingCompleted } from '@/utils/storage';

import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useDeviceContext(tw);
  const [onboardingCompleted, setOnboardingCompleted] = useState<
    boolean | undefined
  >(undefined);
  const [appReady, setAppReady] = useState(false);

  const [fontsLoaded, fontsLoadingError] = useFonts({
    'SFProText-Regular': require('../assets/fonts/SFProText-Regular.otf'),
    'SFProText-Semibold': require('../assets/fonts/SFProText-Semibold.otf'),
    'SFProText-Bold': require('../assets/fonts/SFProText-Bold.otf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'FONTSPRINGDEMO-VisbyCFExtraBoldRegular': require('../assets/fonts/FONTSPRINGDEMO-VisbyCFExtraBoldRegular.otf'),
  });

  useEffect(() => {
    async function bootApp() {
      try {
        if (!fontsLoaded) {
          return;
        } else if (fontsLoadingError) {
          throw fontsLoadingError;
        }
        setOnboardingCompleted(await isOnboardingCompleted());
        if (onboardingCompleted === false) {
          console.log('here');
          router.replace('/onboarding');
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    bootApp();
  }, [fontsLoaded, onboardingCompleted]);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady || onboardingCompleted === undefined) return null;

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1`} onLayout={onLayoutRootView}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
