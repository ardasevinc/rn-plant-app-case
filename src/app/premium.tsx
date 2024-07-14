import { setOnboardingCompleted } from '@/utils/storage';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useState } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function Premium() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);

  const onOnboardingCompleted = async () => {
    setIsLoading(true);
    await setOnboardingCompleted();
    setIsLoading(false);
  };

  return (
    <View
      style={tw.style('flex-1 bg-[#101E17]', {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      })}
    >
      <View style={tw`w-full h-[571px]`}>
        <Image
          source={require('@/assets/images/paywall.png')}
          style={tw`w-full flex-1 -z-10`}
        />
      </View>
      <View style={tw`flex-1 pt-6 pb-2 items-center justify-between`}>
        <Link href='/' onPress={onOnboardingCompleted} asChild>
          <TouchableOpacity>
            <Text>Try free for 3 days</Text>
            <ActivityIndicator animating={isLoading} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
