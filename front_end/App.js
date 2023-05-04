import { Provider } from 'react-redux';
import { store } from './src/app/store'
import { NavigationContainer } from '@react-navigation/native';
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
