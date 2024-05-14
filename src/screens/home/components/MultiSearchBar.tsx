import React from 'react';
import { View } from 'react-native';
import Input from '~/src/components/Input';
import { color } from '~/lib/global';

const MultiSearchBar = () => {
  return (
    <View className="w-full gap-0">
      <Input
        placeholder="Search Jobs, keywords or company"
        onChangeText={() => {}}
        classname="rounded-b-none"
        icon="search"
      />
      <Input
        placeholder="Search City, State or Remote"
        onChangeText={() => {}}
        classname="rounded-t-none bg-primary/10 border-transparent"
        icon="location"
        iconColor={color.primary}
        placeholderTextColor={color.primary}
      />
    </View>
  );
};

export default MultiSearchBar;
