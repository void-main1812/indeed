import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <View className="h-full w-full">
        <Pressable onPress={() => navigation.openDrawer()}>
          <Text className="p-5">open menu</Text>
        </Pressable>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
