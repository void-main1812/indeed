import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { hp } from '~/lib/utils/get_screen_dimensions';
import Input from '~/src/components/Input';
import PrimaryButton from '~/src/components/PrimaryButton';
import Saperator from '~/src/components/Saperator';
import SocialAuthButton from '~/src/components/SocialAuthButton';

const Auth = ({ navigation }: any) => {
  return (
    <ScrollView
      className="h-full w-full bg-white"
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View className="bg-white px-[25px] h-full w-full justify-center" style={{ gap: hp(4.8) }}>
        <View className="flex items-center" style={{ gap: hp(0.8) }}>
          <Image
            source={require('../../../assets/indeed_logo.png')}
            style={{ height: 40, width: 160 }}
            contentFit="contain"
          />
          <Text className=" text-lg text-primary">Get the Job you Deserve</Text>
        </View>
        <View className="w-full flex items-start" style={{ gap: hp(4.8) }}>
          <View>
            <Text className="text-4xl font-semibold">Welcome Back,</Text>
            <Text className="text-sm">Verify yourself First</Text>
          </View>
          <View className="w-full flex" style={{ gap: hp(1.6) }}>
            <Input
              label="Email-id/Phone no."
              placeholder='eg. "johndoe@host.provider"'
              onChangeText={() => {}}
            />
            <Input label="Password" placeholder='eg. "lakjioe@#123"' onChangeText={() => {}} />
            <Pressable className="w-full items-end">
              <Text className="underline p-[4] font-semibold text-lg">Forgot Password</Text>
            </Pressable>

            <PrimaryButton onPress={() => navigation.replace('OnboardingNavigator')} text="Verify" />
          </View>
          <View className="w-full">
            <Saperator text={'Or Continue with'} />
          </View>
          <View className="flex flex-row w-full justify-between px-[25px]">
            <SocialAuthButton
              provider="Apple"
              url="https://asset.brandfetch.io/idnrCPuv87/idxOYAzhNS.png"
            />
            <SocialAuthButton
              provider="Google"
              url="https://asset.brandfetch.io/id6O2oGzv-/id-DuOtor_.png"
            />
            <SocialAuthButton
              provider="GitHub"
              url="https://asset.brandfetch.io/idZAyF9rlg/idw3q8jby5.png"
            />
          </View>
        </View>
        <View className="w-full items-center">
          <Text className="w-[82%] text-center font-normal text-text-light text-lg">
            By Continuing to the application you agree to our{' '}
            <Text className="font-semibold underline text-text-dark">Privacy Policy</Text>,{' '}
            <Text className="font-semibold underline text-text-dark">Terms & Conditions</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Auth;
