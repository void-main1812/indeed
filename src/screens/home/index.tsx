import React from 'react';
import { ScrollView, View } from 'react-native';
import MultiSearchBar from './components/MultiSearchBar';
import FilterBar from './components/FilterBar';

const Home = ({ navigation }: any) => {
  return (
    <ScrollView className=" bg-white pt-[25]" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="gap-y-[24]">
        <View className='px-[25]' >
          <MultiSearchBar />
        </View>
        <View className='pl-[25]' >
          <FilterBar />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
