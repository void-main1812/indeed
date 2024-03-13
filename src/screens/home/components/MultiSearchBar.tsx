import { View, Text } from 'react-native';
import React from 'react';
import InputWithIcon from '~/src/components/InputWithIcon';

const MultiSearchBar = () => {
  return (
    <View className="w-full gap-0">
      <InputWithIcon
        placeholder="Search Jobs, keywords or company"
        onChangeText={() => {}}
        classname="rounded-b-none"
        icon="search"
      />
      <InputWithIcon
        placeholder="Search City, State or Remote"
        onChangeText={() => {}}
        classname="rounded-t-none bg-primary/10 border-primary/50"
        icon="location"
        iconColor="#003A9B"
      />
    </View>
  );
};

export default MultiSearchBar;
