import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

interface PaginationDotsProps {
  totalScreens: number;
  currentIndex: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalScreens,
  currentIndex,
}) => {
  return (
    <View style={tw`flex-row justify-center items-center mt-4`}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <View
          key={index}
          style={tw.style(
            ' mx-1 rounded-full',
            index === currentIndex
              ? 'bg-black w-2.5 h-2.5'
              : 'bg-gray-300 w-[6px] h-[6px]',
          )}
        />
      ))}
    </View>
  );
};

export default PaginationDots;
