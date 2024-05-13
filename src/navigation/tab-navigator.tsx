import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import { BlurView } from 'expo-blur';
import Chats from '../screens/chats';
import Home from '../screens/home';
import Updates from '../screens/updates';
import User from '../screens/user';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; focused: any }) {
  return (
    <Ionicons
      size={28}
      style={styles.tabBarIcon}
      color={`${props.focused ? '#003A9B' : '#454962'}`}
      {...props}
    />
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#003A9B',
        tabBarInactiveTintColor: '#454962',
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            style={StyleSheet.absoluteFill}
            intensity={65}
            tint="light"
            experimentalBlurMethod="dimezisBlurView"
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 6,
        },
        tabBarStyle: {
          height: 90,
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 2,
          borderTopColor: 'rgba(25, 25, 25, 0.05)',
        },
        tabBarIconStyle: {
          position: 'absolute',
          top: -16,
          left: 0,
          right: 0,
          bottom: 0,
          alignSelf: 'center',
        },
        tabBarItemStyle: {
          margin: 10,
          borderRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon
              name={`${props.focused ? 'home' : 'home-outline'}`}
              focused={props.focused}
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
              focused={props.focused}
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
              focused={props.focused}
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
              focused={props.focused}
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
