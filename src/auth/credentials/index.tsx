import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { hp } from '~/lib/utils/get_screen_dimensions';
import Input from '~/src/components/Input';
import PrimaryButton from '~/src/components/PrimaryButton';
import Separator from '~/src/components/Separator';
import SocialAuthButton from '~/src/components/SocialAuthButton';
import { size } from '~/lib/global';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView
        className="h-full w-full bg-white"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View
          className="bg-white h-full w-full justify-center"
          style={{ gap: size.height.sm, paddingHorizontal: hp(2.5) }}>
          <View className="flex items-center" style={{ gap: hp(0.8) }}>
            <Image
              source={require('../../../assets/indeed_logo.png')}
              style={{ height: 30, width: 120 }}
              contentFit="contain"
            />
            <Text className="text-primary" style={{ fontSize: size.text.small }}>
              Get the Job you Deserve
            </Text>
          </View>
          <View className="w-full flex items-start" style={{ gap: size.height.regular }}>
            <View>
              <Text className=" font-semibold" style={{ fontSize: size.text.lg }}>
                Welcome Back,
              </Text>
              <Text style={{ fontSize: size.text.small }}>Verify yourself First</Text>
            </View>
            <View className="w-full flex" style={{ gap: size.height.xxs }}>
              <Input
                label="Email-id/Phone no."
                placeholder='eg. "johndoe@host.provider"'
                onChangeText={() => {}}
                icon={'mail-outline'}
              />
              <Input
                label="Password"
                icon={'lock-closed-outline'}
                placeholder='eg. "lakjioe@#123"'
                onChangeText={() => {}}
                secureTextEntry={true}
              />
              <Pressable className="w-full items-end">
                <Text
                  className="underline p-[4] font-semibold"
                  style={{ fontSize: size.text.small }}>
                  Forgot Password
                </Text>
              </Pressable>

              <PrimaryButton
                onPress={() => navigation.replace('OnboardingNavigator')}
                text="Continue"
                icon="arrow-forward"
              />
            </View>
            <View className="w-full">
              <Separator text={'Or Continue with'} />
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
            <Text
              className="w-[82%] text-center font-normal text-text-light"
              style={{ fontSize: size.text.small }}>
              By Continuing to the application you agree to our{' '}
              <Text className="font-semibold underline text-text-dark">Privacy Policy</Text>,{' '}
              <Text className="font-semibold underline text-text-dark">Terms & Conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
