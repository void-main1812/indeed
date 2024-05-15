import React from 'react';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import { wp } from '~/lib/utils/get_screen_dimensions';
import { size } from '~/lib/global';

const QnA = () => {
  return (
    <View className="h-full w-full bg-white justify-center items-center gap-y-4">
      <Image
        source={require('../../../../assets/illstrations/Qna.png')}
        style={{ height: wp(24), width: wp(24) }}
      />
      <Text
        className="text-center text-text-light/50 font-medium"
        style={{ fontSize: size.text.body }}>
        Go and ask questions{'\n'}and help others too
      </Text>
    </View>
  );
};

export default QnA;
