import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { filters } from '~/data/mockData';

const FilterBar = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex-row items-center py-2 px-4 bg-neutral-100 border border-neutral-200 rounded-[8] gap-x-2 mr-6">
        <Text className=" text-lg">Filters</Text>
        <Ionicons name="chevron-down" />
      </View>
      {filters.map((item, index) => {
        return (
          <View
            key={index}
            className="flex-row items-center py-2 px-4 bg-neutral-100 border border-neutral-200 rounded-[8] mr-6">
            <Text className=" text-lg">{item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default FilterBar;
