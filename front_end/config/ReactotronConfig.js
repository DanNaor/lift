import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

const reactotron=Reactotron.setAsyncStorageHandler(AsyncStorage).configure({
    name: 'Lift',
  })
  .use(reactotronRedux()).useReactNative()
  .connect();
  export default reactotron