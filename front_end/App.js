import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/store'
import WelcomePage from './pages/WelcomePage';
export default function App() {

  return (
      <Provider store={store}>
        <SafeAreaView>
          <WelcomePage></WelcomePage>
          <StatusBar style="auto" />
        </SafeAreaView>
      </Provider>
  );
}
