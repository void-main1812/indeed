import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { size } from '~/lib/global';

type PrimaryButtonProps = {
  onPress: () => void;
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

const PrimaryButton = ({ onPress, text, icon }: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full bg-[#003A9B] justify-center items-center rounded-[16] overflow-hidden relative z-10"
      style={{ elevation: 20, shadowColor: 'black', height: size.height.xl }}>
      <Image
        source={require('../../assets/Primary_Button.png')}
        style={{ height: '100%', width: '100%', position: 'absolute', borderRadius: 8 }}
      />
      <View className="flex-row gap-x-2 items-center">
        <Text className="text-white font-normal" style={{ fontSize: size.text.regular }}>
          {text}
        </Text>
        {icon ? <Ionicons name={icon} size={20} color={'white'} /> : null}
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
