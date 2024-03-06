import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Pressable } from 'react-native';

import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: Props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {
          width: 490,
        },
      }}>
      <Drawer.Screen
        name="TabNavigator"
        // @ts-ignore
        component={TabNavigator}
        options={{
          drawerIcon: ({ size, color }) => <Ionicons name="square" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
