import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function IdentifyPlant() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>Onboarding Identify Plant Screen</Text>
      <Link href='onboarding/plant-care-guides'>Continue</Link>
    </View>
  );
}
