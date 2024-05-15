import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { size } from '~/lib/global';
import { wp } from '~/lib/utils/get_screen_dimensions';

const Reviews = () => {
  return (
    <View className="h-full w-full bg-white justify-center items-center gap-y-4">
      <Image
        source={require('../../../../assets/illstrations/Reviews.png')}
        style={{ height: wp(24), width: wp(24) }}
      />
      <Text
        className="text-center text-text-light/50 font-medium"
        style={{ fontSize: size.text.body }}>
        You Haven’t Reviewed{'\n'}Anyone Yet
      </Text>
    </View>
  );
};

export default Reviews;
