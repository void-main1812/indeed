import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import PrimaryButton from '~/src/components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

const Welcome = ({ navigation }: any) => {
  return (
    <View className="w-full h-full justify-center items-center bg-white gap-[40] px-[25]">
      <Image
        source={require('../../../assets/indeed_logo.png')}
        style={{ height: 40, width: 160 }}
        contentFit="contain"
      />
      <Image source={require('../../../assets/Welcome.png')} style={{ height: 450, width: 450 }} />
      <View className="gap-[16] w-full">
        <Text className="text-4xl font-semibold">Hey!</Text>
        <Text className="text-6xl font-bold text-[#003A9B]">Welcome Board,</Text>
      </View>
      <PrimaryButton onPress={() => navigation.navigate('NewJourney')} text="Continue" />
      <Pressable onPress={() => navigation.replace('DrawerNavigator')}>
        <View className="flex flex-row justify-center items-center gap-x-2">
          <Text className="text-xl font-semibold text-[#003A9B]">Skip for Now</Text>
          <Ionicons name="arrow-forward" size={20} color={'#003A9B'} />
        </View>
      </Pressable>
    </View>
  );
};

export default Welcome;
