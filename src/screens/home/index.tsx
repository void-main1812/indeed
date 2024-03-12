import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import MultiSearchBar from './components/MultiSearchBar';

const Home = ({ navigation }: any) => {
  return (
      <ScrollView className=" bg-white px-[25] pt-[25]">
        <MultiSearchBar />
        <Text>Home</Text>
        <View className="h-[200%] bg-black w-20" />
      </ScrollView>
  );
};

export default Home;
