import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { color, size } from '~/lib/global';
import ToggleSwitch from 'toggle-switch-react-native';
import colors from 'tailwindcss/colors';
import Separator from '~/src/components/Separator';
import { Ionicons } from '@expo/vector-icons';

type AccountSettingItem = {
  Title: string;
  Description: string;
  PrecedingIcon: keyof typeof Ionicons.glyphMap;
  TrailingIcon: keyof typeof Ionicons.glyphMap;
};

// Account Setting Items to be displayed in the Settings screen
const accountSettingItems: AccountSettingItem[] = [
  {
    Title: 'Job Type',
    Description: 'Internship',
    PrecedingIcon: 'briefcase-outline',
    TrailingIcon: 'pencil',
  },
  {
    Title: 'Base Pay',
    Description: '₹ 25,000/ month',
    PrecedingIcon: 'cash-outline',
    TrailingIcon: 'pencil',
  },
  {
    Title: 'Preferred Roles',
    Description: 'Software Developer',
    PrecedingIcon: 'person-outline',
    TrailingIcon: 'pencil',
  },
  {
    Title: 'Location Preference',
    Description: 'Remote',
    PrecedingIcon: 'location-outline',
    TrailingIcon: 'pencil',
  },
];

const JobPreferances = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  return (
    <ScrollView
      className="h-full w-full bg-white"
      contentContainerStyle={{
        paddingHorizontal: hp(2.5),
        paddingTop: size.height.md,
        rowGap: size.height.lg,
      }}>
      <View style={{ rowGap: size.height.md }}>
        <View>
          <View className="gap-y-2">
            <Text className="text-text font-medium" style={{ fontSize: size.text.regular }}>
              Find Best Jobs for You
            </Text>
            <Text style={{ fontSize: size.text.small }} className="text-text-light font-light">
              Set your preferences, from tasks to culture, and let us find the best opportunities
              for you.
            </Text>
          </View>
          <View
            style={{ marginVertical: size.height.xs }}
            className="w-full p-6 bg-neutral-100 rounded-lg gap-y-2">
            <View className="flex-row justify-between w-full items-center">
              <Text className="font-normal text-text" style={{ fontSize: size.text.body }}>
                Enable Job Preferences
              </Text>
              <ToggleSwitch
                isOn={isEnabled}
                onToggle={() => {
                  setIsEnabled(!isEnabled);
                }}
                onColor={'#3183FF'}
                offColor={colors.neutral[300]}
                size="medium"
              />
            </View>
            <Separator />
            <Text className="font-light text-text-light" style={{ fontSize: size.text.small }}>
              Note: Your Job preferences might be visible to your employer if your resume is set to
              searchable
            </Text>
          </View>
        </View>
        <View className="gap-y-6">
          <Text className="text-text font-medium" style={{ fontSize: size.text.regular }}>
            Set Your Job Preferences
          </Text>
          <View style={{ rowGap: size.height.xs }}>
            {accountSettingItems.map((item, index) => (
              <View key={index} className="w-full justify-between items-center flex-row">
                <Pressable>
                  <Ionicons name={item.PrecedingIcon} size={24} color={color.text} />
                </Pressable>
                <View className="gap-y-2 w-[80%]">
                  <Text className="font-normal text-text" style={{ fontSize: size.text.body }}>
                    {item.Title}
                  </Text>
                  <Text
                    className="text-text-light font-light"
                    style={{ fontSize: size.text.small }}>
                    {item.Description}
                  </Text>
                </View>
                <Pressable>
                  <Ionicons name={item.TrailingIcon} size={24} color={color.text} />
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </View>
      <Separator />
      <View
        className="w-full justify-center items-center"
        style={{ paddingBottom: size.height.lg }}>
        <Text style={{ fontSize: size.text.xsmall }} className="text-text-light font-light">
          @2024 Indeed -{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Cookies, Privacy & Terms</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default JobPreferances;
