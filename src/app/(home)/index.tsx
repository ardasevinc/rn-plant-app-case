import { clearOnboardingCompleted } from '@/utils/storage';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Index() {
  const onClearOnboarding = async () => {
    await clearOnboardingCompleted();
    router.replace('/onboarding');
  };

  return (
    <View style={tw`flex-1 justify-center items-center gap-16`}>
      <Text style={tw`text-xl`}>TEST</Text>

      <Pressable onPress={onClearOnboarding}>
        <Text>clear onboarding</Text>
      </Pressable>
    </View>
  );
}
