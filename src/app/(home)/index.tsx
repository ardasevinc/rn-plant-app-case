import { clearOnboardingStatus, getOnboardingStatus } from '@/utils/storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Index() {
  const [obStatus, setObStatus] = useState();

  useEffect(() => {
    (async () => {
      const status = await getOnboardingStatus();
      setObStatus(status);
    })();
  });

  const onClearOnboarding = async () => {
    await clearOnboardingStatus();
    setObStatus('incomplete');
    router.replace('/onboarding');
  };

  return (
    <View style={tw`flex-1 justify-center items-center gap-16`}>
      <Text style={tw`text-xl`}>TEST</Text>

      <TouchableOpacity onPress={onClearOnboarding}>
        <Text>clear onboarding</Text>
      </TouchableOpacity>
      {obStatus && (
        <View>
          <Text>ONBOARDING: {obStatus}</Text>
        </View>
      )}
    </View>
  );
}
