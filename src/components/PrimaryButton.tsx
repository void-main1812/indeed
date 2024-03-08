import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text } from 'react-native';

type PrimaryButtonProps = {
  onPress: () => void;
  text: string;
};

const PrimaryButton = ({ onPress, text }: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-[60px] bg-[#003A9B] justify-center items-center rounded-[8] overflow-hidden relative z-10"
      style={{ elevation: 20, shadowColor: 'black' }}>
      <Image
        source={require('../../assets/Primary_Button.png')}
        style={{ height: '100%', width: '100%', position: 'absolute', borderRadius: 8 }}
      />
      <Text className="text-2xl text-white font-semibold">{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
