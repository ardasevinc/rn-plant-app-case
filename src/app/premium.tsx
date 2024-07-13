import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Premium() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl`}>Premium Paywall</Text>
    </View>
  );
}
