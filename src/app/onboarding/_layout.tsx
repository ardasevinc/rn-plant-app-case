import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{ animation: 'slide_from_right', header: () => null }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='identify-plant' />
      <Stack.Screen name='plant-care-guides' />
    </Stack>
  );
}
