import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '~/src/components/Input';
import PrimaryButton from '~/src/components/PrimaryButton';
import { size } from '~/lib/global';
import { hp } from '~/lib/utils/get_screen_dimensions';

const UserInformation = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View
        className="h-full w-full bg-white items-center"
        style={{ rowGap: size.height.regular, paddingHorizontal: hp(2.5), paddingTop: hp(2.5) }}>
        <View className="w-full">
          <Text className="font-normal" style={{ fontSize: size.text.regular }}>
            Let's Start with your
          </Text>
          <Text className="font-bold text-primary" style={{ fontSize: size.text.xxl }}>
            Introduction
          </Text>
        </View>
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          <View className="w-full" style={{ paddingBottom: hp(12), rowGap: size.height.xxs }}>
            <Input label="First Name" placeholder="eg. John Doe" onChangeText={() => {}} />
            <Input label="Phone No." placeholder="eg. 98856 20225" onChangeText={() => {}} />
            <Input label="Your Country" placeholder="eg. India" onChangeText={() => {}} />
            <Input label="Your State" placeholder="eg. Chhattisgarh" onChangeText={() => {}} />
            <Input
              label="Skills"
              placeholder="eg. Software Developer, Product Manager etc."
              onChangeText={() => {}}
            />
          </View>
        </ScrollView>
        <View className="w-full absolute" style={{ bottom: hp(2.5) }}>
          <PrimaryButton
            text="Submit and continue"
            onPress={() => navigation.replace('DrawerNavigator')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInformation;
