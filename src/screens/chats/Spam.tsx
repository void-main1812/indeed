import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';

const Archive = () => {
  return (
    <View className="h-full w-full bg-white items-center justify-center">
      <Image
        source={require('../../../assets/illstrations/spams.png')}
        style={{ height: 120, width: 120 }}
        contentFit="contain"
      />
      <Text className="text-3xl w-[70%] text-center text-text-light/50 font-medium mt-[16]">
        Chill, There are no Spam Messages for you
      </Text>
    </View>
  );
};

export default Archive;
