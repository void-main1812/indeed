import { View, Text, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { color, size } from '~/lib/global';
import Input from '../../components/Input';
import PrimaryButton from '~/src/components/PrimaryButton';
import { Image } from 'expo-image';
import { MockCompanies } from '~/data/mockData';
import { Ionicons } from '@expo/vector-icons';

const CompanyCard = ({ name, stars, uri }: { name: string; stars: string; uri: any }) => {
  return (
    <View className="w-full py-4 justify-start items-center flex-row gap-x-4 mb-2">
      <Image source={{ uri: uri }} style={{ height: hp(5), width: hp(5) }} contentFit={'contain'} />
      <View>
        <Text style={{ fontSize: size.text.body, color: color.text }} className="font-medium">
          {name}
        </Text>
        <Text style={{ fontSize: size.text.small }} className="text-amber-400">
          <Ionicons name={'star'} />
          {stars}
        </Text>
      </View>
    </View>
  );
};

const CompanyProfile = () => {
  return (
    <ScrollView
      className="h-full w-full bg-white"
      style={{
        paddingTop: size.height.xs,
      }}
      contentContainerStyle={{ rowGap: size.height.md }}>
      <View style={{ paddingHorizontal: hp(2.5) }}>
        <Text className="font-semibold text-text" style={{ fontSize: size.text.regular }}>
          Work where you Matter
        </Text>
        <Text style={{ fontSize: size.text.small, color: color.text_light }} className="font-light">
          Find workplaces that suits you
        </Text>
      </View>
      <View
        style={{ rowGap: size.height.xs, paddingHorizontal: hp(2.5) }}
        className="justify-center items-center">
        <Input
          label={'Company Name or Job Title'}
          placeholder={"eg: 'Google' or 'Web Developer'"}
          onChangeText={() => {}}
        />
        <PrimaryButton onPress={() => {}} text={'Search'} />
        <Text
          style={{
            color: color.primary,
            textDecorationLine: 'underline',
            fontSize: size.text.small,
          }}>
          Search according to Salary
        </Text>
      </View>
      <View style={{ paddingHorizontal: hp(2.5) }}>
        <Text
          style={{ fontSize: size.text.body, marginBottom: size.height.sm }}
          className="font-medium">
          Popular Companies
        </Text>
        <View style={{ marginBottom: size.height.md }}>
          <FlatList
            data={MockCompanies}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <CompanyCard name={item.company} stars={item.stars} uri={item.logo} key={index} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CompanyProfile;
