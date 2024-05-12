import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';

import React from 'react';
import { Easing } from 'react-native';
import Auth from '../auth/credentials';
import OnboardingNavigator from '../auth/onboarding';
import Loading from '../loading/Loading';
import DrawerNavigator from './drawer-navigator';

export type RootStackParamList = {
  Authentication: undefined;
  DrawerNavigator: undefined;
  TabNavigator: undefined;
  Loading: undefined;
  OnboardingNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const config: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 250,
    easing: Easing.linear,
  },
};

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Loading'}
        screenOptions={{
          gestureEnabled: true,
          gestureResponseDistance: 100,
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen
          name="Authentication"
          component={Auth}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="OnboardingNavigator"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
