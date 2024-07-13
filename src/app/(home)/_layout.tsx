import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name='home' color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
