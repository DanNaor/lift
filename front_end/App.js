import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChoosingScreen from './src/screens/ChoosingScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { storeData, getItemFor } from './src/helpers/storageHelper';
import { useEffect, useState } from 'react';
import "./config/firebase-config"
import MainNavigator from './src/stacksNavs/MainNavigator';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
