import PaginationDots from '@/components/PaginationDots';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function IdentifyPlant() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={tw.style('flex-1', {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      })}
    >
      <View style={tw`flex-1 pt-6 pb-2 items-center justify-between`}>
        <View style={tw`w-[315px]`}>
          <Text
            style={tw.style('text-[28px] leading-[33.18px] tracking-[-1px]', {
              fontFamily: 'Rubik-Regular',
              fontWeight: 400,
              color: 'hsla(150,29%,11%,1)',
            })}
          >
            Take a photo to{' '}
            <Text style={tw.style('', { fontFamily: 'Rubik-Black' })}>
              Identify
            </Text>{' '}
            the plant!
          </Text>
        </View>

        <View style={tw`w-full h-[530px]`}>
          <Image
            source={require('@/assets/images/onboarding-2.png')}
            style={tw`w-full flex-1`}
          />
        </View>

        <Link href='onboarding/plant-care-guides'>Continue</Link>

        <PaginationDots totalScreens={2} currentIndex={0} />
      </View>
    </View>
  );
}
