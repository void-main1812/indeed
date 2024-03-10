import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

// Import your onboarding screens here
import Welcome from './Welcome';
import UserInformation from './UserInformation';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { Easing } from 'react-native';

export type RootStackParamList = {
  Welcome: undefined;
  UserInformation: undefined;
};

// Create a stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function OnboardingNavigator() {
  const config: TransitionSpec = {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.linear,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: 100,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen
        name="UserInformation"
        component={UserInformation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
