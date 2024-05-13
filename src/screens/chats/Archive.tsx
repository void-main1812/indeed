import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { size } from '~/lib/global';
import { hp } from '~/lib/utils/get_screen_dimensions';

const Archive = () => {
  return (
    <View className="h-full w-full bg-white items-center justify-center">
      <Image
        source={require('../../../assets/illstrations/archive.png')}
        style={{ height: hp(12), width: hp(12) }}
        contentFit="contain"
      />
      <Text
        className="text-center text-text-light/50 font-medium mt-[16]"
        style={{ fontSize: size.text.regular }}>
        No Archived{'\n'}Messages
      </Text>
    </View>
  );
};

export default Archive;
