import { forwardRef } from 'react';
import { Pressable, PressableProps, View, Text } from 'react-native';
import tw from 'twrnc';

interface CtaTouchableProps extends PressableProps {
  children: React.ReactNode;
}

const CtaTouchable = forwardRef<View, CtaTouchableProps>(
  ({ onPress, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        style={({ pressed }) => [
          tw`rounded-[12px] py-[18px] px-[16px] w-[327px] h-[56px] text-center items-center justify-center`,
          { backgroundColor: 'hsla(151,63%,42%,1)' },
          pressed && tw`opacity-75`,
        ]}
        {...props}
      >
        {props.children}
      </Pressable>
    );
  },
);

export { CtaTouchable };
