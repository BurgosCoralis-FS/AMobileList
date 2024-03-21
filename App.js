import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Network from 'expo-network';

import styles from './Appstyles';

import Header from './components/Header';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Header level={'3'}>Header</Header>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </SafeAreaView>
  // );
}
