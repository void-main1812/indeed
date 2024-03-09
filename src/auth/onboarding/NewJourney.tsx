import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import PrimaryButton from '~/src/components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons';

const NewJourney = ({ navigation }: any) => {
  return (
    <View className="w-full h-full justify-center items-center bg-white gap-[40] px-[25]">
      <Image
        source={require('../../../assets/indeed_logo.png')}
        style={{ height: 40, width: 160 }}
        contentFit="contain"
      />
      <Image
        source={require('../../../assets/newJourney.png')}
        style={{ height: 450, width: 450 }}
      />
      <View className="gap-[16] w-full">
        <View className="gap-[8] w-full">
          <Text className="text-4xl font-semibold">Get Ready for</Text>
          <Text className="text-6xl font-bold text-[#003A9B]">A New Jouney</Text>
        </View>
        <Text className='text-2xl' >In this journey We will help you find your dream job</Text>
      </View>
      <PrimaryButton onPress={() => navigation.navigate('NewJourney')} text="Next" icon='arrow-forward' />
    </View>
  );
};

export default NewJourney;
