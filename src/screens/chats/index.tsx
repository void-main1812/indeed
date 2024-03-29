import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { wp } from '~/lib/utils/get_screen_dimensions';
import Archive from './Archive';
import Inbox from './Inbox';
import Spam from './Spam';

const Tab = createMaterialTopTabNavigator();

export default function ChatNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inbox"
      backBehavior="history"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, textTransform: 'none' },
        tabBarItemStyle: { width: wp(33) },
        tabBarIndicatorStyle: { backgroundColor: '#003A9B' },
        tabBarActiveTintColor: '#003A9B',
        tabBarStyle: {height: 50}
      }}>
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarItemStyle: {
            flexDirection: 'row',
            width: wp(33),
            justifyContent: 'center',
          },
        }}
      />
      <Tab.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarLabel: 'Archive',
          tabBarShowLabel: true,
          tabBarItemStyle: {
            flexDirection: 'row',
            width: wp(33),
            justifyContent: 'center',
          },
        }}
      />
      <Tab.Screen
        name="Spam"
        component={Spam}
        options={{
          tabBarItemStyle: {
            flexDirection: 'row',
            width: wp(33),
            justifyContent: 'center',
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
