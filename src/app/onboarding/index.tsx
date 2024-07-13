import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';

export default function OnboardingIndex() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>Onboarding index</Text>
      <Link href='onboarding/identify-plant'>Get Started</Link>
    </View>
  );
}
