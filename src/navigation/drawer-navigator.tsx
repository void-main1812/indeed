import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from '~/lib/utils/get_screen_dimensions';
import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';

type DrawerNavProp = DrawerNavigationProp<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

const DrawerHeader = () => {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <View
      style={{
        width: wp('100%'),
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
      }}>
      <Image
        source={require('../../assets/indeed_logo.png')}
        style={{ height: 30, width: 120 }}
        contentFit="contain"
      />
      <Pressable style={{ padding: 5 }} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} />
      </Pressable>
    </View>
  );
};

export default function DrawerNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          swipeEdgeWidth: 100,
          swipeMinDistance: 50,
          header() {
            return <DrawerHeader />;
          },
          drawerStyle: {
            width: wp(100),
          },
        }}>
        <Drawer.Screen
          name="HomeNavigator"
          // @ts-ignore
          component={TabNavigator}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Home',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
