import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
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
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: wp(33) },
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon(props) {
            return (
              <Ionicons
                size={24}
                name={props.focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'}
                color="black"
              />
            );
          },
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
          tabBarIcon(props) {
            return (
              <Ionicons
                size={24}
                name={props.focused ? 'archive' : 'archive-outline'}
                color="black"
              />
            );
          },
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
          tabBarIcon(props) {
            return (
              <Ionicons
                size={24}
                name={props.focused ? 'alert-circle' : 'alert-circle-outline'}
                color="black"
              />
            );
          },
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
