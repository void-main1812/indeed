import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { Image } from 'expo-image';

const User = () => {
  return (
    <ScrollView
      className="h-full w-full bg-white pt-[25] overflow-visible"
      contentContainerStyle={{ flexGrow: 1, rowGap: 40 }}>
      <View className="gap-y-[32] mx-[25] border-b pb-[40] border-text-light/20">
        <Text className="text-4xl font-medium text-text">Edit your Profile</Text>
        <View className="flex-row gap-x-[24] items-center">
          <View
            className="shadow-2xl shadow-primary"
            style={{ height: hp(10), width: hp(10), borderRadius: 16, overflow: 'hidden' }}>
            <LinearGradient
              colors={['#005FFF', '#003A9B']}
              style={{ height: '100%', width: '100%' }}>
              <Image
                source={require('../../../assets/illstrations/avatars/avatar1.png')}
                style={{ height: hp(10), width: hp(10) }}
              />
            </LinearGradient>
          </View>
          <View className='gap-y-2' >
            <Text className='text-2xl font-medium' >Sourabh Singh</Text>
            <Text className='w-[80%] text-lg' >Full-Stack Developer & UI/UX Designer</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default User;
