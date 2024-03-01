import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, View } from 'react-native';

const DrawerLayout = () => (
  <Drawer
    screenOptions={{
      drawerStyle: {
        width: 490,
      },
      headerLeft: () => (
        <Link href="/modal" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="info-circle"
                size={25}
                color="gray"
                style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
              />
            )}
          </Pressable>
        </Link>
      ),
      headerRight: () => (
        <FontAwesome name='home' size={25} color='gray' style={styles.headerRight} />
      ),
    }}>
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Tabs',
        drawerLabel: 'Tabs',
        drawerPosition: 'right',

        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
  </Drawer>
);

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
