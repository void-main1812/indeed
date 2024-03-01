import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 100,
          paddingBottom: 20,
          paddingTop: 20,
        },
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats/index"
        options={{
          title: 'Chats',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="send-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user/index"
        options={{
          title: 'User',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          title: 'Updates',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
