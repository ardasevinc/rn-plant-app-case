import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';

export default function PlantCareGuides() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl`}>Onboarding Plant Care Guides Screen</Text>
      <Link href='/premium' replace>
        Continue
      </Link>
    </View>
  );
}
