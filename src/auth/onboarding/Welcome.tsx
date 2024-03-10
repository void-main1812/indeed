import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from '~/lib/utils/get_screen_dimensions';
import PrimaryButton from '~/src/components/PrimaryButton';

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center bg-white gap-[40] px-[25]">
        <View>
          <Image
            source={require('../../../assets/Welcome.png')}
            style={{ height: wp(88), width: wp(88) }}
          />
        </View>
        <View className="gap-[16] w-full">
          <Text className="text-4xl font-semibold">Hey!</Text>
          <Text className="text-6xl font-bold text-[#003A9B]">Welcome Board,</Text>
          <Text className="text-2xl">
            This is a Journey where you'll take the next major step to become successful person.
            Your Dream job 😁
          </Text>
        </View>
        <View className="w-full absolute bottom-[25]">
          <PrimaryButton
            onPress={() => navigation.navigate('UserInformation')}
            text="Let's Get Started"
            icon="arrow-forward"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
