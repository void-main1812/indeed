import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { hp } from '~/lib/utils/get_screen_dimensions';
import PrimaryButton from '~/src/components/PrimaryButton';
import { size } from '~/lib/global';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }: any) => {
  return (
    <View
      className="w-full h-full justify-center items-center"
      style={{ gap: size.height.md, paddingHorizontal: hp(2.5) }}>
      <View className="flex items-center" style={{ gap: hp(0.8) }}>
        <Image
          source={require('../../../assets/indeed_logo.png')}
          style={{ height: 40, width: 160 }}
          contentFit="contain"
        />
      </View>
      <View>
        <Image
          source={require('../../../assets/Welcome.png')}
          style={{ height: size.width.lg, width: size.width.lg }}
        />
      </View>
      <View className="w-full" style={{ gap: hp(0.8) }}>
        <Text className="font-semibold" style={{ fontSize: size.text.regular }}>
          Hey!
        </Text>
        <Text className="font-bold text-primary" style={{ fontSize: size.text.xl }}>
          Welcome Board,
        </Text>
      </View>
      <View className="w-full" style={{ rowGap: size.height.md }}>
        <PrimaryButton
          onPress={() => navigation.navigate('UserInformation')}
          text="Let's Get Started"
          icon="arrow-forward"
        />
        <Pressable
          className="w-full text-center justify-center items-center"
          onPress={() => navigation.replace('DrawerNavigator')}>
          <Text style={{ fontSize: size.text.body }} className="text-primary font-medium">
            Skip for Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Welcome;
