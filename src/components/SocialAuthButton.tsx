import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { hp } from '~/lib/utils/get_screen_dimensions';

type SocialAuthButtonProps = {
  provider: string;
  url?: string;
};

const SocialAuthButton = ({ provider, url }: SocialAuthButtonProps) => {
  return (
    <View className="gap-y-[8] justify-center items-center">
      <Image source={url} style={{ height: hp(5), width: hp(5) }} contentFit="contain" />
      <Text className="text-lg text-text">{provider}</Text>
    </View>
  );
};

export default SocialAuthButton;
