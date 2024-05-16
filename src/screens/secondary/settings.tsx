import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { hp } from '~/lib/utils/get_screen_dimensions';
import { color, size } from '~/lib/global';
import { Ionicons } from '@expo/vector-icons';
import Separator from '~/src/components/Separator';
import ToggleSwitch from 'toggle-switch-react-native';
import colors from 'tailwindcss/colors';
import { Underline } from 'react-native-paper/lib/typescript/components/TextInput/Addons/Underline';

type AccountSettingItem = {
  Title: string;
  Description: string;
  PrecedingIcon: keyof typeof Ionicons.glyphMap;
  TrailingIcon: keyof typeof Ionicons.glyphMap;
};

// Account Setting Items to be displayed in the Settings screen
const accountSettingItems: AccountSettingItem[] = [
  {
    Title: 'Account Type',
    Description: 'Job Seeker',
    PrecedingIcon: 'person-outline',
    TrailingIcon: 'ellipsis-vertical',
  },
  {
    Title: 'Email',
    Description: 'johnDoe@host.com',
    PrecedingIcon: 'mail-outline',
    TrailingIcon: 'pencil',
  },
  {
    Title: 'Password',
    Description: 'kjsi@#%$',
    PrecedingIcon: 'lock-closed-outline',
    TrailingIcon: 'pencil',
  },
  {
    Title: 'Phone Number',
    Description: '9630326630',
    PrecedingIcon: 'call-outline',
    TrailingIcon: 'pencil',
  },
];

// Settings: A screen where the user can view and edit their account settings
const Settings = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  return (
    <ScrollView
      className="h-full w-full bg-white"
      style={{
        paddingHorizontal: hp(2.5),
        paddingTop: size.height.xs,
      }}
      contentContainerStyle={{ rowGap: size.height.sm }}>
      {/*----------------------------Account Settings-----------------------------*/}
      <View>
        <Text
          className="font-semibold text-text"
          style={{ fontSize: size.text.regular, marginBottom: size.height.md }}>
          Account Settings
        </Text>
        {accountSettingItems.map((item, index) => (
          <View
            key={index}
            className="w-full justify-between items-center flex-row"
            style={{ marginBottom: size.height.xs }}>
            <Pressable>
              <Ionicons name={item.PrecedingIcon} size={24} color={color.text} />
            </Pressable>
            <View className="gap-y-2 w-[80%]">
              <Text className="font-normal text-text" style={{ fontSize: size.text.body }}>
                {item.Title}
              </Text>
              <Text className="text-text-light font-light" style={{ fontSize: size.text.small }}>
                {item.Description}
              </Text>
            </View>
            <Pressable>
              <Ionicons name={item.TrailingIcon} size={24} color={color.text} />
            </Pressable>
          </View>
        ))}
        <Separator />
      </View>
      {/*--------------------------------Email Preference----------------------------------------*/}
      <View>
        <Text
          className="font-semibold text-text"
          style={{ fontSize: size.text.regular, marginBottom: size.height.xxs }}>
          Email Subscriptions
        </Text>
        <Text className="font-light text-text-light" style={{ fontSize: size.text.small }}>
          You will receive various emails from Indeed based on your email preferences
        </Text>
        <View
          style={{ marginVertical: size.height.xs }}
          className="w-full p-6 bg-neutral-100 rounded-lg gap-y-2">
          <View className="flex-row justify-between w-full items-center">
            <Text className="font-normal text-text" style={{ fontSize: size.text.body }}>
              Allow Commercial Emails
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
            You Will receive commercial emails which can include ads and promotions based on your
            present activity and jo preferences{' '}
          </Text>
        </View>
        <View
          className="w-full justify-between items-center flex-row"
          style={{ marginBottom: size.height.xs }}>
          <View className="gap-y-2 w-[80%]">
            <Text className="font-normal text-text" style={{ fontSize: size.text.body }}>
              Edit your Email Preferences
            </Text>
            <Text className="text-text-light font-light" style={{ fontSize: size.text.small }}>
              Edit or change your email subscriptions based on your requirements
            </Text>
          </View>
          <Pressable>
            <Ionicons name={'pencil'} size={24} color={color.text} />
          </Pressable>
        </View>
      </View>
      <Separator />
      <View style={{ rowGap: size.height.sm }}>
        <Text style={{ fontSize: size.text.regular }} className="text-rose-400 font-medium">
          Danger Zone
        </Text>
        <View className="gap-y-1">
          <Pressable className="flex-row gap-x-4 items-center p-4">
            <Ionicons name={'log-out-outline'} size={24} color={color.text} />
            <Text style={{ fontSize: size.text.small }} className="font-normal text-text">
              Log Out
            </Text>
          </Pressable>
          <Pressable className="flex-row gap-x-4 items-center w-full rounded-lg bg-rose-50 p-4">
            <Ionicons name={'trash-outline'} size={24} color={colors.rose[500]} />
            <Text style={{ fontSize: size.text.small }} className="font-normal text-rose-500">
              Delete My Account
            </Text>
          </Pressable>
        </View>
      </View>
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

export default Settings;
