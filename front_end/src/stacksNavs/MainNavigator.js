import ChoosingScreen from '../screens/ChoosingScreen';
import {init, isUserRegistered, selectToken } from '../features/auth/authSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeAndLogin from './WelcomeAndLogin';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { getToken } from '../features/auth/authSlice';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={ChoosingScreen} name='Choosing Screen' />
        </Stack.Navigator>
    );
};
const MainNavigator = () => {
    const dispatch = useDispatch()
    const Token = useSelector(selectToken)
    console.log(Token)
    const Init =  () => {
       dispatch(getToken());
    }
    useEffect(() => {
        Init()
        console.log(Token)
      },[] )    
    return (
            Token === null ?
              <WelcomeAndLogin /> : <StackNavigator />
      )
       
};
export default MainNavigator;
