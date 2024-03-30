import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from '~/lib/utils/get_screen_dimensions';
import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';
import CompanyProfile from '../screens/secondary/CompanyProfile';
import SalaryGuide from '../screens/secondary/SalaryGuide';
import JobPreferances from '../screens/secondary/JobPreferances';
import MyReviews from '../screens/secondary/MyReviews';
import CustomerSupport from '../screens/secondary/CustomerSupport';
import MyJobs from '../screens/secondary/MyJobs';
import Cookies from '../screens/secondary/Cookies';
import TermsConditions from '../screens/secondary/TermsConditions';
import PrivacyPolicy from '../screens/secondary/PrivacyPolicy';
import Settings from '../screens/secondary/Settings';

type DrawerNavProp = DrawerNavigationProp<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

const DrawerHeader = () => {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <View
      style={{
        width: wp('100%'),
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
      }}>
      <Image
        source={require('../../assets/indeed_logo.png')}
        style={{ height: 30, width: 120 }}
        contentFit="contain"
      />
      <Pressable style={{ padding: 5 }} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} />
      </Pressable>
    </View>
  );
};

export default function DrawerNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          swipeEdgeWidth: 100,
          swipeMinDistance: 50,
          header() {
            return <DrawerHeader />;
          },
          drawerStyle: {
            width: wp(100),
          },
        }}>
        <Drawer.Screen
          name="HomeNavigator"
          // @ts-ignore
          component={TabNavigator}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Home',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Company Profile"
          // @ts-ignore
          component={CompanyProfile}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Company Profile',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="SalaryGuide"
          // @ts-ignore
          component={SalaryGuide}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Salary Guide',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Job Preferances"
          // @ts-ignore
          component={JobPreferances}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Job Preferances',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="My Reviews"
          // @ts-ignore
          component={MyReviews}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'My Reviews',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Settings"
          // @ts-ignore
          component={Settings}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Settings',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="CustomerSupport"
          // @ts-ignore
          component={CustomerSupport}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Customer Support',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="My Jobs"
          // @ts-ignore
          component={MyJobs}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'My Jobs',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Cookies"
          // @ts-ignore
          component={Cookies}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Cookies',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Terms and Conditions"
          // @ts-ignore
          component={TermsConditions}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Terms and Conditions',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
        <Drawer.Screen
          name="Privacy Policy"
          // @ts-ignore
          component={PrivacyPolicy}
          options={{
            drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            drawerLabel: 'Privacy Policy',
            drawerActiveBackgroundColor: 'rgba(0, 58, 155, 0.1)',
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
