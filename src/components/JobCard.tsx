import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { size } from '~/lib/global';
import { hp } from '~/lib/utils/get_screen_dimensions';

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
  const { text } = size;

  return (
    <View className="p-6 mb-4 w-full bg-neutral-50 rounded-[16] border border-neutral-200 gap-y-6">
      <View className="flex-row gap-x-4 items-center">
        <Image source={logo} style={{ height: hp(4), width: hp(4) }} contentFit="contain" />
        <View>
          <Text className="font-semibold" style={{ fontSize: text.regular }}>
            {name}
          </Text>
          <Text className="font-light" style={{ fontSize: text.small }}>
            {company}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-x-2">
        <Ionicons name="location" size={16} color="#003A9B" />
        <Text className="font-base text-text-light" style={{ fontSize: text.body }}>
          {location}
        </Text>
      </View>
      <View className="flex-row flex-wrap justify-start w-full gap-4 items-center">
        <Text
          className="font-base py-2 px-4 bg-emerald-100 text-emerald-700  rounded-[8]"
          style={{ fontSize: text.small }}>
          ₹ {salary} / month
        </Text>
        <Text
          className="font-base py-2 px-4 bg-neutral-200 text-text  rounded-[8]"
          style={{ fontSize: text.small }}>
          {time}
        </Text>
        <Text
          className="font-base py-2 px-4 bg-neutral-200 text-text  rounded-[8]"
          style={{ fontSize: text.small }}>
          {shift}
        </Text>
        {instantApply ? (
          <Text
            className="font-base py-2 px-4 bg-sky-100 text-secondary  rounded-[8]"
            style={{ fontSize: text.small }}>
            Instant Apply
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default JobCard;
