import { View, Text } from 'react-native';
import React from 'react';

type SaperatorProps = {
  text?: string;
};

const Saperator = ({ text }: SaperatorProps) => {
  return (
    <View className="w-full py-2 justify-center items-center relative">
      <View className="w-full h-[1px] bg-text-light/20" />
      {text ? (
        <Text className="absolute p-2 bg-white text-lg font-light text-text-light">{text}</Text>
      ) : null}
    </View>
  );
};

export default Saperator;
