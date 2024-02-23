import { Text, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';
// import { Neomorph } from 'react-native-neomorph-shadows';

const Page = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Home</Text>
      <View className={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      {/* <Neomorph
        inner
        style={{
          shadowRadius: 7,
          borderRadius: 90,
          backgroundColor: '#F19F9F',
          width: 180,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Neomorph
          style={{
            shadowRadius: 7,
            borderRadius: 50,
            backgroundColor: '#DDDDDD',
            width: 100,
            height: 100,
          }}
        />
      </Neomorph> */}
    </View>
  );
};

export default Page;

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
