import React from 'react';
import { Pressable, Text } from 'react-native';

type LinkProps = {
  onPress: () => void;
  text: string;
};

const Link = ({ onPress, text }: LinkProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-[60px] bg-[#003A9B] justify-center items-center rounded-[8] shadow-xl shadow-black/50">
      <Text className="text-xl text-white font-semibold">{text}</Text>
    </Pressable>
  );
};

export default Link;
