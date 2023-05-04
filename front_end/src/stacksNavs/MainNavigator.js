import ChoosingScreen from '../screens/ChoosingScreen';
import { initAuth, selectUser } from '../features/auth/authSlice';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import WelcomeAndLogin from './WelcomeAndLogin';
import { useEffect } from 'react';
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
    const user = useSelector(selectUser)
    useEffect(() => {
    dispatch(initAuth)    
      },[dispatch] )    
    return (
            user === null ?
              <WelcomeAndLogin /> : <StackNavigator />
      )
       
};
export default MainNavigator;
