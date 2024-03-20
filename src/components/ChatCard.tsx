import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

type ChatCardProps = {
  company: string;
  logo: any;
  message: string;
};

const ChatCard = ({ company, logo, message }: ChatCardProps) => {
  return (
    <View className="h-[80] px-[25] justify-start items-center flex-row gap-x-[16] border-b border-text-light/20">
      <Image source={logo} style={{ height: 32, width: 32 }} contentFit="contain" />
      <View>
        <Text className="text-2xl font-semibold text-text">{company}</Text>
        <Text className="text-text-light/80">{message}</Text>
      </View>
    </View>
  );
};

export default ChatCard;
