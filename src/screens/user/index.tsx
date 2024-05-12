import { View, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { Image } from 'expo-image';
import Separator from '~/src/components/Separator';
import { Ionicons } from '@expo/vector-icons';
import { size } from '~/lib/global';

const JobMatches = [
  {
    title: 'Experience and Skills',
    description: 'Update your Experience and Skills to get better job matches',
  },
  {
    title: 'Job Preferences',
    description: 'Update your Job Preferences according to your choice',
  },
  {
    title: 'Work Status',
    description: 'Let the employer know whether you are available or not',
  },
  {
    title: 'Not Interested',
    description: 'Let us know which type of job you are not interested in',
  },
];

const JobMatch = ({ title, description }: { title: string; description: string }) => {
  return (
    <View className="w-full justify-between items-center flex-row mb-[24]">
      <View className="gap-y-1 w-[80%]">
        <Text className="font-medium text-text" style={{ fontSize: size.text.regular }}>
          {title}
        </Text>
        <Text className="text-text-light font-light" style={{ fontSize: size.text.small }}>
          {description}
        </Text>
      </View>
      <Pressable>
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const User = () => {
  return (
    <ScrollView
      className="h-full w-full bg-white pt-[25] px-[25]"
      contentContainerStyle={{ flexGrow: 1, rowGap: 40 }}>
      {/* SECTION Edit your Profile */}
      <View className="gap-y-[24]">
        <Text className="font-bold text-text" style={{ fontSize: size.text.lg }}>
          Edit your Profile
        </Text>
        <View className="flex-row gap-x-[24] items-center">
          <View style={{ height: hp(10), width: hp(10), borderRadius: 16, overflow: 'hidden' }}>
            <LinearGradient
              colors={['#005FFF', '#003A9B']}
              style={{ height: '100%', width: '100%' }}>
              <Image
                source={require('../../../assets/illstrations/avatars/avatar1.png')}
                style={{ height: hp(10), width: hp(10) }}
              />
            </LinearGradient>
          </View>
          <View className="gap-y-2">
            <Text className="text-2xl font-medium">Sourabh Singh</Text>
            <Text className="w-[80%] text-lg text-text-light font-light">
              Full-Stack Developer & UI/UX Designer
            </Text>
          </View>
        </View>
      </View>
      <Separator />
      {/* SECTION Social Information */}
      <View className="gap-y-[24]">
        <Text className="text-text font-bold" style={{ fontSize: size.text.lg }}>
          Social Information
        </Text>
        <View className="flex-row w-full justify-between items-center">
          <View className="gap-y-[12]">
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="mail-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">
                sourabhsinghredmi@gmail.com
              </Text>
            </View>
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="call-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">2245-789-456</Text>
            </View>
            <View className="flex-row gap-x-4 items-center">
              <Ionicons name="location-outline" size={32} color="#3B5998" />
              <Text className="text-xl text-text-light font-light">
                Raigarh, Chhattisgarh, India
              </Text>
            </View>
          </View>
          {/* TODO: add edit profile dialogue box */}
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color="#3B5998" />
          </Pressable>
        </View>
      </View>
      <Separator />
      {/* SECTION Resume Information */}
      <View className="gap-y-[24]">
        <Text className="font-bold text-text" style={{ fontSize: size.text.lg }}>
          Resume
        </Text>
        <View className="flex-row justify-between items-center w-full">
          <View className="flex flex-row gap-x-2 items-center">
            <Image
              source={require('../../../assets/illstrations/PDF.png')}
              style={{ height: hp(16), width: hp(16) }}
            />
            <View className="gap-y-4">
              <View>
                <Text className="font-medium text-text" style={{ fontSize: size.text.regular }}>
                  Resume.pdf
                </Text>
                <Text className="text-text-light font-light" style={{ fontSize: size.text.xsmall }}>
                  Last updated 2 days ago
                </Text>
              </View>
              <Text
                className="text-lg text-emerald-700 px-4 py-2 bg-emerald-100 text-center rounded-[8]"
                style={{ alignSelf: 'flex-start' }}>
                Searchable
              </Text>
            </View>
          </View>
          <Pressable>
            <Ionicons name="ellipsis-vertical" size={24} color="#3B5998" />
          </Pressable>
        </View>
      </View>
      <Separator />
      {/* SECTION Other Preferences */}
      <View className="gap-y-[20] pb-[120]">
        <Text className="font-bold text-text" style={{ fontSize: size.text.lg }}>
          Improve Job Matches
        </Text>
        <FlatList
          scrollEnabled={false}
          data={JobMatches}
          renderItem={({ item, index }) => {
            return <JobMatch title={item.title} description={item.description} key={index} />;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default User;
