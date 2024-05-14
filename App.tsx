import './global.css';

import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

import RootStack from './src/navigation';

export default function App() {
  return <RootStack />;
}
