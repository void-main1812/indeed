import { View, Text } from 'react-native';
import React from 'react';
import Input from '~/src/components/Input';

const MultiSearchBar = () => {
  return (
    <View className="w-full gap-0">
      <Input
        placeholder="Search Jobs, keywords or company"
        onChangeText={() => {}}
        classname="rounded-b-none"
      />
      <Input
        placeholder="Search City, State or Remote"
        onChangeText={() => {}}
        classname="rounded-t-none bg-black border-primary/50"
      />
    </View>
  );
};

export default MultiSearchBar;
