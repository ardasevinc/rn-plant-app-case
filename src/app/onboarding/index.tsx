import { View, Text, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';

export default function OnboardingIndex() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <ImageBackground
        source={require('@/assets/images/onboarding-background.png')}
        style={tw.style('flex-1 justify-center w-full', {
          resizeMode: 'cover',
        })}
      >
        <Text style={tw`text-xl`}>Welcome to PlantApp</Text>
        <Text>Identify more than 3000+ plants and 88% accuracy.</Text>
        <Link href='onboarding/identify-plant'>Get Started</Link>
      </ImageBackground>
    </View>
  );
}
