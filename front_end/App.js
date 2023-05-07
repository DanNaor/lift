import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { NavigationContainer } from '@react-navigation/native';
import './config/firebase-config';
import MainNavigator from './src/stacksNavs/MainNavigator'

if(__DEV__) {
  import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
