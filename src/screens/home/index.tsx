import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import MultiSearchBar from './components/MultiSearchBar';
import FilterBar from './components/FilterBar';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

const Home = ({ navigation }: any) => {
  return (
    <ScrollView className=" bg-white pt-[25]" contentContainerStyle={{ flexGrow: 1, rowGap: 40 }}>
      <View className="gap-y-[24]">
        <View className="px-[25]">
          <MultiSearchBar />
        </View>
        <View className="pl-[25]">
          <FilterBar />
        </View>
      </View>
      <View className="px-[25] h-52 w-full">
        <View className="h-full w-full rounded-[16] overflow-hidden shadow-2xl shadow-black">
          <LinearGradient
            className="h-full w-full p-[20] items-center flex-row justify-between gap-x-4"
            colors={['#054BC0', '#012C73']}>
            <View className="w-[50%] h-full gap-y-4">
              <View className="gap-y-2 justify-center h-full ">
                <Text className="text-xl text-white">FIND YOUR</Text>
                <Text className="text-4xl text-white font-semibold">DREAM JOB</Text>
                <Text className="text-sm text-white font-light">
                  Find out what do like doing the most and get someone pay you for doing it
                </Text>
              </View>
            </View>
            <View className='w-full h-full' >
              <Image
                source={require('../../../assets/illstrations/dreamJob.png')}
                style={{ height: '100%', width: '50%' }}
                contentFit="contain"
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
