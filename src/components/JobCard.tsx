import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

type JobCardProps = {
  name: string;
  company: string;
  location: string;
  salary: string;
  time: string;
  shift: string;
  logo: any;
  instantApply: boolean;
};

const JobCard = ({
  name,
  company,
  location,
  salary,
  time,
  shift,
  logo,
  instantApply,
}: JobCardProps) => {
  return (
    <View className="p-6 mb-4 w-full bg-neutral-50 rounded-[16] border border-neutral-200 gap-y-6">
      <View className="flex-row gap-x-4 items-center">
        <Image source={logo} style={{ height: 50, width: 50 }} contentFit="contain" />
        <View>
          <Text className="text-3xl font-semibold">{name}</Text>
          <Text className="text-sm font-light">{company}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-x-4">
        <Ionicons name="location" size={24} color="#003A9B" />
        <Text className="text-xl font-base text-text-light">{location}</Text>
      </View>
      <View className="flex-row flex-wrap justify-start w-full gap-4 items-center">
        <Text className="text-md font-base py-2 px-4 bg-emerald-100 text-emerald-700  rounded-[8]">
          ₹ {salary} / month
        </Text>
        <Text className="text-md font-base py-2 px-4 bg-neutral-200 text-text  rounded-[8]">
          {time}
        </Text>
        <Text className="text-md font-base py-2 px-4 bg-neutral-200 text-text  rounded-[8]">
          {shift}
        </Text>
        {instantApply ? (
          <Text className="text-md font-base py-2 px-4 bg-sky-100 text-secondary  rounded-[8]">
            Instant Apply
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default JobCard;
