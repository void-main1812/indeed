import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const Updates = () => {
  return (
    <View className="h-full w-full bg-white justify-center items-center">
      <Image
        source={require('../../../assets/illstrations/updates.png')}
        style={{ height: 120, width: 120 }}
        contentFit="contain"
      />
      <Text className="text-3xl w-[50%] text-center text-text-light/50 font-medium mt-[16]">
        No Updates for You
      </Text>
    </View>
  );
};

export default Updates;
