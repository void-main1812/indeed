import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { wp } from '~/lib/utils/get_screen_dimensions';
import { RootStackParamList } from '.';
import TabNavigator from './tab-navigator';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;
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
        style={{ height: 27, width: 100 }}></Image>
      <Pressable style={{ padding: 5 }} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} />
      </Pressable>
    </View>
  );
};

export default function DrawerNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'right',
          header() {
            return <DrawerHeader />;
          },
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
    </SafeAreaView>
  );
}
