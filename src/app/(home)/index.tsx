import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function Index() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl`}>TEST</Text>
    </View>
  );
}
