import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='identify-plant' />
      <Stack.Screen name='plant-care-guides' />
    </Stack>
  );
}
