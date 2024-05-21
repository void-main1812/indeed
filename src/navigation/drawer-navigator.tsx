import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hp, wp } from '~/lib/utils/get_screen_dimensions';
import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';
import CompanyProfile from '../screens/secondary/CompanyProfile';
import SalaryGuide from '../screens/secondary/SalaryGuide';
import JobPreferances from '../screens/secondary/JobPreferances';
import ReviewHome from '../screens/secondary/Reviews';
import CustomerSupport from '../screens/secondary/CustomerSupport';
import MyJobs from '../screens/secondary/MyJobs';
import TermsConditions from '../screens/secondary/TermsConditions';
import PrivacyPolicy from '../screens/secondary/PrivacyPolicy';
import Settings from '../screens/secondary/Settings';
import { color } from '~/lib/global';
import { StatusBar } from 'expo-status-bar';

type drawerScreenTypes = {
  name: string;
  component: React.ComponentType<any>;
  drawerlabel: string;
  activeicon: keyof (typeof Ionicons)['glyphMap'];
  inActiveIcon: keyof (typeof Ionicons)['glyphMap'];
  headershow: boolean;
};

// * Drawer Screens to be displayed in the drawer navigator
const DrawerScreens: drawerScreenTypes[] = [
  {
    name: 'HomeNavigator',
    component: TabNavigator,
    drawerlabel: 'Home',
    activeicon: 'home',
    inActiveIcon: 'home-outline',
    headershow: true,
  },
  {
    name: 'Company Profile',
    component: CompanyProfile,
    drawerlabel: 'Company Profile',
    activeicon: 'business',
    inActiveIcon: 'business-outline',
    headershow: true,
  },
  {
    name: 'Salary Guide',
    component: SalaryGuide,
    drawerlabel: 'Salary Guide',
    activeicon: 'cash',
    inActiveIcon: 'cash-outline',
    headershow: true,
  },
  {
    name: 'Job Preferances',
    component: JobPreferances,
    drawerlabel: 'Job Preferances',
    activeicon: 'briefcase',
    inActiveIcon: 'briefcase-outline',
    headershow: true,
  },
  {
    name: 'My Reviews',
    component: ReviewHome,
    drawerlabel: 'My Reviews',
    activeicon: 'star',
    inActiveIcon: 'star-outline',
    headershow: true,
  },
  {
    name: 'Settings',
    component: Settings,
    drawerlabel: 'Settings',
    activeicon: 'settings',
    inActiveIcon: 'settings-outline',
    headershow: true,
  },
  {
    name: 'Customer Support',
    component: CustomerSupport,
    drawerlabel: 'Customer Support',
    activeicon: 'headset',
    inActiveIcon: 'headset-outline',
    headershow: true,
  },
  {
    name: 'My Jobs',
    component: MyJobs,
    drawerlabel: 'My Jobs',
    activeicon: 'id-card',
    inActiveIcon: 'id-card-outline',
    headershow: true,
  },
  {
    name: 'Terms and Conditions',
    component: TermsConditions,
    drawerlabel: 'Terms and Conditions',
    activeicon: 'checkmark-circle',
    inActiveIcon: 'checkmark-circle-outline',
    headershow: true,
  },
  {
    name: 'Privacy Policy',
    component: PrivacyPolicy,
    drawerlabel: 'Privacy Policy',
    activeicon: 'lock-closed',
    inActiveIcon: 'lock-closed-outline',
    headershow: true,
  },
];

type DrawerNavProp = DrawerNavigationProp<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

// * Custom Drawer Items to be rendered with the footer

const DrawerItems = () => {
  return (
    <View style={{ flex: 1 }} className="h-full">
      <View className="absolute flex-row gap-x-4 bottom-0 right-0 w-full py-4 border-t border-gray-300">
        <Ionicons name={'log-out'} size={24} />
        <Text>Log Out</Text>
      </View>
    </View>
  );
};

// *Header for screens in the drawer navigator
const DrawerHeader = ({ routeName }: { routeName: string | undefined }) => {
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
      {routeName === 'HomeNavigator' ? (
        <Image
          source={require('../../assets/indeed_logo.png')}
          style={{ height: 40, width: 80 }}
          contentFit="contain"
        />
      ) : (
        <View>
          <Text className="text-2xl font-semibold text-primary">{routeName}</Text>
        </View>
      )}

      <Pressable style={{ padding: 5 }} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} />
      </Pressable>
    </View>
  );
};

export default function DrawerNavigator() {
  const route = useRoute();
  const routename = getFocusedRouteNameFromRoute(route);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} style={'dark'} />
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          swipeEdgeWidth: 100,
          swipeMinDistance: 50,
          header() {
            return <DrawerHeader routeName={routename ? routename : 'HomeNavigator'} />;
          },
          drawerStyle: {
            width: wp(100),
            paddingHorizontal: hp(1.2),
          },
          drawerItemStyle: {
            paddingVertical: 4,
            paddingHorizontal: 10,
          },
          drawerLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: '400',
          },
        }}>
        {DrawerScreens.map((item, index) => {
          return (
            <Drawer.Screen
              name={item.name}
              key={index}
              // @ts-ignore
              component={item.component}
              options={{
                headerShown: item.headershow,
                drawerIcon(props) {
                  return (
                    <Ionicons
                      name={props.focused ? item.activeicon : item.inActiveIcon}
                      size={24}
                      color={props.color}
                    />
                  );
                },
                drawerLabel: item.drawerlabel,
                drawerActiveBackgroundColor: color.primary[200],
              }}
            />
          );
        })}
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
