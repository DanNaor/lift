import ChoosingScreen from '../screens/ChoosingScreen';
import { initAuth, selectUser, selectIsLoading, selectIsEmailVerified, selectError } from '../features/auth/authSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeAndLogin from './WelcomeAndLogin';
import { View, ActivityIndicator,Text } from 'react-native';
import { useEffect } from 'react';
// import EmailVerificationScreen from '../screens/EmailVerificationScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={ChoosingScreen} name='Choosing Screen' />
        </Stack.Navigator>
    );
};
const MainNavigator = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);
    // const isEmailVerified = useSelector(selectIsEmailVerified);
    const error = useSelector(selectError);
    
    useEffect(() => {
        dispatch(initAuth)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (user===null) {
        console.log(user)
        return (
            <WelcomeAndLogin></WelcomeAndLogin>
        );
    } else{
        return StackNavigator()
    }
           
  

};
export default MainNavigator;