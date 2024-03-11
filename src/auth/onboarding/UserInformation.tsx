import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '~/src/components/Input';
import PrimaryButton from '~/src/components/PrimaryButton';

const UserInformation = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View className="h-full w-full bg-white px-[25] pt-[25] gap-y-[32] items-center">
        <View className="w-full gap-y-[16]">
          <Text className="text-2xl font-normal">Let's Start with your</Text>
          <Text className="text-6xl font-bold text-primary">Introduction</Text>
        </View>
        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
          <View className="w-full gap-y-[16] pb-[120]">
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
        <View className="w-full absolute bottom-[25]">
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
