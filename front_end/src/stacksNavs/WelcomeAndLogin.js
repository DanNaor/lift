import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useEffect, useState } from 'react';
import LoginScreen from '../screens/LoginScreen';
export default function WelcomeAndLogin() {
  const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={WelcomeScreen} name='welcome screen' />
            <Stack.Screen component={LoginScreen} name='Login Screen'/>
        </Stack.Navigator>
    );
};
  return (
    <StackNavigator></StackNavigator>
  )
}
