import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoosingScreen from './screens/ChoosingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome Screen">
          <Stack.Screen
          name='Welcome Screen'
          component={WelcomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Choosing Screen" component={ChoosingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
