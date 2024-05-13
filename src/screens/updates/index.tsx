import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { size } from '~/lib/global';
import { hp } from '~/lib/utils/get_screen_dimensions';

const Updates = () => {
  return (
    <View className="h-full w-full bg-white justify-center items-center">
      <Image
        source={require('../../../assets/illstrations/updates.png')}
        style={{ height: hp(12), width: hp(12) }}
        contentFit="contain"
      />
      <Text
        className="w-[50%] text-center text-text-light/50 font-medium mt-[16]"
        style={{ fontSize: size.text.regular }}>
        No Updates for{'\n'}You
      </Text>
    </View>
  );
};

export default Updates;
