import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { size } from '~/lib/global';

type SocialAuthButtonProps = {
  provider: string;
  url?: string;
};

const SocialAuthButton = ({ provider, url }: SocialAuthButtonProps) => {
  return (
    <View className="gap-y-[8] justify-center items-center">
      <Image source={url} style={{ height: hp(4), width: hp(4) }} contentFit="contain" />
      <Text className="text-text" style={{ fontSize: size.text.small }}>
        {provider}
      </Text>
    </View>
  );
};

export default SocialAuthButton;
