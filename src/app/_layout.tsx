import { View } from 'react-native';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw, { useDeviceContext } from 'twrnc';

export default function RootLayout() {
  useDeviceContext(tw);

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1`}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
