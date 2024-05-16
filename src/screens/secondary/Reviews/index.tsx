import { Text, View } from 'react-native';
import React from 'react';
import { hp, wp } from '~/lib/utils/get_screen_dimensions';
import { color, size } from '~/lib/global';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Reviews from '~/src/screens/secondary/Reviews/Reviews';
import QnA from '~/src/screens/secondary/Reviews/QnA';

const Tab = createMaterialTopTabNavigator();

const ReviewHome = () => {
  return (
    <View
      className="h-full w-full bg-white"
      style={{ paddingTop: size.height.sm, rowGap: size.height.xs }}>
      <View style={{ paddingHorizontal: hp(2.5), rowGap: size.height.xxs }}>
        <Text className="text-text font-medium" style={{ fontSize: size.text.lg }}>
          Your Reviews & Contributions
        </Text>
        <Text style={{ fontSize: size.text.small }} className="text-text-light font-light">
          Your reviews, questions and answers will appear on the employer’s Company Page. They are
          not associated with your name, CV or job Applications.
        </Text>
      </View>
      <Tab.Navigator
        initialRouteName="Inbox"
        backBehavior="history"
        screenOptions={{
          tabBarLabelStyle: { fontSize: size.text.small, textTransform: 'none' },
          tabBarIndicatorStyle: { backgroundColor: '#003A9B' },
          tabBarActiveTintColor: '#003A9B',
          tabBarStyle: { height: 60, elevation: 20, shadowColor: color.text_light },
        }}>
        <Tab.Screen
          name="Reviews"
          component={Reviews}
          options={{
            tabBarItemStyle: {
              flexDirection: 'row',
              width: wp(50),
              justifyContent: 'center',
            },
          }}
        />
        <Tab.Screen
          name="Questions and Answers"
          component={QnA}
          options={{
            tabBarLabel: 'Questions & Answers',
            tabBarShowLabel: true,
            tabBarItemStyle: {
              flexDirection: 'row',
              width: wp(50),
              justifyContent: 'center',
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ReviewHome;
