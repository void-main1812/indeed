import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Modal from '../screens/modal';
import DrawerNavigator from './drawer-navigator';
import Auth from '../auth/credentials';
import Loading from '../loading/Loading';
import Welcome from '../auth/onboarding/Welcome';
import UserInformation from '../auth/onboarding/UserInformation';
import NewJourney from '../auth/onboarding/NewJourney';
import JobPreferances from '../auth/onboarding/JobPreferance';

export type RootStackParamList = {
  Authentication: undefined;
  DrawerNavigator: undefined;
  Modal: undefined;
  TabNavigator: undefined;
  Loading: undefined;
  Welcome: undefined;
  UserInformation: undefined;
  JobPreferances: undefined;
  NewJourney: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Authentication" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="NewJourney" component={NewJourney} options={{ headerShown: false }} />
        <Stack.Screen
          name="UserInformation"
          component={UserInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobPreferances"
          component={JobPreferances}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
