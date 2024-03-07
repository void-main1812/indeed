import { Image } from 'expo-image';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Input from '~/src/components/Input';
import Link from '~/src/components/Link';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = ({ navigation }: any) => {
  return (
    <View className="bg-white gap-[64px] px-[25px] h-full w-full justify-center">
      <View className="flex items-center gap-[8px]">
        <Image
          source={require('../../../assets/indeed_logo.png')}
          style={{ height: 32.5, width: 120 }}
        />
        <Text className="text-sm text-[#003A9B]">Get the Job you Deserve</Text>
      </View>
      <View className="w-full flex items-start gap-[32px]">
        <View>
          <Text className="text-4xl font-semibold">Welcome Back,</Text>
          <Text className="text-sm">Verify yourself First</Text>
        </View>
        <View className="w-full flex gap-[16px]">
          <Input
            label="Email-id/Phone no."
            placeholder='eg. "johndoe@host.provider"'
            onChangeText={() => {}}
          />
          <Input label="Password" placeholder='eg. "lakjioe@#123"' onChangeText={() => {}} />
          <Pressable className="w-full items-end">
            <Text className="underline">Forgot Password</Text>
          </Pressable>

          <Link onPress={() => navigation.navigate('DrawerNavigator')} text="Continue" />
        </View>
      </View>
    </View>
  );
};

export default Auth;
