import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';
import { CtaTouchable } from '@/components/onboarding/cta-touchable';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function OnboardingIndex() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('@/assets/images/onboarding-background.png')}
      style={tw.style('flex-1 justify-between', {
        resizeMode: 'cover',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      })}
    >
      <View style={tw`pl-6 pt-6 gap-y-[6px]`}>
        <Text
          style={tw.style('text-[28px] leading-[33.18px] tracking-[0.07px]', {
            fontFamily: 'Rubik-Regular',
            fontWeight: 400,
            color: 'hsla(150,29%,11%,1)',
          })}
        >
          Welcome to{' '}
          <Text style={{ fontFamily: 'Rubik-SemiBold', fontWeight: 600 }}>
            PlantApp
          </Text>
        </Text>
        <Text
          style={tw.style('text-[16px] leading-[22px] tracking-[0.07px]', {
            fontFamily: 'Rubik-Regular',
            fontWeight: 400,
            color: 'hsla(150,29%,11%,0.7)',
          })}
        >
          Identify more than 3000+ plants with 88% accuracy.
        </Text>
      </View>
      <View style={tw`h-[499px] w-full`}>
        <Image
          source={require('@/assets/images/onboarding-1.png')}
          style={tw`w-full flex-1`}
        />
      </View>
      <View style={tw`items-center pb-2`}>
        <Link href='onboarding/identify-plant' asChild>
          <CtaTouchable>
            <Text
              style={tw.style(
                ' text-[15px] leading-[24px] tracking-[-0.24px]',
                {
                  fontFamily: 'SFProText-Regular',
                  fontWeight: 700,
                  color: 'black',
                },
              )}
            >
              Get Started
            </Text>
          </CtaTouchable>
        </Link>
        <View style={tw`w-[232px]`}>
          <Text
            style={tw.style(
              'text-[11px] leading-[15px] tracking-[0.07px] text-center',
              {
                fontFamily: 'Rubik-Regular',
                fontWeight: 400,
                color: 'hsla(150, 12%, 40%, 0.7)',
              },
            )}
          >
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
