import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import MultiSearchBar from './components/MultiSearchBar';
import FilterBar from './components/FilterBar';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { MockJobs } from '~/data/mockData';
import JobCard from '~/src/components/JobCard';
import { size } from '~/lib/global';
import { hp } from '~/lib/utils/get_screen_dimensions';

const Home = ({ navigation }: any) => {
  const { text, width, height } = size;

  return (
    <ScrollView className="bg-white pt-[25]" contentContainerStyle={{ flexGrow: 1, rowGap: 56 }}>
      <View className="gap-y-[24]">
        <View className="px-[25]">
          <MultiSearchBar />
        </View>
        <View className="pl-[25]">
          <FilterBar />
        </View>
      </View>
      <View className="w-full" style={{ height: hp(20), paddingHorizontal: hp(2.5) }}>
        <View className="h-full w-full rounded-[16] overflow-hidden shadow-2xl shadow-black">
          <LinearGradient
            className="h-full w-full items-center flex-row justify-between"
            colors={['#054BC0', '#012C73']}
            style={{ padding: height.xs }}>
            <View className="justify-center h-full">
              <Text className="text-white" style={{ fontSize: text.small }}>
                FIND YOUR
              </Text>
              <Text className="text-white font-semibold mb-4" style={{ fontSize: text.regular }}>
                DREAM JOB
              </Text>
              <Text
                className="text-white font-light"
                style={{ fontSize: text.small, width: width.small }}>
                Find out what do like doing the most and get someone pay you for doing it
              </Text>
            </View>
            <View className="h-full items-center flex-row">
              <Image
                source={require('../../../assets/illstrations/dreamJob.png')}
                style={{ height: '70%', width: width.small }}
                contentFit="contain"
              />
            </View>
          </LinearGradient>
        </View>
      </View>
      <View className="px-[25] gap-y-[24] pb-[150]">
        <View>
          <Text className="font-semibold text-text" style={{ fontSize: size.text.regular }}>
            Best Picks for You
          </Text>
          <Text className="font-light text-text-light" style={{ fontSize: size.text.small }}>
            Jobs based on your preference and activity on Indeed
          </Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={MockJobs}
          renderItem={({ item }) => (
            <JobCard
              name={item.name}
              company={item.company}
              key={item.id}
              instantApply={item.instantApply}
              location={item.location}
              logo={item.logo}
              salary={item.salary}
              shift={item.shift}
              time={item.time}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
