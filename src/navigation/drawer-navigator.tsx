import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, View, Text } from 'react-native';

import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
  useNavigationState,
} from '@react-navigation/native';
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
import TermsConditions from '../screens/secondary/TermsConditions';
import PrivacyPolicy from '../screens/secondary/PrivacyPolicy';
import Settings from '../screens/secondary/Settings';

type drawerScreenTypes = {
  name: string;
  component: React.ComponentType<any>;
  drawerlabel: string;
  activeicon: keyof (typeof Ionicons)['glyphMap'];
  inActiveIcon: keyof (typeof Ionicons)['glyphMap'];
  headershow: boolean;
};

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
    component: MyReviews,
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
      {routeName == 'HomeNavigator' ? (
        <Image
          source={require('../../assets/indeed_logo.png')}
          style={{ height: 30, width: 120 }}
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
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          swipeEdgeWidth: 100,
          swipeMinDistance: 50,
          header() {
            return <DrawerHeader routeName={routename} />;
          },
          drawerStyle: {
            width: wp(100),
            paddingHorizontal: 25,
          },
          drawerItemStyle: {
            paddingVertical: 4,
            borderBottomColor: '#e6e6e6',
            borderBottomWidth: 1,
          },
          drawerLabelStyle: {
            fontSize: 16,
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
                // drawerIcon: ({ size, color }) => (
                //   <Ionicons name={item.activeicon} size={size} color={color} />
                // ),
                drawerLabel: item.drawerlabel,
                drawerActiveBackgroundColor: 'transparent',
              }}
            />
          );
        })}
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
