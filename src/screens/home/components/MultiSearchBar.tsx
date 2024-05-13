import React from 'react';
import { View } from 'react-native';
import Input from '~/src/components/Input';

const MultiSearchBar = () => {
  return (
    <View className="w-full gap-0">
      <Input
        placeholder="Search Jobs, keywords or company"
        onChangeText={() => {}}
        classname="rounded-b-none border-b-0 border-gray-400 "
        icon="search"
      />
      <Input
        placeholder="Search City, State or Remote"
        onChangeText={() => {}}
        classname="rounded-t-none bg-primary/10 border-primary/50"
        icon="location"
        iconColor="#003A9B"
        placeholderTextColor={'#003A9B'}
      />
    </View>
  );
};

export default MultiSearchBar;
