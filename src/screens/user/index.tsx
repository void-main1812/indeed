import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { Image } from 'expo-image';
import Saperator from '~/src/components/Saperator';
import { Ionicons } from '@expo/vector-icons';

const User = () => {
  return (
    <ScrollView
      className="h-full w-full bg-white pt-[25] px-[25] overflow-visible"
      contentContainerStyle={{ flexGrow: 1, rowGap: 40 }}>
      {/* SECTION Edit your Profile */}
      <View className="gap-y-[32]">
        <Text className="text-4xl font-medium text-text">Edit your Profile</Text>
        <View className="flex-row gap-x-[24] items-center">
          <View style={{ height: hp(10), width: hp(10), borderRadius: 16, overflow: 'hidden' }}>
            <LinearGradient
              colors={['#005FFF', '#003A9B']}
              style={{ height: '100%', width: '100%' }}>
              <Image
                source={require('../../../assets/illstrations/avatars/avatar1.png')}
                style={{ height: hp(10), width: hp(10) }}
              />
            </LinearGradient>
          </View>
          <View className="gap-y-2">
            <Text className="text-2xl font-medium">Sourabh Singh</Text>
            <Text className="w-[80%] text-lg text-text-light font-light">
              Full-Stack Developer & UI/UX Designer
            </Text>
          </View>
        </View>
      </View>
      <Saperator />
      {/* SECTION Social Information */}
      <View className="gap-y-[24]">
        <Text className="text-2xl text-text font-medium">Social Information</Text>
        <View className="flex-row w-full justify-between items-center">
          <View className="gap-y-[12]">
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="mail-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">
                sourabhsinghredmi@gmail.com
              </Text>
            </View>
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="call-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">2245-789-456</Text>
            </View>
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="location-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">
                Raigarh, Chhattisgarh, India
              </Text>
            </View>
          </View>
          {/* TODO: add edit profile dialogue box */}
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color="#3B5998" />
          </Pressable>
        </View>
      </View>
      <Saperator />
      {/* SECTION Resume Information */}
    </ScrollView>
  );
};

export default User;
