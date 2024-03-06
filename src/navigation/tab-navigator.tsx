import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '.';
import Home from '../screens/home';
import Chats from '../screens/chats';
import User from '../screens/user';
import Updates from '../screens/updates';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={28} style={styles.tabBarIcon} {...props} />;
}

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabNavigator({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#003A9B',
        tabBarInactiveTintColor: '#71819C',
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            style={StyleSheet.absoluteFill}
            intensity={75}
            tint="light"
            experimentalBlurMethod="dimezisBlurView"
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          elevation: 0,
          borderTopWidth: 2,
          borderTopColor: 'rgba(0, 0, 0, 0.05)',
        },
        tabBarIconStyle: {
          position: 'absolute',
          top: -16,
          left: 0,
          right: 0,
          bottom: 0,
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              name={`${props.focused ? 'home' : 'home-outline'}`}
              color={`${props.focused ? '#003A9B' : '#71819C'}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              name={`${props.focused ? 'chatbox' : 'chatbox-outline'}`}
              color={`${props.focused ? '#003A9B' : '#71819C'}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              name={`${props.focused ? 'person' : 'person-outline'}`}
              color={`${props.focused ? '#003A9B' : '#71819C'}`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              name={`${props.focused ? 'notifications' : 'notifications-outline'}`}
              color={`${props.focused ? '#003A9B' : '#71819C'}`}
            />
          ),
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
