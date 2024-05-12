import { View, Text } from 'react-native';
import React from 'react';
import { size } from '~/lib/global';

type SeparatorProps = {
  text?: string;
};

const Separator = ({ text }: SeparatorProps) => {
  return (
    <View className="w-full py-2 justify-center items-center relative">
      <View className="w-full h-[1px] bg-text-light/20" />
      {text ? (
        <Text
          className="absolute p-2 bg-white font-light text-text-light"
          style={{ fontSize: size.text.small }}>
          {text}
        </Text>
      ) : null}
    </View>
  );
};

export default Separator;
