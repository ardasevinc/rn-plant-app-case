import { setOnboardingCompleted } from '@/utils/storage';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

export default function Premium() {
  const [isLoading, setIsLoading] = useState(false);

  const onOnboardingCompleted = async () => {
    setIsLoading(true);
    await setOnboardingCompleted();
    setIsLoading(false);
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl`}>Premium Paywall</Text>
      <Link href='/' onPress={onOnboardingCompleted} asChild>
        <Pressable>
          <Text>Try free for 3 days</Text>
          <ActivityIndicator animating={isLoading} />
        </Pressable>
      </Link>
    </View>
  );
}
