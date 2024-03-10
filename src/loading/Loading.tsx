import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { Image } from 'expo-image';
import { hp, wp } from '~/lib/utils/get_screen_dimensions';
import { BlurView } from 'expo-blur';

const Loading = ({ navigation }: any) => {
  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigation.replace('Authentication');
    }, 3000);

    return () => clearTimeout(navigateToHome);
  }, [navigation]);

  return (
    <View className="h-full w-full justify-center items-center bg-white relative">
      <View className="justify-center items-center" style={{ gap: hp(0.8) }}>
        <Image
          source={require('../../assets/indeed_logo.png')}
          style={{ height: 48, width: 140 }}
          contentFit="contain"
        />
        <Text className="text-lg text-[#003A9B]">Get the Job you Deserve</Text>
      </View>
      <View className="w-[80%] h-[60] rounded-[8] bg-transparent absolute z-10 bottom-10 overflow-hidden border-2 border-white/30">
        <BlurView
          className="h-full w-full justify-center items-center flex-row gap-[16]"
          intensity={50}
          tint="light"
          experimentalBlurMethod="dimezisBlurView">
          <ActivityIndicator size={24} color="#003A9B" />
          <Text className="text-lg text-white">Finding best Jobs for you ...</Text>
        </BlurView>
      </View>
      <View className="absolute" style={{ bottom: hp(-16) }}>
        <Image
          source={require('../../assets/buildings.png')}
          style={{ height: hp(48), width: wp(120) }}
          contentFit="contain"
        />
      </View>
    </View>
  );
};

export default Loading;
