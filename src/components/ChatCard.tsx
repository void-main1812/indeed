import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { size } from '~/lib/global';
import { wp } from '~/lib/utils/get_screen_dimensions';

type ChatCardProps = {
  company: string;
  logo: any;
  message: string;
};

const ChatCard = ({ company, logo, message }: ChatCardProps) => {
  return (
    <View className="h-[80] px-[25] justify-start items-center flex-row gap-x-[16] border-b border-text-light/10">
      <Image source={logo} style={{ height: 32, width: 32 }} contentFit="contain" />
      <View>
        <Text className="font-semibold text-text" style={{ fontSize: size.text.body }}>
          {company}
        </Text>
        <Text
          className="text-text-light/80"
          numberOfLines={1}
          style={{ fontSize: size.text.small, width: wp(75) }}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default ChatCard;
